import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css';
import { NavLink} from "react-router-dom";



const Nav = ({onSearch})=>{
    return(
    <div className={style.nav}>
        <button className={style.home}>
            <NavLink to='/home'>Home</NavLink>
        </button>
        <button className={style.home}>
            <NavLink to='/about'>About</NavLink>
        </button>
        <button>
            <NavLink to= '/favorites'>Favorites</NavLink>
        </button>
        
       <SearchBar onSearch={onSearch}/>
    </div>
    )
}
export default Nav;