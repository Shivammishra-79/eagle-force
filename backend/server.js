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
    const transporter = nodemailer.createTransport({
      // 🚀 ASLI FIX: Direct Gmail SMTP IPv4 use kar rahe hain
      host: "74.125.130.108", // Ye smtp.gmail.com ka direct IPv4 hai
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // ddescrcbjgjaiebw
      },
      // Force IPv4
      family: 4, 
      tls: {
        servername: "smtp.gmail.com", // SSL certificate ke liye zaroori hai
        rejectUnauthorized: false
      },
      connectionTimeout: 20000
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🔥 New Eagle Force Enquiry: ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Fast verify and send
    await transporter.sendMail(mailOptions);
    console.log("✅ SUCCESS: Email sent!");
    
    res.status(200).json({ success: true, message: "Success!" });

  } catch (err) {
    console.error("❌ NODEMAILER ERROR:", err.message);
    res.status(500).json({ error: "Server Error", details: err.message });
  }
});

app.get("/", (req, res) => res.send("Eagle Force API Live! 🚀"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});