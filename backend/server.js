import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
import jwt from 'jsonwebtoken';  
import bcrypt from 'bcryptjs'; 
import UserModel from './models/User.js'; 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "NiSwarthSecretKey";  // Use a default if not in .env

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); 
    }
};
connectDB();

app.use(cors());
app.use(express.json()); 

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};


app.post('/auth/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const emailExist = await UserModel.findOne({ email });
        if (emailExist) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = new UserModel({
            name,
            email,
            password: hashedPassword,
            role,
        });

        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
});

// User Login Route (from index.cjs, adapted to ESM)
app.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Email is not registered' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Create and assign a token
        const token = jwt.sign({ _id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
        const { _id, name, role } = user; // Send back user id, name, and role.
        res.status(200).json({ token, user: { _id, name, email, role } }); // Include user data
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
});

// Get User Profile (Protected Route) (from index.cjs, adapted to ESM)
app.get('/auth/profile', verifyToken, async (req, res) => {
    try {
        //  Populate additional user data if needed
        const user = await UserModel.findById(req.user._id).select('-password'); // Exclude the password
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Profile error:", error);
        res.status(500).json({ message: 'Error fetching profile', error: error.message });
    }
});

import donationRoutes from './routes/donationRoutes.js';  // Import donation routes
app.use('/donations', donationRoutes); // Use the donation routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
