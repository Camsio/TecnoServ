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
  
  
  
const buscarEnObjeto = (valor, filtro) => {
  if (typeof valor === 'object' && valor != null) {
    // Si el valor es un objeto, realiza la búsqueda de manera recursiva
    return Object.values(valor).some((nestedValue) => buscarEnObjeto(nestedValue, filtro));
  } else if (typeof valor === 'string' && valor.toLowerCase().includes(filtro.toLowerCase())) {
    return true;
  }
  return false;
};

const datosFiltrados = usuarios.filter((item) => Object.values(item).some((value) => buscarEnObjeto(value, filtro)));

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
            <ExportButton tableId="tableId" />
          </div>
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
              <td>{item.estado_usuario?"OK":"OKn't"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="card-content">
      {datosFiltrados.map((item) => (
        <div className="carta" key={item.doc_identidad}>
          <p className='nombre-u-carta'>{item.nombre}</p> 
          <p><span className='item-card-data'>ID: </span> {item.doc_identidad}</p> 
          <p><span className='item-card-data'>correo:</span> {item.correo}</p> 
          <p><span className='item-card-data'>Área:</span> {item.area.tipo_area}</p> 
          <p><span className='item-card-data'>Rol:</span> {item.rol.tipo_rol}</p> 
          <p><span className='item-card-data'>Ubicacion:</span> {item.ubicacion.lugar}</p> 
          <p><span className='item-card-data'>Estado:</span> {item.estado_usuario?"OK":"OKn't"}</p> 
          <p className='editar-u-carta'><img src={editar} onClick={()=> onEdit(item)} className='editar' alt="Editar" /></p>
        </div>
      ))}
        
      </div>
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
    <h1>Datos De Usuarios</h1>
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
