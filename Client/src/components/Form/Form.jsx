import style from "./Form.modules.css";
import { useState } from "react";

const Form = ({login}) => {
  const [userDate, setDate] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setDate({
      ...userDate,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    login(userDate);   
  }
  return (
    <div className="cajita">
      <form>
        <label htmlFor="email">Email:</label>
        <input
          value={userDate.email}
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="ingrese su mail"
        />
        <hr />
        <label htmlFor="password">Password:</label>
        <input
          value={userDate.password}
          type="password"
          name="password"
          placeholder="ingrese un password"
          onChange={handleChange}
        />
        <hr />
        <button className='submit' onClick={handleSubmit}>Submit  </button>
      </form>
    </div>
  );
};
export default Form;
