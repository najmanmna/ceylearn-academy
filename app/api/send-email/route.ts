import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge'; // Needed for Cloudflare Pages

export async function POST(request: Request) {
  // 1. MOVE THE RESEND INITIALIZATION INSIDE THE FUNCTION
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing.' },
        { status: 400 }
      );
    }

    // Modern, responsive HTML email template using inline styles
    const htmlEmail = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Inquiry</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <tr>
              <td style="background-color: #1A2F6B; padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">CEYLEARN ACADEMY</h1>
                <p style="color: #F28D1C; margin: 5px 0 0 0; font-size: 14px;">New Website Inquiry</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 40px 30px;">
                <h2 style="color: #333333; margin-top: 0; font-size: 20px;">Hello Team,</h2>
                <p style="color: #555555; line-height: 1.6; margin-bottom: 30px;">
                  You have received a new message from the contact form on your website. Here are the details:
                </p>
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 6px; padding: 20px; margin-bottom: 30px;">
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 120px;">Name:</td>
                    <td style="padding: 8px 0; color: #0f172a;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td>
                    <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #1A2F6B; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone:</td>
                    <td style="padding: 8px 0; color: #0f172a;">${phone || '<i>Not provided</i>'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Course:</td>
                    <td style="padding: 8px 0; color: #F28D1C; font-weight: bold;">${subject}</td>
                  </tr>
                </table>
                <h3 style="color: #333333; font-size: 16px; margin-bottom: 10px;">Message:</h3>
                <div style="background-color: #ffffff; border-left: 4px solid #1A2F6B; padding: 15px 20px; color: #333333; line-height: 1.6; font-style: italic; border: 1px solid #e2e8f0; border-left-width: 4px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </td>
            </tr>
            <tr>
              <td style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #64748b; font-size: 12px;">
                <p style="margin: 0;">This email was automatically generated from the Ceylearn Academy website contact form.</p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Send the email using Resend
    await resend.emails.send({
      from: process.env.SENDER_EMAIL || 'no-reply@ceylearnacademy.com',
      to: process.env.RECIPIENT_EMAIL || 'ceylearnacademy@gmail.com',
      subject: `New Inquiry: ${subject} - ${name}`,
      html: htmlEmail,
    });

    return NextResponse.json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}