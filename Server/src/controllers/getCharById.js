const axios= require('axios')
const URL= "https://rickandmortyapi.com/api/character/";

 const getCharById=(req,res)=>{
    const {id}= req.params
    axios(`${URL}${id}`).then(
      (response)=> {
        console.log(response)
        const {data} = response
        if(data.error){
          return res.status(404).send("ID inexistente")
        }        
        const obj={
            id: +id,
            name:data.name,
            gender:data.gender,
            species:data.species,
            origin:data.name,
            image:data.image,
            status:data.status
        }  
        return res.status(200).json(obj)      
      }).catch(error=>{
        return res.status(500).send(error.message)
      })
      
}
module.exports={
    getCharById
}