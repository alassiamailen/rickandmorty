import { Connect, connect } from "react-redux";
import Card from "../Card/Card";
import { useDispatch , useSelector} from "react-redux";
import { orderCards,filterCards } from "../../Redux/actions";
import { useState } from "react";


const Favorites = (props) => {
  const [aux,setAux]= useState(false)
  const dispatch = useDispatch()
  //const myfavorites= useSelector((state)=>state.myfavorites)

  const handleOrder = (event)=>{ 
        dispatch(orderCards(event.target.value))
        if(aux){
          setAux(false)
        }else{
          setAux(true)
        }
      }
  const handleFilter = (event)=>{
    dispatch(filterCards(event.target.value))
  }
  return (
    <>
      {props.myfavorites?.map((fav) => {
        return (
          <Card          
            key={fav.id}
            id={fav.id}
            name={fav.name}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
            onClose={props.onClose}
          />          
        );
      })}
      <select onChange={handleOrder}>
      <option value= 'A'>Ascendente</option>
      <option value= 'D'>Descendente</option>
      </select>
      <select onChange={handleFilter}>
      <option value= 'Male'>Male</option>
      <option value= 'Female'>Female</option>
      <option value= 'Genderless'>Genderless</option>
      <option value= 'unknown'>unknown</option>
      </select>

    </>
  );
};
export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);