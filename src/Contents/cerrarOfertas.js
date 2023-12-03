import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const CerrarOfertas = () => {
  const [ofertasCerradas, setOfertasCerradas] = useState([]);

  useEffect(() => {
    // Lógica para obtener datos de ofertas cerradas al cargar el componente
    obtenerOfertasCerradas();
  }, []);

  const obtenerOfertasCerradas = async () => {
    try {
      // Realizar llamada a la API para obtener las ofertas cerradas desde la base de datos
      const response = await axios.get("http://localhost:5000/ofertas/cerradas");
      setOfertasCerradas(response.data);
    } catch (error) {
      console.error("Error al obtener ofertas cerradas:", error);
    }
  };

  const handleCerrarOferta = async (idOferta) => {
    try {
      // Realizar llamada a la API para cerrar la oferta con el ID proporcionado
      await axios.post(`http://localhost:5000/ofertas/cerrar/${idOferta}`);
      // Actualizar la lista de ofertas cerradas después de cerrar una oferta
      obtenerOfertasCerradas();
      alert("Oferta cerrada con éxito");
    } catch (error) {
      console.error("Error al cerrar oferta:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Ofertas Cerradas</h2>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Título de la Vacante</th>
            <th>Nombre y Apellido del Candidato Reclutado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ofertasCerradas.map((oferta) => (
            <tr key={oferta.id}>
              <td>{oferta.tituloVacante}</td>
              <td>{oferta.nombreApellido}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleCerrarOferta(oferta.id)}
                >
                  Cerrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CerrarOfertas;