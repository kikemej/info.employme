import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <h2>Ofertas Cerradas</h2>
      <table>
        <thead>
          <tr>
            <th>Título de la Vacante</th>
            <th>Nombre y Apellido del Candidato Reclutado</th>
            <th>Cerrar</th>
          </tr>
        </thead>
        <tbody>
          {ofertasCerradas.map((oferta) => (
            <tr key={oferta.id}>
              <td>{oferta.tituloVacante}</td>
              <td>{oferta.nombreApellido}</td>
              <td>
                <button onClick={() => handleCerrarOferta(oferta.id)}>Cerrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CerrarOfertas;
