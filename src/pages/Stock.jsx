import React, { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import '/Estilos/Stock.css'
import editar from '../assets/firma.svg'
import EquipoService from '../../service/EquipoService'
import agregar from '../assets/agregar.svg'
import EditarEquipoForm from './EditaEquipoFormulario'
import Loader from '../layouts/Loader'
import toast from 'react-hot-toast'
import ExportButton from '../components/ExportarExcel'
import historial from '../assets/historial.svg'
import asignar from '../assets/asignar.svg'
import AsignaUsuario from './AsignaUsuario'
import usuario from '../assets/usuario.svg'

const ContenedorFiltro = ({ equipos, onEdit, onAsingar}) => {
    const [buscar, setBuscar] = useState('')

  const buscador = (e) => {
    setBuscar(e.target.value)
  }
  const datosFiltrados = equipos.filter((item) =>
  Object.values(item).some(
    (value) => typeof  value === 'string' && value.toLowerCase().includes(buscar.toLowerCase())
    ))

    return (
      <div>
        <label>
          Filtrar por texto:
          <input
            type="text"
            value={buscar}
            onChange={buscador}
            className='filter-imput'
          />
          <div className='contenedor-boton-agregar-usuario'>
          <Link className='boton-agregar-usuario' to="/dashboard/gestion/stock/agregarequipo">
            <img src={agregar} alt="" className='agregar' />
            <label > Nuevo Equipo </label>
          </Link>
        </div>
        <ExportButton tableId="tableId" />
        </label>
            <table id='tableId' className='tablastock'>
                <thead>
                    <tr>
                        <th>Editar</th>
                        <th>Historial</th>
                        <th>Usuario Asignado</th>
                        <th>Id. Proveedor</th>
                        <th>Placa</th>
                        <th>Marca</th>
                        <th>Tipo</th>
                        <th>Contingencia</th>
                        <th>Procesador</th>
                        <th>Descripcion</th>
                        <th>Sistema</th>
                        <th>RAM</th>
                        <th>Almacenamiento</th>
                        <th>Estado</th>
                        <th>Asignar Usuario</th>
                    </tr>
                    </thead>
                    <tbody>
                    {datosFiltrados.map((item) => (
                    <tr key={item.id_equipo}>
                        <td><img src={editar} onClick={()=> onEdit(item)} className='editar' /></td>
                        <td><Link to={`/dashboard/gestion/stock/historial/${item.id_equipo}`}><img src={historial} className='editar'  /></Link></td>
                        <td>{item.historial[0]?.usuario ? (
                      // Si hay un usuario asignado, muestra la información del usuario
                          <>
                            {item.historial[0]?.usuario.doc_identidad} <br /><br />
                            {item.historial[0]?.usuario.nombre}
                          </>
                                ) : (
                      // Si no hay un usuario asignado, muestra la imagen
                      <img src={usuario} className='editar' alt="Imagen de usuario no asignado" />)}</td>
                        <td>{item.identificacion_prov}</td>
                        <td>{item.placa_numero_serie}</td>
                        <td>{item.marca.marca} </td>
                        <td>{item.tipo_equipo.tipo_equipo} </td>
                        <td>{item.contingencia} </td>
                        <td>{item.procesador} </td>
                        <td>{item.descripcion} </td>
                        <td>{item.sistema_operativo} </td>
                        <td>{item.ram} </td>
                        <td>{item.almacenamiento} </td>
                        <td>{item.estado.estado} </td>
                        <td><img src={asignar} onClick={()=> onAsingar(item)} className='editar' /></td>
                    </tr>
                ))}
                </tbody>
            </table>
      </div>
    )
  }

  const Equipos = () => {
  
    const [editando, setEditando] = useState(false)
    const [equipoEditado, setEquipoEditado] = useState(null)
    const [datosEquipos, setEquipos] = useState([])
    const [recargarPag, setRecargar] = useState(0)
    const [loader, setLoader] = useState(true)
    const [asignando, setAsignando] = useState(false)
    const [equipoAsignado, setEquipoAsignado ] = useState(null)
    
    useEffect(() => { 
        LlamarEquipos()
      
    }, [recargarPag])

    const manualEdit = (equipo) => {
      console.log('Editando Equipo:', equipo)
      setEditando(true)
      setEquipoEditado(equipo)
    }
    const manualAsignar = (asing) => {
      console.log('Asignando Equipo:', asing)
      setAsignando(true)
      setEquipoAsignado(asing)
    }

    const manualGuardado = (equipoActualizado) => {
      console.log('Antes de la llamada a la API')
      console.log(equipoActualizado)
      EquipoService.updateequipo(equipoActualizado)
      .then(response => {
        if (response.data) {
            toast(response.data.message, {
                icon: '✅✅✅',
                style: {
                    borderRadius: '10px',
                    width:"500px",
                    background:"#bcf7c5"
                  }
              })
              setRecargar(recargarPag+1)
              setEditando(false)
            }
          })
          .catch(error => {
            if(error.response.status==403){
                error.response.data.errors.forEach(el => {
                    if(el.msg != 'Invalid value'){
                        toast(el.msg, {
                            icon: '❌❌❌',
                            style: {
                                borderRadius: '10px',
                                width:"500px",
                                background:"#f7f7bc"
                              },
                          })
                    }
                })
            }
          })
    }
    const handleCancelEdit = () => {
      setEditando(false)
      setEquipoEditado(null)
    }

    const LlamarEquipos = () => {
      setLoader(true)
      EquipoService.getequipos()
      .then(response => {
        setLoader(false)
        console.log(response)
        if(response?.data.equipoConHistorial){
          setEquipos(response.data.equipoConHistorial)
        }
      })
      .catch(error => {
        setLoader(false)
        console.error('Error maldito', error)
      })
    }
    
    return (
      <div>
        <h1>Stock</h1>
          {!loader && (
            <>
            <ContenedorFiltro  equipos={datosEquipos} onEdit={manualEdit} onAsingar={manualAsignar} />
            {editando && (
              <EditarEquipoForm
                equipo={equipoEditado}
                onSave={manualGuardado}
                onCancel={handleCancelEdit}
              />
            )}
            {asignando && (
              <AsignaUsuario 
              asigna={equipoAsignado}
              onCancel={() => setAsignando(false)}
              />
            )}
          </>
          )}
          {loader && <Loader />}
      </div>

    )
  }
  
  export default Equipos