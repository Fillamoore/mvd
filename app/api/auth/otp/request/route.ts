import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendOTPEmail } from '@/lib/email-service';

console.log('🚀 OTP route triggered');

const globalAny = global as unknown as {
  otpStore?: Map<string, { code: string; expiresAt: number; attempts: number }>
};

if (!globalAny.otpStore) {
  console.log('🆕 Creating new otpStore in request route');
  globalAny.otpStore = new Map();
}
const otpStore = globalAny.otpStore;

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 OTP route triggered');

    const { email }: { email: string } = await request.json();
    console.log('📧 OTP request for:', email);

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    let result;
    try {
      result = await db.query(
        `SELECT user_type FROM users WHERE email = $1`,
        [email.toLowerCase()]
      );
    } catch (dbError) {
      console.error('❌ Database error:', dbError);
      return NextResponse.json({
        error: 'Database connection failed. Please try again later.'
      }, { status: 503 });
    }

    if (!result || result.rows.length === 0) {
      console.log('❌ Email not found or not allowed:', email);
      return NextResponse.json({ error: 'Access not allowed for this email' }, { status: 403 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000;

    otpStore.set(email.toLowerCase(), {
      code: otp,
      expiresAt,
      attempts: 0
    });

    console.log('🔐 Generated OTP for:', email);
    console.log('📊 Current OTP store size:', otpStore.size);

    try {
      await sendOTPEmail(email, otp);
      console.log('✅ Email sent to:', email);
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Verification code sent to your email'
    });

  } catch (error: any) {
    console.error('❌ Uncaught error in OTP route:', error);
    return NextResponse.json({
      error: error?.message || 'Internal server error'
    }, { status: 500 });
  }
}
