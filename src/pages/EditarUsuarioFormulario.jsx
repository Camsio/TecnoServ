import React, {useState, useEffect} from 'react'
import AreaService from '../../service/AreaService'
import RolService from '../../service/RolService'
import UbiService from '../../service/UbiService'
import '/Estilos/EditarUsuario.css'

const EditarUsuarioForm = ({ user, onSave, onCancel }) => {


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
                "tipo_rol": "Seleccione el rol"
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
    })
    
    const manualCambio = (e) => {
        setNuevoUsuario({
             ...nuevoUsuario, 
             [e.target.name]: e.target.value 
            })
      }
    useEffect(() => {
        setNuevoUsuario({
          docIdentidadUsuario: user.doc_identidad,
          nombreUsuario: user.nombre,
          correo: user.correo,
          rolUsuario: user.rol.id_rol, // Asegúrate de obtener el ID correcto del rol
          areaUsuario: user.area.id_area, // Asegúrate de obtener el ID correcto del área
          ubicacionUsuario: user.ubicacion.id_ubicacion, // Asegúrate de obtener el ID correcto de la ubicación
        })
      }, [user])



  return (
    <div className='container'>
      <section className='formularioeditor'>
        <div className='formu'>

                <div>
                    <label htmlFor="docIdentidadUsuario">Digite un documento de idenfiticacion:</label>
                    <input name='docIdentidadUsuario' type="text" placeholder='NIT o C.C' value={nuevoUsuario.docIdentidadUsuario} disabled />
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
                    <label htmlFor="rolUsuario">Digite el Rol del usuario</label><select name='rolUsuario' id="" onChange={manualCambio} value={nuevoUsuario.rolUsuario}> 
                    {roles.map(el=>{
                        return <option value={el.id_rol} key={el.id_rol}>{el.tipo_rol}</option>
                    })}
                    </select>
                </div> 
                <div>
                    <label htmlFor="areaUsuario">¿En que area se encuentra?</label>
                    <select name='areaUsuario' id="" onChange={manualCambio} value={nuevoUsuario.areaUsuario}> 
                    {areas.map(el=>{
                        return <option value={el.id_area} key={el.id_area}>{el.tipo_area}</option>
                    })}
                    </select>
                </div>
                <div>
                    <label htmlFor="ubicacionUsuario">¿En que ubicacion se encuentra?</label>
                    <select name='ubicacionUsuario' id="" onChange={manualCambio} value={nuevoUsuario.ubicacionUsuario}> 
                    {ubi.map(el=>{
                        return <option value={el.id_ubicacion} key={el.id_ubicacion}>{el.lugar}</option>
                    })}
                    </select>
                </div> 
                    <button className='button-send' onClick={() => onSave(nuevoUsuario)}>Guardar cambios</button>
                    <button className='button-cancel' onClick={onCancel}>Cancelar</button>
            </div>
     </section>
    </div>
  )
}

export default EditarUsuarioForm