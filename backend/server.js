require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000; 

app.use(cors({ origin: "*", methods: ["GET", "POST", "OPTIONS"], allowedHeaders: ["Content-Type", "Authorization"] }));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log("📩 Incoming Request Data:", req.body);

  try {
    // 🚀 NEW CONFIG: Port 587 (Standard for Cloud Servers)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Port 587 ke liye false hona chahiye
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // ddescrcbjgjaiebw
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: "TLSv1.2"
      },
      connectionTimeout: 30000, // 30 seconds (Render ko thoda time chahiye)
      greetingTimeout: 20000
    });

    const mailOptions = {
      from: `"Eagle Force" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🔥 New enquiry from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    // ⚡ Direct Send (Verify ko skip karo, wo timeout badhata hai)
    await transporter.sendMail(mailOptions);
    console.log("✅ SUCCESS: Email dispatched!");
    
    res.status(200).json({ success: true, message: "Success!" });

  } catch (err) {
    console.error("❌ NODEMAILER ERROR:", err.message);
    res.status(500).json({ error: "Server Error", details: err.message });
  }
});

app.get("/", (req, res) => res.send("Eagle Force API Ready! 🚀"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});