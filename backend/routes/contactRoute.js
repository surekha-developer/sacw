import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // ✅ Save in database
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // ✅ Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📩 Email to Service Center
    const serviceMail = {
        //  from: `"${name}" <${email}>`, // shows the sender as the customer
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Message From car wash",
      text: `📩 New Contact Form Submission:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`,
replyTo: email,
    };

    // 📩 Auto-reply to User
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email, // send to user’s email
subject: "Sai Annapurna Car Wash",
text: `Hello ${name || "User"},

Thank you for reaching out to us! We’ve received your message, and our team will get back to you soon.

For urgent assistance, please message us on WhatsApp at 99666 22822 or call 99666 22822.

 
Here are the details you submitted:
- Email: ${email}
- Phone: ${phone || "Not provided"}
- Message: ${message}

Have a great day! 🚗✨

— Sai Annapurna Car Wash Team
`

    };

    // ✅ Send both emails
    await transporter.sendMail(serviceMail);
    await transporter.sendMail(autoReply);

    res.status(201).json({ success: true, message: "Message saved, emails sent successfully!" });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

export default router;