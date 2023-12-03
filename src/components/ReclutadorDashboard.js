import React, { useState } from 'react';
import PublicarOferta from '../Contents/publicarOferta';
import RevisarOfertasAplicadas from '../Contents/revisarOfertasAplicadas';
import CerrarOfertas from '../Contents/cerrarOfertas';

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
    // Implement logout logic here
    // Redirecting to login page or dispatching a logout action
  };

   
  return (
     <div className="dashboard-container">
       <div className="opciones">
         <h2>Reclutador</h2>
         <button onClick={handlePublicarOferta}>Publicar Oferta</button>
         <button onClick={handleRevisarOfertas}>Revisar ofertas aplicadas</button>
         <button onClick={handleCerrarOfertas}>Cerrar ofertas</button>
         {/* Otros botones */}
         <button onClick={handleCerrarSesion}>Cerrar sesión</button>
       </div>
       <div className="contenido">
         <div className="contenido-publicar-oferta">
           {mostrarFormulario && (
             <PublicarOferta onClose={handleCerrarFormulario} />
           )}
         </div>
         {mostrarRevisarOfertas && <RevisarOfertasAplicadas />}
         {mostrarCerrarOfertas && <CerrarOfertas />}
         {/* Otro contenido */}
       </div>
     </div>
  );
};

export default ReclutadorDashboard;
