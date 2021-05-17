const express = require('express')
const app = express()
const path = require('path');

const logMiddleware = require('./middlewares/logMiddleware')
const methodOverride = require('method-override');

const puerto = process.env.PORT;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(logMiddleware);

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}));

const homeRouter = require('./routes/homeRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/useRouter');


app.use('/', homeRouter);

app.use('/users', userRouter);
app.use('/products', productRouter);


app.listen(puerto || 3000, function () {
    console.log('Servidor corriendo en el puerto 3000');
});
