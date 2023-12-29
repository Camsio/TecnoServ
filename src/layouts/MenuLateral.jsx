import React, { useEffect} from 'react'
import logo from '../assets/logo.svg'
import documentos from '../assets/carpetas.svg'
import ajustes from '../assets/ajustes.svg'
import casa from '../assets/casa.svg'
import carpeta from '../assets/carpeta1.svg'
import salir from '../assets/log-out.svg'
import { Link } from 'react-router-dom'
import axiosMethod from '../../service/AxiosConfig'
import { useNavigate } from 'react-router-dom'


const MenuLateral = () => {
  const navigate = useNavigate()

  useEffect(() => {
    axiosMethod({navigate})
  
    return () => {
      
    }
  }, [])
  

  return (<>
    <aside className='lateral'>
      <div className="menupart1">
        <Link to="https://fxa.com.co/">
          <img src={logo} className="logo fxa" alt="React logo" />
        </Link>
        <Link to="/">
          <img src={salir} className='imglat2' alt="img" title='Salir' />
        </Link>
        <Link to="/dashboard">
          <img src={documentos} className='imglat2' alt="img" title='Mis Documentos' />
        </Link>
      </div>
      <div className="menupart2">
        <Link to="/dashboard">
          <img src={casa} className='imglat3' alt="img" title='Volver al Inicio' />
        </Link>
        <Link to="/dashboard">
          <img src={carpeta} className='imglat4' alt="img" title='Archivos Pendientes' />
        </Link>
        <Link to="/dashboard">
          <img src={ajustes} className='imglat5' alt="img" title='Configuracion' />
        </Link>
      </div>
    </aside>
  </>)
}

export default MenuLateral