const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const UserModel = require("./models/Users.cjs")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express()

const JWT_SECRET = "NiSwarthSecretKey";

app.use(express.json())
app.use(cors()) 

mongoose.connect("mongodb+srv://NiSwarth:NiSwarth@niswarth.bvuxezr.mongodb.net/ni-swarth-dev?retryWrites=true&w=majority&appName=NiSwarth")
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Register Route
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Request received with:", req.body);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);

    const user = await UserModel.create({ name, email, password: hashedPassword });
    console.log("User saved:", user);

    res.status(201).json(user);
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ message: "User creation failed", error: err.message });
  }
});

// Login Route with JWT
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "No record existed" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "The password is incorrect" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

// JWT Middleware
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Example Protected Route
app.get("/profile", verifyToken, (req, res) => {
  res.json({ message: "Welcome to your profile", user: req.user });
});

app.listen(3001, () => {
  console.log("server is running")
})
