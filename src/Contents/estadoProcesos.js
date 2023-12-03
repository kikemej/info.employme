import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const EstadoProcesos = () => {
  const [processes, setProcesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/aplicaciones/estado')
      .then((res) => {
        setProcesses(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError('Error al cargar los estados de los procesos');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center">Cargando...</div>;
  if (error) return <div className="alert alert-danger" role="alert">{error}</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Estado de los Procesos</h1>
      {processes.length > 0 ? (
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Título de la Vacante</th>
              <th>Estado</th>
              <th>Fecha de Aplicación</th>
            </tr>
          </thead>
          <tbody>
            {processes.map((process, index) => (
              <tr key={index}>
                <td>{process.vacancyTitle}</td>
                <td>{process.status}</td>
                <td>{process.applicationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-info" role="alert">
          No hay procesos para mostrar.
        </div>
      )}
    </div>
  );
};

export default EstadoProcesos;
