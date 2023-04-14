import React, { useState } from "react";
import "./form.css";
const Form = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [validationError, setValidationError] = useState({
    usernameError: "",
    passwordError: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    validate();
  };

  const validate = () => {
    let usernameError = "";
    let passwordError = "";

    // Validar username
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userData.username) {
      usernameError = "El nombre de usuario no puede estar vacío";
    } else if (userData.username.length > 35) {
      usernameError =
        "El nombre de usuario no puede tener más de 35 caracteres";
    } else if (!emailRegex.test(userData.username)) {
      usernameError =
        "El nombre de usuario debe ser un correo electrónico válido";
    }

    // Validar password
    const passwordRegex = /^(?=.*[0-9]).{6,10}$/;
    if (!userData.password) {
      passwordError = "La contraseña no puede estar vacía";
    } else if (!passwordRegex.test(userData.password)) {
      passwordError =
        "La contraseña debe tener al menos un número y tener una longitud entre 6 y 10 caracteres";
    }

    setValidationError({ usernameError, passwordError });

    return usernameError === "" && passwordError === "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      props.login(userData);
    }
  };

  return (
    <div className="contenedor">
      <form autoComplete="off" onSubmit={handleSubmit} className="formulario">
        <h1>Login</h1>
        <div className="inputcaja">
          <input
            className="inputname"
            name="username"
            type="text"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="username" className="labelname">
            username
          </label>
        </div>
        {validationError.usernameError && (
          <div className="errornombe">{validationError.usernameError}</div>
        )}
        <div className="inputcajas">
          <input
            className="inputpassord"
            name="password"
            type="password"
            onChange={handleInputChange}
            required
          />
          <label className="labelpassword" htmlFor="password">
            password
          </label>
        </div>
        {validationError.passwordError && (
          <div className="errorcontraseña">{validationError.passwordError}</div>
        )}
        <img
          className="ajasin"
          src="https://www.pngplay.com/wp-content/uploads/12/Rick-And-Morty-Wallpaper-PNG-Background.png"
          alt=""
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
