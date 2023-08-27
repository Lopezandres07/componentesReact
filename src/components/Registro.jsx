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
        <SocialB icon="facebook" icon2="twitter" icon3="google" />
        <Formulario setError={setError} />

        {error.mensaje && (
          <Alerta color={error.color} mensaje={error.mensaje} />    
        )}   
      </div>
    </>
  );
};

export default Registro;
