

const postFav=(req,res)=>{
    try {
        let myFavorites=[];
        myFavorites.push(req.body)
        return res(200).json(myFavorites)
        
    } catch (error) {
        return res(404).send(error.message)
    }
    
}
const deleteFav=(req,res)=>{
    try {
        let myFavorites=[];
        const filterFav= myFavorites.filter(per=> per.id !== req.params.id)
        myFavorites = filterFav;
        return res(200).json(myFavorites)
    } catch (error) {
        return res(404).send(error.message)
    }

}
module.exports={
    postFav,
    deleteFav
}
