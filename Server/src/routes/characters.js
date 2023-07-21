const express = require('express')
const characterRouter = express.Router();
const {getCharById}=require('../controllers/getCharById')
//rutas modularizadas

characterRouter.get('/:id',getCharById)

module.exports={
    characterRouter
}