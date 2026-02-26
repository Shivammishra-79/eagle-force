require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*", methods: ["GET", "POST", "OPTIONS"], allowedHeaders: ["Content-Type", "Authorization"] }));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log("📩 Incoming Request Data:", req.body);

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Opps! Saari details bhariye." });
  }

  try {
    // 🔹 MANUALLY CONFIGURED SMTP FOR RENDER
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // SSL Port
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // ddescrcbjgjaiebw
      },
      pool: true, // Connection pool use karega
      maxConnections: 1,
      tls: {
        rejectUnauthorized: false // SSL certificate check bypass karega timeout rokne ke liye
      },
      connectionTimeout: 20000, // 20 seconds wait karega
      socketTimeout: 30000, // 30 seconds connection open rakhega
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🔥 New Eagle Force Enquiry: ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Verify connection
    await transporter.verify();
    
    await transporter.sendMail(mailOptions);
    console.log("✅ SUCCESS: Email sent!");
    
    res.status(200).json({ success: true, message: "Success! We will contact you soon." });

  } catch (err) {
    console.error("❌ NODEMAILER ERROR:", err.message);
    res.status(500).json({ error: "Server Error", details: err.message });
  }
});

app.get("/", (req, res) => res.send("Eagle Force API is Running! 🚀"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});