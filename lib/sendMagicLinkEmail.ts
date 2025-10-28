// lib/sendMagicLinkEmail.ts

export async function sendMagicLinkEmail(
  email: string, 
  token: string,
  direction: 'desktop-to-mobile' | 'mobile-to-desktop'
): Promise<{ success: boolean; jwt?: string; error?: string }> {
  try {
    console.log('🚀 Starting magic link email for:', email);

    // 1. Generate magic token
    //const magicToken = randomBytes(32).toString('hex');
    //const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    {/*}
    // 2. Create user in DB
    await db.query(`
      INSERT INTO users (name, email, role, magic_link_token, token_expires_at, created_at)
      VALUES ($1, $2, $3, $4, $5, NOW())
      ON CONFLICT (email) 
      DO UPDATE SET 
        name = $1,
        role = $3,
        magic_link_token = $4,
        token_expires_at = $5,
        updated_at = NOW()
    `, [name, email, role, magicToken, expiresAt]);
    */}

    // 3. Create the magic link URL
    const baseUrl = process.env.NEXTAUTH_URL || 'https://qikr.co.uk';
    const magicLinkUrl = `${baseUrl}/auth/link?token=${token}`;
    
    // 4. Determine email content
    const device = direction === 'desktop-to-mobile' ? 'iPhone' : 'desktop';
    
    const emailData = {
      to: email,
      subject: `Complete your qikr setup on ${device}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #8B5CF6; text-align: center;">Complete your qikr setup</h1>
          <p>Click the link below to finish setting up qikr on your ${device}:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${magicLinkUrl}" 
               style="background-color: #8B5CF6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
              Complete Setup on ${device}
            </a>
          </div>
          <p style="color: #666; font-size: 14px;">
            <em>This link will expire in 24 hours and can only be used once.</em>
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">
            If you didn't request this link, please ignore this email.
          </p>
        </div>
      `
    };
    
    // 5. Send the fucking email
    console.log('📧 Sending email to:', email);
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify(emailData)
    });

    if (!emailResponse.ok) {
      throw new Error(`Email service error: ${emailResponse.status}`);
    }

    console.log('✅ Magic link email sent successfully to:', email);
    
    return { 
      success: true, 
    };

  } catch (error) {
    console.error('💥 Error in sendMagicLinkEmail:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}