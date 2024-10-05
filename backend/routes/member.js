const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Member = require('../models/member');


// Changes done by Diwaker
// Route to create a new user
router.post("/members", async (req, res) => {
    try {
        const newMember = new Member(req.body);
        const saved = await newMember.save();
        if (saved) {
            res.status(201).json({ message: "Data Submitted", newMember });
        } else {
            res.status(404).json({ error: "error occurs" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error Occurs", error });
    }
});


module.exports = router;