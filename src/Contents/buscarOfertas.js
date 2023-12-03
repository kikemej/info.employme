import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './buscarOfertas.css';

const BuscarOfertas = () => {
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
    <div>
      <h2>Vacantes Abiertas</h2>
      <table>
        <thead>
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
                  type="button"
                  onClick={() => {
                    
                    const idCandidato = 2;
                    const idVacante = 5;
                    const idReclutador = 2;
                    const data = {
                      idCandidato,
                      idVacante,
                      idReclutador,
                      Estado: 'Aplicada',
                    };

                    

                    axios.post('http://localhost:5000/postulaciones/create', data)
                      .then((res) => {
                      console.log(res);
                    })
                    .catch((err) => {
                      console.log(err);
                    });

                   
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

export default BuscarOfertas;