// app/api/auth/otp/verify/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

const globalAny = global as unknown as { 
  otpStore?: Map<string, { code: string; expiresAt: number; attempts: number }> 
};
if (!globalAny.otpStore) {
  console.log('🆕 Creating new otpStore in verify route');
  globalAny.otpStore = new Map();
}
const otpStore = globalAny.otpStore;

export async function POST(request: NextRequest) {
  try {
    console.log('=== VERIFY ROUTE DEBUG ===');
    console.log('🔍 STORE SIZE:', otpStore.size);
    console.log('🔍 STORE ENTRIES:', Array.from(otpStore.entries()));
    
    const { email, code }: { email: string; code: string } = await request.json();
    console.log('🔐 Verify request:', { email, code });

    // FIRST check database connection - if we can't reach DB, reject the request
    try {
      // Simple DB query to ensure connection is alive
      await db.query('SELECT 1');
    } catch (dbError) {
      console.error('❌ Database unavailable:', dbError);
      return NextResponse.json({ 
        error: 'Service unavailable. Please try again when online.' 
      }, { status: 503 });
    }

    const stored = otpStore.get(email);
    
    if (!stored) {
      console.log('❌ No OTP found for:', email);
      console.log('=== END VERIFY DEBUG ===');
      return NextResponse.json({ error: 'OTP not found or expired' }, { status: 400 });
    }

    // 🚨 ADD EXPIRY CHECK
    if (Date.now() > stored.expiresAt) {
      console.log('❌ OTP expired for:', email);
      otpStore.delete(email); // Clean up expired OTP
      console.log('=== END VERIFY DEBUG ===');
      return NextResponse.json({ error: 'OTP expired' }, { status: 400 });
    }

    if (stored.code !== code) {
      console.log('❌ Invalid OTP for:', email);
      console.log('=== END VERIFY DEBUG ===');
      return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
    }

    // Success - but also verify user exists in database
    try {
      const userResult = await db.query(
        `SELECT user_type FROM users WHERE email = $1`,
        [email.toLowerCase()]
      );
      
      if (userResult.rows.length === 0) {
        console.log('❌ User not found in database during OTP verification:', email);
        return NextResponse.json({ error: 'Authentication failed' }, { status: 403 });
      }
    } catch (dbError) {
      console.error('❌ Database error during user verification:', dbError);
      return NextResponse.json({ 
        error: 'Service unavailable. Please try again.' 
      }, { status: 503 });
    }

    // Success
    otpStore.delete(email);
    console.log('✅ OTP verified for:', email);
    console.log('=== END VERIFY DEBUG ===');
    
    // Create session
    const token = Buffer.from(JSON.stringify({
      email,
      timestamp: Date.now(),
      userType: 'demo_user'
    })).toString('base64');

    const response = NextResponse.json({ 
      success: true,
      message: 'Authentication successful'
    });
    
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60
    });

    return response;

  } catch (error) {
    console.error('OTP verification error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}