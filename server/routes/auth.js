const express = require("express");
const router = express.Router();
const authServices = require("../services/authenticator.jsx");

router.post('/login', authServices.login);
router.post('/register', authServices.register);
router.post('/fireAuthSignOn', authServices.fireAuthSignOn);
router.post('/leaderboard', authServices.leaderboard);


module.exports = router;