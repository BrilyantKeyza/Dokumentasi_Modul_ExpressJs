const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/mahasiswa').sequelize;
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', mahasiswaRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
});