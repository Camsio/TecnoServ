import React, { useState } from 'react'
import gestion from '../assets/archivo.svg'
import usuarios from '../assets/usuarios.svg'
import firma from '../assets/firma.svg'
import '/Estilos/InicioAdmin.css'
import { Link } from 'react-router-dom'

function Inicio () {   
    return (
        <>
            <div className='contenedor' >
            <Link to="/dashboard/gestion">
                <div className='boton'>
                    <img className='gestion' src={gestion} alt="Gestion" />
                    <h3>Gestion Documental</h3>
                </div>
            </Link>
            <Link to="/dashboard/usuarios">
                <div className='boton'>  
                    <img className='proveedores' src={usuarios} alt="Usuarios" />
                    <h3>Usuarios</h3>
                </div>
            </Link>
            <Link to="/dashboard/firma">
                <div className='boton'>
                    <img className='perifericos' src={firma} alt="Firma" />
                    <h3>Firma</h3>
                </div>
            </Link>
            </div>
        </>
    )
}    

export default Inicio