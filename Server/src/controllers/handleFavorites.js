

let myFavorites=[];
const postFav=(req,res)=>{
    myFavorites.push(req.body)
    return res.json(myFavorites)
}
const deleteFav=(req,res)=>{
    const filterFav= myFavorites.filter(per=> per.id !== req.params.id)
    myFavorites = filterFav;
    return res.json(myFavorites)
}
module.exports={
    postFav,
    deleteFav
}
