// lib/validation-service.ts
import { db } from '@/lib/db';

export class ValidationService {
  async validateEmail(email: string): Promise<{ allowed: boolean; userType?: string }> {
    try {
      const result = await db.query(
        `SELECT user_type FROM users WHERE email = $1`,
        [email.toLowerCase()]
      );
      
      if (result.rows.length > 0) {
        return { allowed: true, userType: result.rows[0].user_type };
      }
      
      return { allowed: false };
    } catch (error) {
      console.error('Database validation error:', error);
      return { allowed: false };
    }
  }
}

export const validationService = new ValidationService();