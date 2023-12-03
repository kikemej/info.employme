import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const RevisarOfertasAplicadas = () => {
  const [vacantes, setVacantes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/vacantes/read')
      .then((res) => {
        setVacantes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Vacantes Abiertas</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Salario</th>
            <th>Fecha de publicación</th>
            <th>Aplicar</th>
          </tr>
        </thead>
        <tbody>
          {vacantes.map((vacante) => (
            <tr key={vacante.id}>
              <td>{vacante.Titulo}</td>
              <td>{vacante.Descripcion}</td>
              <td>{vacante.Salario}</td>
              <td>{vacante.fechaPublicacion}</td>
              <td>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => {
                    // Postulation logic here
                  }}
                >
                  Aplica
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RevisarOfertasAplicadas;