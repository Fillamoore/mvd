// lib/encryption.ts
import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto';

// Encryption configuration
const ALGORITHM = 'aes-256-gcm';
const SALT_LENGTH = 16;
const IV_LENGTH = 12;
const TAG_LENGTH = 16;
const KEY_LENGTH = 32;

// Derive key from environment variable
function getEncryptionKey(): Buffer {
  const encryptionKey = process.env.ENCRYPTION_KEY;
  if (!encryptionKey) {
    throw new Error("ENCRYPTION_KEY environment variable is not set.");
  }
  
  // Use a fixed salt for deterministic key derivation
  // In production, you might want to use a more sophisticated key management system
  const salt = Buffer.from('aiven-db-encryption-salt'); // Fixed salt for consistency
  
  return scryptSync(encryptionKey, salt, KEY_LENGTH);
}

/**
 * Encrypts text using AES-256-GCM
 */
export function encrypt(text: string): string {
  if (!text) return text;
  
  const key = getEncryptionKey();
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGORITHM, key, iv);
  
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  const authTag = cipher.getAuthTag();
  
  // Combine IV + authTag + encrypted data
  return Buffer.concat([iv, authTag, Buffer.from(encrypted, 'hex')]).toString('base64');
}

/**
 * Decrypts text using AES-256-GCM
 */
export function decrypt(encryptedText: string): string {
  if (!encryptedText) return encryptedText;
  
  try {
    const key = getEncryptionKey();
    const data = Buffer.from(encryptedText, 'base64');
    
    // Extract components
    const iv = data.subarray(0, IV_LENGTH);
    const authTag = data.subarray(IV_LENGTH, IV_LENGTH + TAG_LENGTH);
    const encrypted = data.subarray(IV_LENGTH + TAG_LENGTH);
    
    const decipher = createDecipheriv(ALGORITHM, key, iv);
    decipher.setAuthTag(authTag);
    
    let decrypted = decipher.update(encrypted.toString('hex'), 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data');
  }
}

/**
 * Helper function to check if text is encrypted
 * (Basic check - looks for our encryption structure)
 */
export function isEncrypted(text: string): boolean {
  if (!text) return false;
  try {
    const data = Buffer.from(text, 'base64');
    return data.length >= (IV_LENGTH + TAG_LENGTH + 1); // Minimum length for our encrypted data
  } catch {
    return false;
  }
}