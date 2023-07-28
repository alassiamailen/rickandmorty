import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "ROMOVE_FAV";
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'




// export const addFav=(personaje)=>{
//     return{
//         type:ADD_FAV,
//         payload:personaje
//     }
// }
export const addFav = (character) => {
  return async (dispatch) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
        const response = await axios.post(endpoint, character)
            return dispatch({
                type: "ADD_FAV",
                payload: response.data,
            });
        };
    };

export const removeFav = (id) => {
  return async (dispatch) => {
    console.log(id);
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    const {data} = await axios.delete(endpoint)
        return dispatch({
            type: "REMOVE_FAV",
            payload: data,
        });
    }
  };

export const filterCards = (gender) =>{
  return{
    type: FILTER,
    payload: gender,

  }
}
export const orderCards = (orden) =>{
  return{
    type: ORDER,
    payload: orden,
  }
}