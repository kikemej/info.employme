import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import AuthService from "../Services/AuthService";
import axios from 'axios';
import "./Login.css"; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const history = useHistory(); // Obtener la instancia de history

  const handleLogin = async () => {
    const loggedIn = await AuthService.login(credentials);
    
    if (loggedIn) {
      try {
        const response = await axios.post(`http://localhost:5000/usuarios/mail`, { email: credentials.email }); 
        const tipoDeUsuario = response.data.tipoDeUsuario;
        
        switch (tipoDeUsuario) {
          case 'Reclutador':
            history.push('/dashboard/reclutador');
            break;
          case 'Candidato':
            history.push('/dashboard/candidato');
            break;
          default:
            history.push('/dashboard/general');
        }
      } catch (error) {
        console.log("Error al obtener el tipo de usuario:", error);
      }
    } else {
      console.log("Credenciales incorrectas");
    }
  };

  return(
    <div className="container mt-5"> 
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Iniciar Sesión</h1>
          <div className="card p-4">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Correo electrónico"
                className="form-control"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Contraseña"
                className="form-control"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
            <button className="btn btn-primary w-100" onClick={handleLogin}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;