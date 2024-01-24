import React, { useState, useEffect } from 'react'
import '/Estilos/Usuarios.css'
import editar from '../assets/firma.svg'
import agregar from '../assets/agregar.svg'
import { Link } from 'react-router-dom'
import UsuarioService from '../../service/UsuarioService'
import Loader from '../layouts/Loader'
import EditarUsuarioForm from './EditarUsuarioFormulario'
import toast from 'react-hot-toast'
import ExportButton from '../components/ExportarExcel'

// Inicio filtro



const DatosTabla = ({ usuarios, onEdit }) => {
  const [filtro, setFiltro] = useState('')
  
  const manualChangeFiltro = (e) => {
    setFiltro(e.target.value)
  }
  
  
  const datosFiltrados = usuarios.filter((item) =>
  Object.values(item).some(
    (value) => typeof  value === 'string' && value.toLowerCase().includes(filtro.toLowerCase())
    )
    )
    //Fin filtro
    
    return (
    <div>
      <div className="table-header">
        <input
          type="text"
          placeholder="Filtrar por nombre, área, rol, identificación o equipo..."
          value={filtro}
          onChange={manualChangeFiltro}
          className='filter-imput'
        />
        <div className='contenedor-boton-agregar-usuario'>
          <Link className='boton-agregar-usuario' to="/dashboard/usuarios/agregausuario">
            <img src={agregar} alt="" className='agregar' />
            <label > Nuevo Usuario </label>
          </Link>
        </div>
          <ExportButton tableId="tableId" />
        </div>

      <table id='tableId' className='tabla'>
        <thead>
          <tr>
            <th>Editar</th>
            <th>ID</th>
            <th>Nombre</th>
            <th>correo</th>
            <th>Área</th>
            <th>Rol</th>
            <th>Ubicacion</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {datosFiltrados.map((item) => (
            <tr key={item.doc_identidad}>
              <td><img src={editar} onClick={()=> onEdit(item)} className='editar' alt="Editar" /></td>
              <td>{item.doc_identidad}</td>
              <td>{item.nombre}</td>
              <td>{item.correo}</td>
              <td>{item.area.tipo_area}</td> 
              <td>{item.rol.tipo_rol}</td>
              <td>{item.ubicacion.lugar}</td>
              <td>{item.estado_usuario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const Usuarios = () => {

  const [editando, setEditando] = useState(false)
  const [usuarioEditado, setUsuarioEditado] = useState(null)
  const [loader, setLoader] = useState(true)
  const [datosUsuarios, setDatosUsuarios] = useState([])
  const [recargarPag, setRecargar] = useState(0)

  useEffect(() => {
    return () => { 
      LlamarDatos()
    }
  }, [recargarPag])

  const manualEdit = (user) => {
    console.log('Editando usuario:', user)
    setEditando(true)
    setUsuarioEditado(user)
  }


  
  const manualGuardado = (usuarioActualizado) => {
    console.log('Antes de la llamada a la API')
    console.log(usuarioActualizado)
    UsuarioService.updateUser(usuarioActualizado)
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
    setUsuarioEditado(null)
  } 
  
  
  
  
  const LlamarDatos = () => {
    setLoader(true)
    UsuarioService.getall()
    .then(response => {
      setLoader(false)
      if(response?.data.usuariosCreados){
        setDatosUsuarios(response.data.usuariosCreados)
      }
    })
    .catch(error => {
      setLoader(false)
      console.error('Error obteniendo usuarios:', error)
    })
  }
  
  return (
    <div>
    <h1>Tabla de Usuarios</h1>
    {!loader && (
      <>
        <DatosTabla usuarios={datosUsuarios} onEdit={manualEdit} />
        {editando && (
          <EditarUsuarioForm
            user={usuarioEditado}
            onSave={manualGuardado}
            onCancel={handleCancelEdit}
          />
        )}
      </>
    )}
    {loader && <Loader />}
  </div>
  )
}

export default Usuarios
