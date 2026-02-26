require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors({ origin: "*" }));
app.use(express.json());

// 🔍 Console log to verify Env on Render
console.log("--- SYSTEM CHECK ---");
console.log("User:", process.env.EMAIL_USER);
console.log("--- STARTING SERVER ---");

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465, // Render ke liye 465 zyada stable hai
      secure: true, 
      pool: true,   // Connections ko maintain rakhne ke liye
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false // Connection errors se bachne ke liye
      },
      connectionTimeout: 15000, // 15 seconds timeout
      greetingTimeout: 10000,
    });

    const mailOptions = {
      from: `"Eagle Force Website" <${process.env.EMAIL_USER}>`,
      to: "sam7317892429@gmail.com", 
      replyTo: email,
      subject: `🔥 New Web Enquiry: ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ SUCCESS: Email Sent!");
    res.status(200).json({ success: true, message: "Enquiry sent!" });

  } catch (err) {
    console.error("❌ ERROR DETAILS:", err.message);
    res.status(500).json({ error: "Failed to send email", details: err.message });
  }
});

app.get("/", (req, res) => res.send("Eagle Force API is Live! 🚀"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});