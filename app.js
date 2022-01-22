require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido extatico
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Cayetano Gomez',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Cayetano Gomez',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Cayetano Gomez',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`);
})