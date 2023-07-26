const express = require('express');
const router = express.Router();
const lobbyServices = require("../services/lobbyService.js");

router.get('/tables', lobbyServices.tables);
router.post('/join/:tableId', lobbyServices.join);
router.post('/leave/:tableId', lobbyServices.leave);

module.exports = router;