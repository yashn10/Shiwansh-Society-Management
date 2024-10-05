const express = require('express');
const router = express.Router();
const User = require('./user');
const Member = require('./member');
const Login = require('./login');



router.use('/login', Login);
router.use('/member', Member);
router.use('/user', User);



module.exports = router;