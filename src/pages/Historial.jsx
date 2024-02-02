import React, { useEffect, useState } from 'react'
import ComputoHistorialService from '../../service/ComputoHistorialService'
import { useParams } from 'react-router-dom'

const Historial = ({histori}) => {



  return (
    <div>
      <table className='tabla'>
        <thead>
          <tr>
            <th>No. Historial</th>
            <th>Id. Equipo</th>
            <th>Doc. Usuario</th>
            <th>Observaciones</th>
            <th>Ruta del Acta</th>
            <th>Estado Historial</th>
            <th>Modificado</th>
          </tr>
        </thead>
        <tbody>
        {histori.map((hist) => (
          <tr key={hist.id_historial}>
            <td>{hist.id_historial} </td>
            <td>{hist.id_equipo} </td>
            <td>{hist.doc_identidad} </td>
            <td>{hist.ruta_acta} </td>
            <td>{hist.observaciones} </td>
            <td>a </td>
            <td>{hist.updatedAt} </td>
          </tr>
          ))}
        </tbody>
      </table>
      <div className="card-content">
      {histori.map((item) => (
        <div className="carta" key={item.id_historial}>
          <p className='nombre-u-carta'> Mov Nro: {item.id_historial}</p> 
          <p><span className='item-card-data'>Id Equipo: </span> {item.id_equipo}</p> 
          <p><span className='item-card-data'>Id Usuario: </span> {item.doc_identidad}</p> 
          <p><span className='item-card-data'>Observaciones: </span> {item.observaciones}</p> 
          <p><span className='item-card-data'>Fecha R: </span> {item.updatedAt}</p> 
          <p className='editar-u-carta'>{item.ruta_acta} </p>
        </div>
      ))}
        
      </div>
    </div>
  )
}

const datosHistorial = () => {
  const {id_equipo} = useParams()
  const [datosHistoriales, setHistorial] = useState([])


  useEffect(() => {
    console.log(id_equipo)
    LlamarHistorial()
    console.log('Longitud de histori:', datosHistoriales.length)
  }, [id_equipo])

  const LlamarHistorial = () => {
    ComputoHistorialService.getHistorial(id_equipo)
    .then(response => {
      console.log('Respuesta de la API:', response.data)
      if (response?.data.equipoConHistorial){
        setHistorial(response.data.equipoConHistorial.historial)
        console.log(response.data.equipoConHistorial.historial)
      }
    })
    .catch(error => {
      console.error('Error obteniendo historial:', error)
    })
  }
  return (
    <div>
      <h1>Tabla de Historiales  {id_equipo} </h1>
      <Historial histori={datosHistoriales}    />
    </div>
  )


}

export default datosHistorial