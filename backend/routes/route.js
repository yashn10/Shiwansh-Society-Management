const express = require('express');
const router = express.Router();


const Member = require('./member');
const Login = require('./login');
const Society = require('./addSociety');
const House = require('./addHouse');
//const Report=require('./houseReport');




router.use('/login', Login);
router.use('/member', Member);
router.use('/society', Society);
router.use('/house', House);
//router.use('/report', Report);



module.exports = router;
