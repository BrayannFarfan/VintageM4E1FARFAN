const express = require('express')
const app = express()
const path = require('path');
const puerto = process.env.PORT;
app.use(express.static('public'));

app.set('view engine', 'ejs');

const homeRouter = require('./routes/homeRouter');
/*const productRouter = require('./routes/productRouter');*/
/*const userRouter = require('./routes/useRouter');*/

app.use('/', homeRouter);
/*app.use('/', userRouter);*/
/*app.use('/product', productRouter);*/











/*
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});
*/
app.listen(puerto || 3000, function () {
    console.log('Servidor corriendo en el puerto 3000');
});