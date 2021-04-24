const express = require('express')
const app = express()
const path = require('path');
const puerto = process.env.PORT;
const homeRouter = require('./routes/homeRouter');
const productRouter = require('./routes/productRouter');
//const useRouter = require('./routes/useRouter');
//const fs = require('fs');
//let datos = fs.readFileSync(__dirname + '/data/productsDataBase.json', 'UTF-8')

//console.log(datos);
/*const userRouter = require('./routes/useRouter');*/

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', homeRouter);
app.use('/products', productRouter);
//app.use('/list', useRouter);

app.listen(puerto || 3000, function () {
    console.log('Servidor corriendo en el puerto 3000');
});