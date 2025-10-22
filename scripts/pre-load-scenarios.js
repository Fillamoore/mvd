// This script runs as a 'prebuild' hook to fetch live, sequential module data
// from the PostgreSQL database (Aiven) and write it to a static JavaScript
// file for the frontend, bypassing dynamic API calls during deployment.

// Using CommonJS require syntax for maximum compatibility with 'node' executor.
const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

// --- Configuration ---

// The path where the final static data file will be written.
const OUTPUT_FILE_PATH = path.join(__dirname, '..','data', 'scenarios-content.ts');
// The DB connection string is expected to be set in the environment
const DATABASE_URL = process.env.DATABASE_URL;

// Paths to head and tail files
const HEAD_FILE_PATH = path.join(__dirname, 'top.ts');
const TAIL_FILE_PATH = path.join(__dirname, 'tail.ts');

/**
 * @typedef {Object} ScenarioItem
 * @property {number} id - The unique module ID.
 * @property {string} title - The title of the module (from the 'name' column).
 * @property {string} content_body - The JSON content string. NOTE: Must be JSON.parsed() in the client app.
 */

/**
 * Validates and cleans JSON strings to ensure they are properly formatted
 */
function validateAndCleanJSON(jsonString) {
    if (!jsonString || typeof jsonString !== 'string') {
        return '[]'; // Return empty array if invalid
    }

    try {
        // First, try to parse it to validate it's proper JSON
        JSON.parse(jsonString);
        // If it parses successfully, return the original (it's valid)
        return jsonString;
    } catch (error) {
        console.warn('⚠️  Found invalid JSON, attempting to clean...');
        
        // Basic cleaning: escape unescaped quotes and backslashes
        let cleaned = jsonString
            // Escape backslashes that aren't already escaped
            .replace(/([^\\])\\([^"\\/bfnrtu])/g, '$1\\\\$2')
            // Escape unescaped quotes
            .replace(/([^\\])"/g, '$1\\"')
            // Remove trailing commas in objects and arrays
            .replace(/,(\s*[}\]])/g, '$1');

        try {
            // Try parsing the cleaned version
            JSON.parse(cleaned);
            console.log('✅ Successfully cleaned invalid JSON');
            return cleaned;
        } catch (cleanError) {
            console.error('❌ Could not clean JSON, replacing with empty array:', cleanError.message);
            return '[]'; // Fallback to empty array
        }
    }
}

// --- Main Execution Function ---

async function generateScenarioContent() {
    if (!DATABASE_URL) {
        console.error('❌ Error: DATABASE_URL environment variable is not set.');
        console.error('   Please run: $env:DATABASE_URL="<your-uri>" before executing the script.');
        process.exit(1);
    }

    // Read head and tail files
    let headContent = '';
    let tailContent = '';
    
    try {
        if (fs.existsSync(HEAD_FILE_PATH)) {
            headContent = fs.readFileSync(HEAD_FILE_PATH, 'utf8');
            console.log('📁 Head file loaded successfully');
        } else {
            console.warn('⚠️  Head file not found, proceeding without it');
        }
        
        if (fs.existsSync(TAIL_FILE_PATH)) {
            tailContent = fs.readFileSync(TAIL_FILE_PATH, 'utf8');
            console.log('📁 Tail file loaded successfully');
        } else {
            console.warn('⚠️  Tail file not found, proceeding without it');
        }
    } catch (err) {
        console.error('❌ Error reading head or tail files:');
        console.error(err.message);
        process.exit(1);
    }

    // AGGRESSIVE SSL BYPASS: Configure the client to always require SSL (per Aiven's mandate)
    // but unconditionally reject strict authorization to bypass the "self-signed certificate" error.
    const clientConfig = {
        connectionString: DATABASE_URL,
        ssl: {
            // Set rejectUnauthorized to false to allow self-signed certificates (Aiven's default).
            rejectUnauthorized: false
        }
    };

    // NOTE: The pg client will now look for the `ssl` object for configuration,
    // which prevents the URI parameter from conflicting with our code here.
    const client = new Client(clientConfig);

    console.log('🔗 Connecting to Aiven database...');

    try {
        await client.connect();

        // SQL Query: Selects ID, NAME (aliased as title), and CONTENT_BODY
        // Orders by ID ascending to ensure sequential module delivery.
        const result = await client.query(`
            SELECT
                module_id,
                title,
                content_body
            FROM
                modules
            ORDER BY
                module_id ASC;
        `);

        /** @type {ScenarioItem[]} */
        const data = result.rows;

        // Validate and clean all content_body fields
        console.log('🔍 Validating JSON content in all modules...');
        let invalidCount = 0;
        
        const cleanedData = data.map((item, index) => {
            const originalContent = item.content_body;
            const cleanedContent = validateAndCleanJSON(originalContent);
            
            if (cleanedContent !== originalContent) {
                invalidCount++;
                console.warn(`⚠️  Fixed invalid JSON in module ${item.module_id} (row ${index + 1})`);
            }
            
            return {
                ...item,
                content_body: cleanedContent
            };
        });

        if (invalidCount > 0) {
            console.warn(`⚠️  Fixed ${invalidCount} modules with invalid JSON content`);
        }

        // --- File Content Generation ---
        const dbContent = `
/**
 * WARNING: This file is AUTO-GENERATED by the pre-build script (scripts/pre-load-scenarios.js).
 * DO NOT EDIT MANUALLY.
 *
 * This content is read directly from the 'modules' table in the Aiven database
 * during the build process to provide static, type-safe scenario content.
 */

/**
 * @typedef {Object} ScenarioItem
 * @property {number} module_id - The unique module ID.
 * @property {string} title - The title of the module.
 * @property {string} content_body - The JSON content string (must be parsed).
 */

/** @type {ScenarioItem[]} */
const SCENARIOS_CONTENT = ${JSON.stringify(cleanedData, null, 2)};

export {
  SCENARIOS_CONTENT
};
`;

        // Combine all parts: head + db content + tail
        const fileContent = headContent + dbContent + tailContent;

        fs.writeFileSync(OUTPUT_FILE_PATH, fileContent.trim());
        console.log(`\n✅ Success! ${cleanedData.length} scenarios loaded.`);
        console.log(`   Data saved to: ${OUTPUT_FILE_PATH}`);

    } catch (err) {
        console.error('\n❌ Fatal Database Error during pre-build:');
        console.error(err.message || err);
        process.exit(1);

    } finally {
        await client.end();
    }
}

generateScenarioContent();