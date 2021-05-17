const jsUser = require('../model/jsonDataBase');
const userModel = jsUser('users');

const {validationResult}  = require('express-validator');


let userController = {
    register: (req, res) => {
        res.render('register');
    },

    login: (req, res) => {
        res.render('login')
    },
    store: (req, res) =>{
        let errores = validationResult(req);
        res.send(errores)
    }
   
}

module.exports = userController