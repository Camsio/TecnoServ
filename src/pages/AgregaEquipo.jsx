import React, { useState, useEffect } from 'react'
import EquipoService from '../../service/EquipoService'
import toast from 'react-hot-toast'
import MarcaService from '../../service/MarcaService'
import TipoEquipoService from '../../service/TipoEquipoService'
import EstadoEquipoService from '../../service/EstadoEquipoService'
import { useNavigate } from 'react-router-dom'

const AgregaEquipo = () => {
    const navigate = useNavigate()

    const [marcas, setMarca] = useState([])

    useEffect(() => {
        MarcaService.getall().then(resultMarca=>{
            setMarca([
                {
                "id_marca": "",
                "marca": "Seleccione la marca"
                }, 
                ...resultMarca.data.MarcasCreadas
            ])
        })
    }, [])
    const [tipo, setTipoEquipo] = useState([])

    useEffect(() => {
        TipoEquipoService.getall().then(resultTipo=>{
            setTipoEquipo([
                {
                "id_tipo_equipo": "",
                "tipo_equipo": "Seleccione el tipo"
                }, 
                ...resultTipo.data.TipoEquiposCreados
            ])
        })
    }, [])
    const [estado, setEstado] = useState([])

    useEffect(() => {
        EstadoEquipoService.getall().then(resultEstado=>{
            setEstado([
                {
                "id_estado": "",
                "estado": "Seleccione el estado"
                }, 
                ...resultEstado.data.EstadosCreados
            ])
        })
    }, [])

    const [nuevoEquipo, setNuevoEquipo] = useState({
        identificacionProv: '',
        placaNumeroSerie: '',
        marca: '',
        tipoEquipo: '',
        contingencia: '',
        procesador: '',
        nombreRed: '',
        sistemaOperativo: '',
        ram: '',
        almacenamiento: '',
        estado: ''
    })

    const manualCambio = (e) => {
        setNuevoEquipo({
            ...nuevoEquipo,
            [e.target.name]: e.target.value
        })
    }

    const funcionAgregarEquipo = (e) =>{
        e.preventDefault()
        console.log(nuevoEquipo)
        EquipoService.addequipo(nuevoEquipo)
        .then(response => {
            if (response.data.resultadoNewEquipo) {
                toast(response.data.message, {
                    icon: '✅✅✅',
                    style: {
                        borderRadius: '10px',
                        width:"500px",
                        background:"#bcf7c5"
                      }
                  });
                  navigate('/dashboard/gestion/stock')            
                    
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
                              });
                        }
                    });
                }
              })
        }

  return (
    <section className="formulario">
    <div className='formu' >
        <div>
            <label>Escriba identificación del Proveedor</label>
            <input name='identificacionProv' type="text" onChange={manualCambio} />
        </div>
        <div>
            <label>Escriba la marca del equipo</label>
            <select name='marca' type="text" onChange={manualCambio} >
            {marcas.map(el=>{
                        return <option value={el.id_marca} key={el.id_marca}>{el.marca}</option>
                    })}
            </select>
        </div>
        <div>
            <label>Digite el numero de placa del equipo</label>
            <input name='placaNumeroSerie' type="text" onChange={manualCambio} />
        </div>
        <div>
            <label>Que tipo es</label>
            <select name='tipoEquipo' type="text" onChange={manualCambio} >
            {tipo.map(el=>{
                        return <option value={el.id_tipo_equipo} key={el.id_tipo_equipo}>{el.tipo_equipo}</option>
                    })}
            </select>
        </div>
        <div>
            <label>¿Contingencia?</label>
            <input name='contingencia' type="text" onChange={manualCambio} />
        </div>
        <div>
            <label>Escribe que procesador tiene</label>
            <input name='procesador' type="text" onChange={manualCambio} />
        </div>
        <div>
            <label>Escribe nombre de red</label>
            <input name='descripcion' type="text" onChange={manualCambio} />
        </div>
        <div>
            <label>Que sistema operativo tiene</label>
            <input name='sistemaOperativo' type="text" onChange={manualCambio} />
        </div>
        <div>
            <label>Cuanta ram tiene?</label>
            <input name='ram' type="text" onChange={manualCambio} />
        </div>
        <div>
            <label>Cuanto almacenamiento tiene</label>
            <input name='almacenamiento' type="text" onChange={manualCambio} />
        </div>
        <div>
            <label>En que estado se encuentra</label>
            <select name='estado' type="text" onChange={manualCambio} >
            {estado.map(el=>{
                        return <option value={el.id_estado} key={el.id_estado}>{el.estado}</option>
                    })}
            </select>
        </div>
        <button type='button' className="button-send" onClick={funcionAgregarEquipo}>Agrega!</button>
    </div>

    </section>
  )
}

export default AgregaEquipo