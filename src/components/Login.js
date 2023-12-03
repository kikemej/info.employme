import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import AuthService from "../Services/AuthService";
import axios from 'axios';

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

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <input
        type="text"
        placeholder="Correo electrónico"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
