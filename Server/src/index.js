const express = require('express');
const server = express();
const PORT = 3001;
const characterRouter=require('./routes/characters')
const login = require('./routes/login');
const FavRouter = require('./routes/handleFav');
//rutas modularizadas
//ver codeReview de hernan clase de Express 
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});
// server.use(express.json())

// server.use("/character",characterRouter)
// server.use("/login",login)
// server.use("/fav",FavRouter)

server.listen(3001, () => {
   console.log('Server listen on port 3001')
})

























server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);

});


