// middleware/auth.js
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Ganti dengan kunci rahasia kamu

function authenticateToken(req, res, next) {
    const token = req.header('Authorization').split(' ')[1];
    
    if (!token) return res.status(401).json({ message: 'Akses ditolak' });

    try {
        const verified = jwt.verify(token, secretKey);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token tidak valid' });
    }
}

module.exports = authenticateToken;