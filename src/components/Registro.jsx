import { useState } from "react";
import Formulario from "./Formulario";
import Alerta from "./Alerta";
import SocialB from "./SocialB";

const Registro = () => {
  const [error, setError] = useState({
    error: "",
    mensaje: "",
    color: "",
  });
  return (
    <>
      <div>
        <SocialB 
        icon="facebook" 
        icon3="google" 
        icon2="twitter"/>
        <Formulario setError={setError} />

        {error.mensaje && (
          <Alerta color={error.color} mensaje={error.mensaje} />    
        )}   
      </div>
    </>
  );
};

export default Registro;
