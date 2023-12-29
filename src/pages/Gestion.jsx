import { Link } from 'react-router-dom'
import React from 'react'
import Stock from '../assets/stock.svg'
import Proveedores from '../assets/proveedores.svg'
import Perifericos from '../assets/perifericos.svg'
import '/Estilos/InicioGestion.css'


function Gestion () {
     return (
    <>
        <div className='contenedor' >
        <Link to="stock">
            <div className='boton'>
                <img className='gestion' src={Stock} alt="Stock" />
                <h3>Stock</h3>
            </div>
        </Link>
        <Link to="proveedores">
            <div className='boton'>  
                <img className='proveedores' src={Proveedores} alt="Proveedores" />
                <h3>Proveedores</h3>
            </div>
        </Link>
        <Link to="perifericos">
            <div className='boton'>
                <img className='perifericos' src={Perifericos} alt="Perifericos" />
                <h3>Perifericos</h3>
            </div>
        </Link>
        </div>
    </>
    )
}

export default Gestion