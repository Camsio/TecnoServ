import React, { useState, useEffect } from 'react'
import '/Estilos/AgregaUsuarios.css'
import UsuarioService from '../../service/UsuarioService'
import AreaService from '../../service/AreaService'
import RolService from '../../service/RolService'
import UbiService from '../../service/UbiService'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import random from '../assets/random.svg'

const AgregaUsuarios = () => {
    
    const navigate = useNavigate()


    //Consultamos las áreas existentes para mostrar en el formulario
    const [areas, setAreas] = useState([])

    useEffect(() => {
        AreaService.getall().then(resultArea=>{
            setAreas([
                {
                "id_area": "",
                "tipo_area": "Seleccione el área"
                }, 
                ...resultArea.data.areasCreadas
            ])
        })
    }, [])


    const [roles, setRoles] = useState([])

    useEffect(() => {
        RolService.getall().then(resultRol=>{
            setRoles([
                {
                "id_rol": "",
                "tipo_rol": "Seleccione el"
                }, 
                ...resultRol.data.rolesCreados
            ])
        })
    }, [])
    const [ubi, setUbi] = useState([])

    useEffect(() => {
        UbiService.getall().then(resultUbi=>{
            setUbi([
                {
                    "id_ubicacion": "",
                    "lugar": "Seleccione algo"
                }, 
                ...resultUbi.data.ubicacionesCreadas
            ])
        })
    }, [])


    const [nuevoUsuario, setNuevoUsuario] = useState({
        docIdentidadUsuario: '',
        nombreUsuario: '',
        correo:'',
        rolUsuario: '',
        areaUsuario: '',
        ubicacion: '',
        contraseña: '',
    })
    
    const manualCambio = (e) => {
        setNuevoUsuario({
             ...nuevoUsuario, 
             [e.target.name]: e.target.value 
            });
      };
    

const funcionAgregarUsuario = (e) =>{
    e.preventDefault()
    console.log(nuevoUsuario)
    UsuarioService.addUser(nuevoUsuario)
    .then(response => {
        if (response.data.resultadoNewUsuario) {
            toast(response.data.message, {
                icon: '🥵🍆',
                style: {
                    borderRadius: '10px',
                    width:"500px",
                    background:"#bcf7c5"
                  }
              });
              navigate('/dashboard/usuarios')            
                
            }
          })
          .catch(error => {
            if(error.response.status==403){
                error.response.data.errors.forEach(el => {
                    if(el.msg != 'Invalid value'){
                        toast(el.msg, {
                            icon: '😱',
                            style: {
                                borderRadius: '10px',
                                width:"500px",
                                background:"#f7f7bc"
                              },
                          });
                    }
                });
            }
          })
    }

    
    const  generarContrasena = () =>{
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_+{}[]:;<>,.?";
        let contrasena = "";
        let longitud = 12;
      
        for (let i = 0; i < longitud; i++) {
          const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
          contrasena += caracterAleatorio;
        }
      
        manualCambio({
            target:{
                name:"contraseña",
                value:contrasena
            }
        })
    }

  return (

    <section className='formulario'>
        <div className='formu'>

                <div>
                    <label htmlFor="docIdentidadUsuario">Digite un documento de idenfiticacion:</label>
                    <input name='docIdentidadUsuario' type="text" placeholder='NIT o C.C' value={nuevoUsuario.docIdentidadUsuario} onChange={manualCambio} />
                </div>
                <div>
                    <label htmlFor="nombreUsuario">Digite el nombre completo:</label>
                    <input name='nombreUsuario' type="text" placeholder='Nombre Completo' value={nuevoUsuario.nombreUsuario} onChange={manualCambio} />
                </div>
                <div>
                    <label htmlFor="correo">Digite el correo:</label>
                    <input name='correo' type="text" placeholder='elcorreo@gmail.com' value={nuevoUsuario.correo} onChange={manualCambio} />
                </div>
                <div>
                    <label htmlFor="rolUsuario">Digite el Rol del usuario</label><select name='rolUsuario' id="" onChange={manualCambio}> 
                    {roles.map(el=>{
                        return <option value={el.id_rol} key={el.id_rol}>{el.tipo_rol}</option>
                    })}
                    </select>
                </div> 
                <div>
                    <label htmlFor="areaUsuario">¿En que area se encuentra?</label>
                    <select name='areaUsuario' id="" onChange={manualCambio}> 
                    {areas.map(el=>{
                        return <option value={el.id_area} key={el.id_area}>{el.tipo_area}</option>
                    })}
                    </select>
                </div>
                <div>
                    <label htmlFor="ubicacionUsuario">¿En que ubicacion se encuentra?</label>
                    <select name='ubicacionUsuario' id="" onChange={manualCambio}> 
                    {ubi.map(el=>{
                        return <option value={el.id_ubicacion} key={el.id_ubicacion}>{el.lugar}</option>
                    })}
                    </select>
                </div> 
                    <label htmlFor="contraseña" >Genere una contraseña</label>
                <div className='contenedorrandom'>
                    <input  name='contraseña' type="text" value={nuevoUsuario.contraseña} onChange={manualCambio} placeholder="Contraseña" />
                    <img onClick={generarContrasena} src={random} alt="" className='random' />
                    
                </div> 
                    <button type='button' className="button-send" onClick={funcionAgregarUsuario}>Enviar</button>
        </div>
        
    </section>
  )
}

export default AgregaUsuarios