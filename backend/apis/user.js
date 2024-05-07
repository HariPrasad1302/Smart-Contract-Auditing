const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../utilities");

//Create User
router.post("/createUser", async (req, res) => {
    const { fullName, emailID, password } = req.body;

    if (!fullName) {
        return res.status(400).json({ error: true, message: "Full Name is required" });
    }
    if (!emailID) {
        return res.status(400).json({ error: true, message: "Email is required" });
    }
    if (!password) {
        return res.status(400).json({ error: true, message: "Password is required" });
    }

    try {
        const isUser = await User.findOne({ emailID: emailID });
        if (isUser) {
            return res.status(400).json({ error: true, message: "User already exists" });
        }
        const user = new User({
            fullName,
            emailID,
            password,
        });

        await user.save();

        const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "36000m",
        });

        return res.json({
            error: false,
            user,
            accessToken,
            message: "Registration Successful",
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});

//User Login
router.post("/userlogin", async (req, res) => {
    const { emailID, password } = req.body;

    if (!emailID || !password) {
        return res.status(400).json({ error: true, message: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ emailID });

        if (!user) {
            return res.status(401).json({ error: true, message: "User not found" });
        }

        if (password !== user.password) {
            return res.status(401).json({ error: true, message: "Invalid password" });
        }

        const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "36000m",
        });

        return res.json({
            error: false,
            user,
            accessToken,
            message: "Login successful",
        });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});


//Get User

router.get("/getUser", async (req, res) =>{
    const {_id} = req.body;

    if(!_id){
        return res.status(400).json({error: true, message:"User ID is required"});
    }
    
    try {
        const user = await User.findById({_id});

        if (!user) {
            return res.status(401).json({ error: true, message: "User not found" });
        }

        return res.json({
            error: false,
            user        
        });
    }catch(error){
        console.error("Error in finding user:", error);
        return res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});


module.exports = router;
