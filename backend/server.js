require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// 🔹 CORS: Production + Localhost dono handle karega
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173", "https://eagle-force.vercel.app"], // Apne frontend links yahan add karein
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log("📩 New Request Received:", req.body);

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Opps! Saari details bhariye." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Eagle Force Enquiry: ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email Sent Successfully!");
    res.status(200).json({ message: "Success! We will contact you soon." });

  } catch (err) {
    console.error("❌ Nodemailer Error:", err);
    res.status(500).json({ error: "Server Error", details: err.message });
  }
});

app.get("/", (req, res) => res.send("Eagle Force API is Live! 🚀"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});