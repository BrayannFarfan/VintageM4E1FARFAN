const express = require('express');
const router = express.Router();
const userController = require('../controller/useController');
const { body }  = require('express-validator');

const validateCreateForm = [
    body('nombreCompleto').notEmpty().withMessage('Campo Obligatorio'),
    body('nombreDeUsuario').notEmpty().withMessage('Campo Obligatorio'),
    body('email').isEmail().withMessage('El email es invalido'),
    body('nacimiento').notEmpty().withMessage('Campo Obligatorio'),
    body('fotoUsuario').notEmpty().withMessage('Campo Obligatorio'),

]

router.get('/register',userController.register);

router.post('/register', validateCreateForm,userController.store);

router.get('/login', userController.login);

router.post('/login',userController.store);

module.exports = router;