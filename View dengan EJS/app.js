const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});

app.get('/', (req, res) => {
    const name = 'ChatGPT';
    const items = ['Apel', 'Jeruk', 'Mangga'];
    res.render('index', { name, items });
  });