require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors({ origin: "*" }));
app.use(express.json());

// 🔍 Debugging to confirm Env Variables on Render
console.log("--- SYSTEM CHECK ---");
console.log("Email User:", process.env.EMAIL_USER ? "LOADED ✅" : "MISSING ❌");
console.log("--------------------");

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // Secure Port
      secure: true,
      pool: true, // Connection maintain karne ke liye
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // 🚀 RENDER SPECIFIC FIXES
      tls: {
        rejectUnauthorized: false, // Security handshake bypass
      },
      connectionTimeout: 20000, // 20 seconds wait time
      greetingTimeout: 20000,
    });

    const mailOptions = {
      from: `"Eagle Force Website" <${process.env.EMAIL_USER}>`,
      to: "sam7317892429@gmail.com", 
      replyTo: email,
      subject: `🔥 New Web Enquiry: ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ SUCCESS: Email Sent to your Inbox!");
    res.status(200).json({ success: true, message: "Enquiry sent!" });

  } catch (err) {
    console.error("❌ FINAL ERROR DETAILS:", err.message);
    res.status(500).json({ error: "Server Error", details: err.message });
  }
});

app.get("/", (req, res) => res.send("Eagle Force API is Live! 🚀"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});