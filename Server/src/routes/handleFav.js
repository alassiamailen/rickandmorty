const express = require('express')
const FavRouter = express.Router();
const {postFav,deleteFav} = require('../controllers/handleFavorites')
//rutas modularizadas
FavRouter.post('/fav',postFav)
FavRouter.delete('/:id',deleteFav)

module.exports={
    FavRouter
}