const express = require('express')
const app = express()
const port = 3000
const path = require('path');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port '+ port);
});

app.get('/views/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/views/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

