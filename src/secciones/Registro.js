import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ContenidoRegistro from "../Contents/contenidoRegistro";

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registroConCorreo: false,
      registroConGoogle: false,
      error: null,
    };
  }

  handleRegistroConCorreoClick = () => {
    this.setState({ registroConCorreo: true });
  };

  handleRegistroConGoogleClick = () => {
    this.setState({ registroConGoogle: true });
  };

  render() {
    return (
      <div className="contenedor">
        <Navbar />
        <div className="opciones">
          <h2>Opciones de registro</h2>
          <ul>
            <li>
              <a onClick={this.handleRegistroConCorreoClick}>Registrarse con correo</a>
            </li>
            <li>
              <a onClick={this.handleRegistroConGoogleClick}>Registrarse con Google</a> 
            </li>
          </ul>
        </div>
        <div className="contenido">
          <div id="registro" className={this.state.registroConCorreo ? "registro" : "oculto"}>
            <h3>Registrarse con correo</h3>
            <ContenidoRegistro />
          </div>
          <div id="google" className={this.state.registroConGoogle ? "registro" : "oculto"}>
            <h3>Registrarse con Google</h3>
            <p>Próximamente</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;
