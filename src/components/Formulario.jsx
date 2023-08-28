import { useState } from "react";

const Formulario = ({ setError }) => {
  const [formulario, setformulario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const validarformulario = (e) => {
    e.preventDefault();
    //// Lógica de validación y envío del formulario

    const { nombre, email, password, confirmpassword } = formulario;

    const validarInputs = !nombre || !email || !password || !confirmpassword;

    const validarContraseña = password !== confirmpassword;

    validarInputs
      ? setError({
          error: true,
          mensaje: "completa los campos",
          color: "text-danger",
        })
      : setError({
          error: false,
          mensaje: "cuenta creada con exito",
          color: "text-success",
        });

    if (validarContraseña) {
      setError({
        error: true,
        mensaje: "No coincide el password",
        color: "text-danger",
      });
      return;
    }
    setformulario({
      nombre: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  const handleChange = (e) => {
    setformulario({ ...formulario, [e.target.name]: e.target.value });
  };

  return (
    <>
          <h1>Crea una cuenta</h1>
      <form className="formulario" onSubmit={validarformulario}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            onChange={handleChange}
            value={formulario.nombre}
          />
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Correo@correo.com"
            onChange={handleChange}
            value={formulario.email}
          />
          <input
            type="text"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            onChange={handleChange}
            value={formulario.password}
          />
          <input
            type="text"
            name="confirmpassword"
            className="form-control"
            placeholder="Validar Contraseña"
            onChange={handleChange}
            value={formulario.confirmpassword}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-success">
            Registrate
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
