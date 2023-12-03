import React, { useState } from 'react';
import PublicarOferta from '../Contents/publicarOferta';
import RevisarOfertasAplicadas from '../Contents/revisarOfertasAplicadas';
import CerrarOfertas from '../Contents/cerrarOfertas';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const ReclutadorDashboard = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarRevisarOfertas, setMostrarRevisarOfertas] = useState(false);
  const [mostrarCerrarOfertas, setMostrarCerrarOfertas] = useState(false);

  const handlePublicarOferta = () => {
    setMostrarFormulario(true);
    setMostrarRevisarOfertas(false);
    setMostrarCerrarOfertas(false);
  };

  const handleRevisarOfertas = () => {
    setMostrarFormulario(false);
    setMostrarRevisarOfertas(true);
    setMostrarCerrarOfertas(false);
  };

  const handleCerrarOfertas = () => {
    setMostrarFormulario(false);
    setMostrarRevisarOfertas(false);
    setMostrarCerrarOfertas(true);
  };

  const handleCerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  const handleCerrarSesion = () => {
window.location.href = '/login';
  };

   
  return (
    <div className="container mt-5">
      <div className="d-flex flex-column align-items-center">
        <h2>Reclutador</h2>
        <div className="btn-group mb-3" role="group" aria-label="Basic example">
          <button className="btn btn-outline-primary" onClick={handlePublicarOferta}>Publicar Oferta</button>
          <button className="btn btn-outline-secondary" onClick={handleRevisarOfertas}>Revisar ofertas aplicadas</button>
          <button className="btn btn-outline-success" onClick={handleCerrarOfertas}>Cerrar ofertas</button>
          <button className="btn btn-outline-danger" onClick={handleCerrarSesion}>Cerrar sesión</button>
        </div>
        {mostrarFormulario && <PublicarOferta />}
        {mostrarRevisarOfertas && <RevisarOfertasAplicadas />}
        {mostrarCerrarOfertas && <CerrarOfertas />}
      </div>
    </div>
  );
};

export default ReclutadorDashboard;