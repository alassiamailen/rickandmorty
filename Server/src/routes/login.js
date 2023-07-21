const express = require('express')
const loginRouter = express.Router();
const login= require('../controllers/login')
//rutas modularizadas
loginRouter.get('/',login)

module.exports={
    loginRouter
}