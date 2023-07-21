import "./App.css";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Deatil from "./components/Deatil/Deatil";
import Form from "./components/Form/Form";
import { useLocation } from "react-router-dom";
import { render } from "react-dom";
import { Validate } from "./components/Validation/Validation";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Favorites from "./components/Favorites/Favorites";
import { connect } from "react-redux";

function App() {
   function onSearch(id) {
      if (characters.find((char) => char.id === Number(id))) {
         return window.alert("Ya puedes ver ese personaje.");
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((characters) => [...characters, data]);
            }
         })
         .catch((error) => window.alert("¡No hay personajes con este ID!"));
   }

   function onClose(id) {
      let arrayFiltrado = characters.filter((pj) => pj.id !== id); //pasar id a numero
      setCharacters(arrayFiltrado);
   }
   
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "maailu22@gmail.com";
   const PASSWORD = "q";

   useEffect(() => {
      !access && navigate("/");
   }, [access]);

   function login(userData){
      const { email, password } = userData;
      const URL = 'http://localhost:3001/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   return (
      <div className="App">
         {pathname !== "/" && <Nav onSearch={onSearch} />}

         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route
               path="/home"
               element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route
               path="/favorites"
               element={<Favorites onClose={onClose} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Deatil />} />
         </Routes>
      </div>
   );
}

const mapStateToProps = (state) => {
   return { myFavorites: state.myFavorites };
};
export default connect(mapStateToProps, null)(App);
