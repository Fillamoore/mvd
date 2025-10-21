// /scripts/encrypt-db.js
const { Client } = require('pg'); // or your database client
const crypto = require('crypto');

const ENCRYPTION_KEY = 'FINANCIAL SECURITY IS ALL IN HIS GRACE!!!';

function encrypt(text) {
  const cipher = crypto.createCipherv('aes-256-cbc', ENCRYPTION_KEY);
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}

async function encryptAllModules() {
  const client = new Client({
    // your Aiven DB connection details
  });
  
  await client.connect();
  
  // Read all modules
  const result = await client.query('SELECT module_id, title, content_body FROM modules WHERE is_encrypted = FALSE');
  
  for (const row of result.rows) {
    const encryptedTitle = encrypt(row.title);
    const encryptedContent = encrypt(row.content_body);
    
    await client.query(
      'UPDATE modules SET title = $1, content_body = $2, is_encrypted = TRUE WHERE module_id = $3',
      [encryptedTitle, encryptedContent, row.module_id]
    );
    
    console.log(`Encrypted module ${row.module_id}`);
  }
  
  await client.end();
}

encryptAllModules();