import { REMOVE_FAV,ADD_FAV,FILTER,ORDER } from "./actions"

const initialState={
    myFavorites:[],
    access:false,
    allCharacters : []
}

const reducer=(state= initialState,action)=>{  
    
    switch(action.type){
        case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };
      case REMOVE_FAV:
        return { ...state, myFavorites: action.payload };
        case FILTER:                           
            const allCharacterFilter = state.allCharacters.filter(gen=> gen.gender === action.payload)
            return{
                ...state,
                myFavorites:allCharacterFilter
            }
            case ORDER: {
                let ordenados;
                if (action.payload === "Ascendente") {
                   ordenados = state.myFavorites.sort((a, b) =>
                      a.id - b.id ? 1 : -1
                   );
                } else {
                   ordenados = state.myFavorites.sort((a, b) =>
                      b.id - a.id ? 1 : -1
                   );
                }
       
                return {
                   ...state,
                   myFavorites: [...ordenados],
                };
             }
                
        default:
            return{
                ...state
            }
    }
}

export default reducer;