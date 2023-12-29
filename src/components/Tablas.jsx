import React, { useState } from 'react'


const ConsultasTabla = () => {
    const [mostrarTabla, setMostrarTabla] = useState(false);
  
    const datosDeConsulta = [
      { id: 1, nombre: 'Consulta 1', resultado: 'Resultado 1' },
      { id: 2, nombre: 'Consulta 2', resultado: 'Resultado 2' },
      { id: 3, nombre: 'Consulta 3', resultado: 'Resultado 3' },
      // Puedes agregar más datos según sea necesario
    ];
  
    const handleClick = () => {
      setMostrarTabla(!mostrarTabla);
    };
  
    return (
      <div>
        <button onClick={handleClick}>Mostrar Consultas</button>
  
        {mostrarTabla && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre de la Consulta</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody>
              {datosDeConsulta.map((consulta) => (
                <tr key={consulta.id}>
                  <td>{consulta.id}</td>
                  <td>{consulta.nombre}</td>
                  <td>{consulta.resultado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };


export default ConsultasTabla