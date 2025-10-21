require('dotenv').config({ path: '.env.local' });

console.log('🔍 Environment check:');
console.log('ENABLE_SPOOFING:', process.env.ENABLE_SPOOFING);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('All env vars with ENABLE:', Object.keys(process.env).filter(k => k.includes('ENABLE')));

// Test if the file is being read
if (!process.env.ENABLE_SPOOFING) {
  console.log('❌ .env.local not loading properly');
} else {
  console.log('✅ .env.local loaded successfully');
}