import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Company/Admin ko mail

await transporter.sendMail({
  from: process.env.EMAIL_USER,

  to: "anshulmalik81@gmail.com", // apni email id

  subject: `New Contact Message from ${name}`,

  html: `
    <h2>New Contact Form Submission</h2>

    <p><b>Name:</b> ${name}</p>

    <p><b>Email:</b> ${email}</p>

    <p><b>Message:</b> ${message}</p>
  `,
});


// 2. User ko confirmation mail

await transporter.sendMail({
  from: process.env.EMAIL_USER,

  to: email,

  subject: "Thanks for contacting RideSphere",

  html: `
    <h2>Hello ${name}</h2>

    <p>Thank you for contacting RideSphere.</p>

    <p>We have received your message and will get back to you soon.</p>

    <p><b>Your message:</b></p>

    <p>${message}</p>
  `,
});
    return Response.json(
      { success: true, message: "Email sent" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

