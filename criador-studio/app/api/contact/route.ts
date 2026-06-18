import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

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
