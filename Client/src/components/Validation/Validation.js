import Form from "../Form/Form";

const Validate = (userDate, setErrors, errors) => {
  if (!/\S+@\S+\.\S+/.test(userDate.email)) {
    setErrors({
      ...errors,
      email: "Debe ingresar un mail válido"
    });
  }
  if (userDate.email === null){
    setErrors({
      ...errors,
      email: "Debe ingresar un mail para poder avanzar",
    })
  }
   if(userDate.email.legth>35){
    setErrors({
        ...errors,
        email: "El nombre de usuario debe tener menos de 35 caracteres",
      });
   }
   if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/.test(userDate.password)){
    setErrors({
        ...errors,
        password:'La contraseña tiene que tener al menos un numero y una longitud entre 6 y 10 caracteres.'
    })
   }
    return errors;
};
export default Validate;
