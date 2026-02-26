require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
// Render automatically PORT assign karta hai
const PORT = process.env.PORT || 10000; 

// 🔹 1. CORS CONFIGURATION (Sabse Pehle)
app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// 🔹 2. CONTACT FORM ROUTE
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log("📩 Incoming Request Data:", req.body);

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Opps! Saari details bhariye." });
  }

  try {
    // 🔹 3. TRANSPORTER WITH IPv4 & TIMEOUT FIXES
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password: ddescrcbjgjaiebw
      },
      // 🚀 ASLI FIXES: IPv4 connection force aur timeouts
      socket: {
        family: 4 // ENETUNREACH error ko khatam karne ke liye
      },
      pool: true, // Connections ko reuse karega
      tls: {
        rejectUnauthorized: false // Certificate issues bypass karega
      },
      connectionTimeout: 20000, // 20 seconds wait karega
      greetingTimeout: 10000
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      replyTo: email,
      subject: `🔥 New Eagle Force Enquiry: ${name}`,
      text: `
        New Enquiry Details:
        -------------------
        Name:    ${name}
        Phone:   ${phone}
        Email:   ${email}
        Message: ${message}
        -------------------
      `,
    };

    // Connection verify karein
    await transporter.verify();
    
    // Email bhejein
    await transporter.sendMail(mailOptions);
    console.log("✅ SUCCESS: Email sent successfully!");
    
    res.status(200).json({ success: true, message: "Success! We will contact you soon." });

  } catch (err) {
    console.error("❌ NODEMAILER ERROR:", err.message);
    res.status(500).json({ 
      error: "Server Error", 
      details: err.message,
      hint: "Check Render Env Variables for correct EMAIL_USER and EMAIL_PASS"
    });
  }
});

// 🔹 4. HEALTH CHECK
app.get("/", (req, res) => res.send("Eagle Force API is Running Smoothly! 🚀"));

// 🔹 5. SERVER START
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});