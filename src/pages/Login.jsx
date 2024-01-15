import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '/Estilos/Login.css'
import Logo from '../assets/Logo.svg'
import { useNavigate } from 'react-router-dom'
import UsuarioService from '../../service/UsuarioService'
import toast from 'react-hot-toast';

import Loader from '../layouts/Loader';

const Login = () => {

  const navigate = useNavigate()

  
  const [loader, setLoader] = useState(false)
  

  const [docIdentidadUsuario, setDocIdentidadUsuario] = useState("")
  const [contraseña, setContraseña] = useState("")
  
  const buttonLoginOnclickFn = () =>{
    setLoader(true)
    UsuarioService.login({docIdentidadUsuario,contraseña}).then(datareturn =>{
      setLoader(false)
      if (datareturn.data.token){
        localStorage.setItem("token",datareturn.data.token)
        axios.defaults.headers.common['token'] = localStorage.getItem('token');
        toast("Bienvenido De Nuevo", {
          icon: '😈🔥😳😳😳',
          style: {
              borderRadius: '10px',
              width:"500px",
              background:"#bcf7c5"
            }
        });
        navigate('/dashboard')
      }
      else {
        toast(datareturn.data.message, {
          icon: '🤬',
          style: {
              borderRadius: '10px',
              width:"500px",
              background:"#fca2a2"
            },
        });
      }

    })
    
  }


  const darValorAUsuario = e =>{
    setDocIdentidadUsuario(e.target.value)
  }
  const darValorContra = e =>{
    setContraseña(e.target.value)
  }

    return (
    <div className="body">
      {!loader&&<div className="form">
        <div className="conten-img">
          <img src={Logo} alt="" />
        </div>

        <div className="title">Tecno Inventory</div>
        <div className="subtitle">¡Hola de nuevo! Ingresa para continuar</div>
        
        <div className="input-container ic2">
          <input value={docIdentidadUsuario} onChange={(e)=>darValorAUsuario(e)} id="lastname" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label htmlFor="identificacion" className="placeholder">Identificacion</label>
        </div>

        <div className="input-container ic2">
          <input value={contraseña} onChange={(e)=>darValorContra(e)} id="email" className="input" type="password" placeholder=" " />
          <div className="cut cut-short"></div>
          <label  htmlFor="contraseña" className="placeholder">Contraseña</label>
        </div>

        <button onClick={buttonLoginOnclickFn} type="text" className="submit">Ingresar</button>

      </div>}
      {loader&&<Loader/>}
      
      
    </div>
  )
}



export default Login