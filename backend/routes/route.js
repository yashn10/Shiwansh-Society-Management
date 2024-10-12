const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const Country = require('../models/country');
const User = require('../models/user');
const AddSociety=require("../models/AddSociety");
const NewHouse=require("../models/NewHouse");
const Users = require('./user');
const Member = require('./member');
const Login = require('./login');




router.use('/login', Login);
router.use('/member', Member);
router.use('/user', Users);


router.get("/country", async (req, res) => {
    try {
        const data = await Country.find();
        res.status(201).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error occurs", error });
    }
})


router.get("/country/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Country.findById(id);
        res.status(201).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error occurs", error });
    }
})


router.delete("/country/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Country.findByIdAndDelete(id);
        res.status(201).json({ message: "data deleted successfully", data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error occurs", error });
    }
})


router.patch("/country/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { countryname } = req.body;
        const data = await Country.findByIdAndUpdate(id, req.body);
        res.status(201).json({ message: "data updated successfully", data })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error occurs", error });
    }
})


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


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = await user.generateAuthToken();
        if (!token) {
            return res.status(500).json({ error: "User login failed" });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        res.status(200).json({ message: "User login successful", token, decoded });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error occurs", error });
    }
})

//////
router.post("/create",async(req,res)=>{
    const{SocityName,NoOfHouse,Address,city,pincode}=req.body;

    try{
        const society=new AddSociety(req.body);
        const saved=await society.save();
        if(saved){
            res.status(201).json({message:"data submited for society"});

        }else{
            res.status(404).json({error:"error occur in society field"});

        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"server error occur",error});
    }
});

router.post("/NewHouse",async(req,res)=>{
    const{SocityNo,BlockNo,HouseType,Details}=req.body;

    try{
        const NewHouseEntry=new NewHouse(req.body);
        const saved=await NewHouseEntry.save();
        if(saved){
            res.status(201).json({message:"data submited for new house"});
        }else{
            res.status(404).json({error:"error occur in new house filed "})
        }


    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"server error occur"});
    }
})
module.exports=router;
