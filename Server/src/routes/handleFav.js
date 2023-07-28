const express = require('express')
const FavRouter = express.Router();
const {postFav,deleteFav} = require('../controllers/handleFavorites')
//rutas modularizadas
FavRouter.post('/',postFav)
FavRouter.delete('/:id',deleteFav)

module.exports={
    FavRouter
}