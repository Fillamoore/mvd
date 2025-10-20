// lib/email-service.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export function generateOTPEmail(code: string) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Your qikr login code:</h2>
      <p style="font-size: 32px; font-weight: bold; letter-spacing: 8px; text-align: center; margin: 30px 0;">
        ${code}
      </p>
      <p>Enter this code to access your account. It will expire in 10 minutes.</p>
      <p style="color: #666; font-size: 14px;">If you didn't request this, please ignore this email.</p>
    </div>
  `;
}

export async function sendOTPEmail(email: string, code: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'qikr <auth@newgamenewrules.com>',
      to: [email],
      subject: `Your qikr login code: ${code}`,
      html: generateOTPEmail(code),
    });

    if (error) {
      console.error('❌ Email error:', error);
      throw error;
    }

    console.log('✅ Email sent successfully to:', email);
    return data;
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    throw error;
  }
}