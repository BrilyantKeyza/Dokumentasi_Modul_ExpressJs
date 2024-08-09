const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');

router.get('/', mahasiswaController.getAllMahasiswa);
router.get('/add', (req, res) => res.render('add'));
router.post('/add', mahasiswaController.createMahasiswa);
router.get('/edit/:id', mahasiswaController.getMahasiswaById);
router.post('/edit/:id', mahasiswaController.updateMahasiswa);
router.post('/delete/:id', mahasiswaController.deleteMahasiswa);

module.exports = router;