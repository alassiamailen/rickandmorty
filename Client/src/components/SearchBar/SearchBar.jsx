import styles from "./SearchBar.module.css";
import { useState } from "react";
export default function SearchBar({ onSearch }) {
  let [id, setId] = useState("");
  const handleChange = (event) => {
   
    setId([event.target.value]);
  };
  return (
    <div className={styles.buscador}>
      <input
        value={id}
        onChange={handleChange}
        className={styles.espacio}
        type="search"
      />
      <button  value={id} className={styles.boton} onClick={() => onSearch(id)}>
        Agregar
      </button>
    </div>
  );
}
