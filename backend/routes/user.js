const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


router.post("/user", async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const user = new User(req.body);
        const saved = await user.save();
        if (saved) {
            return res.status(201).json({ message: "user registered successfully" });
        } else {
            return res.status(400).json({ error: "user registration failed" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error occurs", error });
    }
})


router.get("/user", async (req, res) => {
    try {
        const data = await User.find();
        res.status(201).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error occurs", error });
    }
})


module.exports = router;