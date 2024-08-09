// routes/protected.js
const express = require('express');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Ini adalah rute terproteksi', user: req.user });
});

module.exports = router;