import React, { useEffect, useState } from 'react'
import HistorialService from '../../service/HistorialService'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import UsuarioService from '../../service/UsuarioService'

const AsignaUsuario = ({asigna, onCancel}) => {
    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(() => {
        UsuarioService.getNomDoc().then(resultNomDoc=>{
            setUsers([
                {
                "doc_identidad": "",
                "nombre": "Seleccion el usuario"
                }, 
                ...resultNomDoc.data.usuariosCreadosSencillo
            ])
        })
    }, [])

    const [asignaUser, setAsignar] = useState({
        idEquipo: '',
        rutaActa: '',
        observaciones: '',
        docIdentidad: ''
    })
    const manualCambio = (e) => {
        setAsignar({
             ...asignaUser, 
             [e.target.name]: e.target.value 
            })
    }
    useEffect(() => {
        setAsignar({
            idEquipo: asigna.id_equipo
        })
    }, [asigna])

    const funcAsignaUser = (e) => {
        e.preventDefault()
        console.log(asignaUser)
        HistorialService.addHistorial(asignaUser)
        .then(response => {
            if (response.data.resultadoNewhistorial) {
                toast(response.data.message, {
                    icon: '✅✅✅',
                    style: {
                        borderRadius: '10px',
                        width:"500px",
                        background:"#bcf7c5"
                      }
                  })
                  navigate('/dashboard/gestion/stock')  
            .catch(error => {
                if (error.response.status==403){
                    error.response.data.errors.forEach(el => {
                        if (el.msg != 'Invalid value'){
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
        })
    }

  return (
    <section className="formularioeditor">
        <div className='formu' >
        <div>
                <label>El id del equipo es</label>
                <input name='idEquipo' type="text" value={asignaUser.idEquipo} disabled/>
            </div>
            <div>
                <label>Escribe una ruta del acta</label>
                <input name='rutaActa' type="text" onChange={manualCambio} />
            </div>
            <div>
                <label>Escribe una observacion del cambio realizado</label>
                <input name='observaciones' type="text" onChange={manualCambio} />
            </div>
            <div>
                <label>Documento de identidad</label>
                <select name='docIdentidad' type="text" onChange={manualCambio} >
                {users.map(el=>{
                            return <option value={el.doc_identidad} key={el.doc_identidad}>{el.nombre}    /    {el.doc_identidad}</option>
                        })}
                </select>
            </div>
            <button type='button' className="button-send" onClick={funcAsignaUser}>Enviar</button>
            <button className='button-cancel' onClick={onCancel}>Cancelar</button>
        </div>


    </section>
  )
}

export default AsignaUsuario