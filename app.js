require('dotenv').config();
const hbs = require('hbs');
const express = require('express');
const app = express();
const PORT = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Lucas Gonzalez',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Lucas Gonzalez',
    titulo: 'Curso de Node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Lucas Gonzalez',
    titulo: 'Curso de Node'
  });
})

app.get('*', (req, res) => {
  // res.send('404 | Page not found');
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(PORT, () => {
  console.log(`Listen on port: ${PORT}`);
})