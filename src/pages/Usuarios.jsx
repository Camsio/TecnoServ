import React, { useState, useEffect } from 'react';
import '/Estilos/Usuarios.css';
import editar from '../assets/firma.svg';
import agregar from '../assets/agregar.svg';
import { Link } from 'react-router-dom';
import UsuarioService from '../../service/UsuarioService';
import Loader from '../layouts/Loader';
// Inicio filtro



const DatosTabla = ({ usuarios }) => {
  const [filtro, setFiltro] = useState('');
  
  const manualChangeFiltro = (e) => {
    setFiltro(e.target.value);
  };
  
  
  const datosFiltrados = usuarios.filter((item) =>
  Object.values(item).some(
    (value) => typeof  value === 'string' && value.toLowerCase().includes(filtro.toLowerCase())
    )
    );
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
      </div>

      <table className='tabla'>
        <thead>
          <tr>
            <th>Editar</th>
            <th>ID</th>
            <th>Nombre</th>
            <th>correo</th>
            <th>Área</th>
            <th>Rol</th>
            <th>Identificación</th>
          </tr>
        </thead>
        <tbody>
          {datosFiltrados.map((item) => (
            <tr key={item.doc_identidad}>
              <td><img src={editar} className='editar' alt="Editar" /></td>
              <td>{item.doc_identidad}</td>
              <td>{item.nombre}</td>
              <td>{item.correo}</td>
              <td>{item.area.tipo_area}</td> 
              <td>{item.rol.tipo_rol}</td>
              <td>{item.ubicacion.lugar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Usuarios = () => {
  
  useEffect(() => {
    return () => { 
      LlamarDatos()
    }
  }, [])
  
  
  const [loader, setLoader] = useState(true)
  const [datosUsuarios, setDatosUsuarios] = useState([])
  
  
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
      console.error('Error obteniendo usuarios:', error);
    })
  }
  
  return (
  <div>
    <h1>Tabla de Usuarios</h1>
    {!loader&&<DatosTabla usuarios={datosUsuarios} />}
    {loader&&<Loader/>}
    
  </div>
  );
};

export default Usuarios;
