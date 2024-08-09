const Mahasiswa = require('../models/mahasiswa');

exports.getAllMahasiswa = async (req, res) => {
    const mahasiswa = await Mahasiswa.findAll();
    res.render('index', { mahasiswa });
};

exports.createMahasiswa = async (req, res) => {
    const { nama, nis, kelas } = req.body;
    await Mahasiswa.create({ nama, nis, kelas });
    res.redirect('/');
};

exports.getMahasiswaById = async (req, res) => {
    const mahasiswa = await Mahasiswa.findByPk(req.params.id);
    res.render('edit', { mahasiswa });
};

exports.updateMahasiswa = async (req, res) => {
    const { nama, nis, kelas } = req.body;
    await Mahasiswa.update({ nama, nis, kelas }, {
        where: { id: req.params.id }
    });
    res.redirect('/');
};

exports.deleteMahasiswa = async (req, res) => {
    await Mahasiswa.destroy({ where: { id: req.params.id } });
    res.redirect('/');
};