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
    </div>
  )
}

const datosHistorial = () => {
  const {id_equipo} = useParams()
  const [datosHistoriales, setHistorial] = useState([])


  useEffect(() => {
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