// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models'); // Model User dihubungkan ke database
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Validasi data input
    if (!username || !email || !password) {
        return res.status(400).send('Semua field harus diisi');
    }

    // Hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // Simpan user ke database
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: 'User berhasil terdaftar', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan', error });
    }
});

module.exports = router;


// routes/auth.js
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Ganti dengan kunci rahasia kamu

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Cari user berdasarkan email
    const user = await User.findOne({ where: { email } });

    if (!user) {
        return res.status(404).json({ message: 'Email tidak ditemukan' });
    }

    // Cek password
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
        return res.status(401).json({ message: 'Password salah' });
    }

    // Buat token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });

    res.json({ message: 'Login berhasil', token });
});

const hashedPassword = await bcrypt.hash(password, 10);

const isMatch = await bcrypt.compare(password, user.password);

const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });