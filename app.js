const express = require('express')
const app = express()
const path = require('path');
const puerto = process.env.port;
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.listen(puerto || 3000, function () {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/views/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/views/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

