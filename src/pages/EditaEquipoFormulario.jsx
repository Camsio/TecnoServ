import React, { useState, useEffect } from 'react'
/* import toast from 'react-hot-toast' */
import MarcaService from '../../service/MarcaService'
import TipoEquipoService from '../../service/TipoEquipoService'
import EstadoEquipoService from '../../service/EstadoEquipoService'

const EditarEquipoForm = ({equipo, onSave, onCancel}) => {

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
        idEquipo: '',
        identificacionProv: '',
        placaNumeroSerie: '',
        marca: '',
        tipoEquipo: '',
        contingencia: '',
        procesador: '',
        descripcion: '',
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
    useEffect(() => {
        setNuevoEquipo({
            idEquipo: equipo.id_equipo,
            identificacionProv: equipo.identificacion_prov,
            placaNumeroSerie: equipo.placa_numero_serie,
            marca: equipo.marca.id_marca,
            tipoEquipo: equipo.tipo_equipo.id_tipo_equipo,
            contingencia: equipo.contingencia,
            procesador: equipo.procesador,
            descripcion: equipo.descripcion,
            sistemaOperativo: equipo.sistema_operativo,
            ram: equipo.ram,
            almacenamiento: equipo.almacenamiento,
            estado: equipo.estado.id_estado
        })
      }, [equipo])



  return (
    <section className="formularioeditor">
        <div className='formu' >
            <div>
                <label>Escriba identificación del Proveedor</label>
                <input name='identificacionProv' type="text"  value={nuevoEquipo.identificacionProv} disabled />
            </div>
            <div>
                <label>Escriba la marca del equipo</label>
                <select name='marca' type="text" onChange={manualCambio} value={nuevoEquipo.marca}>
                {marcas.map(el=>{
                            return <option value={el.id_marca} key={el.id_marca}>{el.marca}</option>
                        })}
                </select>
            </div>
            <div>
                <label>Digite el numero de placa del equipo</label>
                <input name='placaNumeroSerie' type="text" onChange={manualCambio} value={nuevoEquipo.placaNumeroSerie} />
            </div>
            <div>
                <label>Que tipo es</label>
                <select name='tipoEquipo' type="text" onChange={manualCambio} value={nuevoEquipo.tipoEquipo} >
                {tipo.map(el=>{
                            return <option value={el.id_tipo_equipo} key={el.id_tipo_equipo}>{el.tipo_equipo}</option>
                        })}
                </select>
            </div>
            <div>
                <label>¿Contingencia?</label>
                {/* <input name='contingencia' type="checkbox" onChange={manualCambio} value={nuevoEquipo.contingencia} /> */}
                <select
                    name='contingencia'
                    type="text"
                    onChange={manualCambio}
                    value={nuevoEquipo.contingencia}
                >
                    <option value="true">Verdadero</option>
                    <option value="false">Falso</option>
                </select>
            </div>
            <div>
                <label>Escribe que procesador tiene</label>
                <input name='procesador' type="text" onChange={manualCambio} value={nuevoEquipo.procesador} />
            </div>
            <div>
                <label>Escribe una descripcion del equipo</label>
                <input name='descripcion' type="text" onChange={manualCambio} value={nuevoEquipo.descripcion}/>
            </div>
            <div>
                <label>Que sistema operativo tiene</label>
                <input name='sistemaOperativo' type="text" onChange={manualCambio} value={nuevoEquipo.sistemaOperativo} />
            </div>
            <div>
                <label>Cuanta ram tiene?</label>
                <input name='ram' type="text" onChange={manualCambio} value={nuevoEquipo.ram} />
            </div>
            <div>
                <label>Cuanto almacenamiento tiene</label>
                <input name='almacenamiento' type="text" onChange={manualCambio} value={nuevoEquipo.almacenamiento} />
            </div>
            <div>
                <label>En que estado se encuentra</label>
                <select name='estado' type="text" onChange={manualCambio} value={nuevoEquipo.estado} >
                {estado.map(el=>{
                            return <option value={el.id_estado} key={el.id_estado}>{el.estado}</option>
                        })}
                </select>
            </div>
            <button className='button-send' onClick={() => onSave(nuevoEquipo)}>Guardar cambios</button>
            <button className='button-cancel' onClick={onCancel}>Cancelar</button>
        </div>

    </section>
  )
}

export default EditarEquipoForm