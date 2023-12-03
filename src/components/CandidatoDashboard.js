import React, { useState } from "react";
import CrearCV from "../Contents/CrearCV";
import BuscarOfertas from "../Contents/buscarOfertas";
import EstadoProcesos from "../Contents/estadoProcesos";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const CandidatoDashboard = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarBuscarOfertas, setMostrarBuscarOfertas] = useState(false);
  const [mostrarEstadoProcesos, setMostrarEstadoProcesos] = useState(false);

  const handleCrearCV = () => {
    setMostrarFormulario(true);
    setMostrarBuscarOfertas(false);
    setMostrarEstadoProcesos(false);
  };

  const handleBuscarOfertas = () => {
    setMostrarFormulario(false);
    setMostrarBuscarOfertas(true);
    setMostrarEstadoProcesos(false);
  };

  const handleEstadoProcesos = () => {
    setMostrarFormulario(false);
    setMostrarBuscarOfertas(false);
    setMostrarEstadoProcesos(true);
  };

  const handleCerrarFormulario = () => {
    setMostrarFormulario(false);
  };
  const handleCerrarSesion = () => {
   
  };

return (
  <div className="container mt-5">
    <h2 className="mb-4">Candidato:</h2>
    <div className="btn-group mb-3" role="group">
      <button className="btn btn-outline-primary" onClick={handleCrearCV}>Crear CV</button>
      <button className="btn btn-outline-secondary" onClick={handleBuscarOfertas}>Buscar ofertas</button>
      <button className="btn btn-outline-success" onClick={handleEstadoProcesos}>Estado de procesos</button>
      <button className="btn btn-outline-danger" onClick={handleCerrarSesion}>Cerrar sesión</button>

    </div>
    <div>
      {mostrarFormulario && <CrearCV onClose={handleCerrarFormulario} />}
      {mostrarBuscarOfertas && <BuscarOfertas />}
      {mostrarEstadoProcesos && <EstadoProcesos />}
    </div>
  </div>
);
};

export default CandidatoDashboard;
