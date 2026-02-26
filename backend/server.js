require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// 🔹 CORS CONFIGURATION (Sabse Important)
app.use(cors({
  origin: "*", // Sabhi domains ko allow karega
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// 🔹 CONTACT FORM ROUTE
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // 🔹 SIMPLIFIED GMAIL TRANSPORTER (Best for Render/Cloud)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // 16-digit App Password bina spaces ke
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Email bhejte waqt wait karega
    await transporter.sendMail(mailOptions);
    console.log("✅ SUCCESS: Email Sent!");

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ DETAILED ERROR:", err);
    res.status(500).json({ 
      error: "Failed to send email.", 
      details: err.message 
    });
  }
});

// 🔹 TEST ROUTE
app.get("/", (req, res) => {
  res.send("Eagle Force Server is Running");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});