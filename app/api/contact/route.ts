import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Input Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, subject, message) are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Environment Variable Check
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const receiver = process.env.CONTACT_RECEIVER || user;

    if (!user || !pass) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables.");
      return NextResponse.json(
        { error: "Server configuration error. Email service is unavailable." },
        { status: 500 }
      );
    }

    // Configure Nodemailer Transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    // Email Payload Construction
    const mailOptions = {
      from: `"Durgesh Portfolio" <${user}>`,
      to: receiver,
      replyTo: `"${name}" <${email}>`,
      subject: `Portfolio Inquiry: ${subject}`,
      text: `New message from ${name} (${email}):\n\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0284c7; margin-top: 0; font-size: 20px; font-weight: 700;">New Contact Form Submission</h2>
          <div style="margin-bottom: 16px; font-size: 14px; color: #334155;">
            <p style="margin: 4px 0;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 4px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></p>
            <p style="margin: 4px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 14px; font-weight: 600; color: #0f172a; margin-bottom: 8px;">Message:</p>
          <div style="white-space: pre-wrap; background-color: #f8fafc; padding: 16px; border-radius: 8px; color: #334155; font-size: 14px; border: 1px solid #f1f5f9;">${message}</div>
          <p style="font-size: 11px; color: #94a3b8; margin-top: 24px; text-align: center;">This message was sent from your portfolio website contact form.</p>
        </div>
      `,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Your message has been delivered successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error sending email via Nodemailer:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}