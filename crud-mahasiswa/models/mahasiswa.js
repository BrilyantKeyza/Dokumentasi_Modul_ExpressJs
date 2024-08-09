const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const Mahasiswa = sequelize.define('Mahasiswa', {
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nis: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    kelas: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Mahasiswa;