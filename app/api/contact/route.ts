import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    // Validation
    const errors: string[] = []
    
    if (!name || name.trim().length < 2) {
      errors.push('Name is required and must be at least 2 characters long')
    }
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('A valid email address is required')
    }
    
    if (!message || message.trim().length < 10) {
      errors.push('Message is required and must be at least 10 characters long')
    }
    
    if (errors.length > 0) {
      return NextResponse.json({ error: 'Validation failed', errors }, { status: 400 })
    }

    // Initialize Resend only when we need to send an email
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'info@malgudiarts.com',
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="color: #2E2A26; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #8C857C; font-size: 13px; width: 130px;">Full Name</td><td style="padding: 10px 0; color: #2E2A26; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: #8C857C; font-size: 13px;">Email</td><td style="padding: 10px 0; color: #2E2A26; font-weight: 600;">${email}</td></tr>
            <tr><td style="padding: 10px 0; color: #8C857C; font-size: 13px;">Phone</td><td style="padding: 10px 0; color: #2E2A26; font-weight: 600;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 10px 0; color: #8C857C; font-size: 13px; vertical-align: top;">Message</td><td style="padding: 10px 0; color: #2E2A26;">${message}</td></tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
