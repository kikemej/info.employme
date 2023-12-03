import React, { useState } from "react";
import CrearCV from "../Contents/CrearCV";
import BuscarOfertas from "../Contents/buscarOfertas";
import EstadoProcesos from "../Contents/estadoProcesos";

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

  return (
    <div className="dashboard-container">
      <div className="opciones">
        <h2>Candidato:</h2>
        <button onClick={handleCrearCV}>Crear CV</button>
        <button onClick={handleBuscarOfertas}>Buscar ofertas</button>
        <button onClick={handleEstadoProcesos}>Estado de procesos</button>
        {/* Otros botones */}
      </div>
      <div className="contenido">
        <div className="contenido-crear-cv">
          {mostrarFormulario && (
            <CrearCV onClose={handleCerrarFormulario} />
          )}
        </div>
        {mostrarBuscarOfertas && <BuscarOfertas />}
        {mostrarEstadoProcesos && <EstadoProcesos />}
        {/* Otro contenido */}
      </div>
    </div>
  );
};

export default CandidatoDashboard;
