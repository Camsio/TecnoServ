import { useState, useEffect } from 'react'
import React from 'react'
import '/Estilos/Stock.css'
import editar from '../assets/firma.svg'
import EquipoService from '../../service/EquipoService';

const ContenedorFiltro = ({ equipos }) => {
    const [buscar, setBuscar] = useState('');

  const buscador = (e) => {
    setBuscar(e.target.value)
  }
  const datosFiltrados = equipos.filter((item) =>
  Object.values(item).some(
    (value) => typeof  value === 'string' && value.toLowerCase().includes(buscar.toLowerCase())
    ));
    /* const [computo, setEquipos] = useState([])

    useEffect(() => {
        EquipoService.getequipos().then(resultEquipos=>{
            setEquipos([
                {
                "id_estado": "",
                "estado": "Seleccione el área"
                }, 
                ...resultEquipos.data.EstadosCreados
            ])
        })
    }, []) */

    return (
      <div>
        <label>
          Filtrar por texto:
          <input
            type="text"
            value={buscar}
            onChange={buscador}
          />
        </label>
            <table className='tablastock'>
                <thead>
                    <tr>
                        <th contentEditable>Editar</th>
                        <th>Id. Proveedor</th>
                        <th>Placa</th>
                        <th>Marca</th>
                        <th>Tipo</th>
                        <th>Contingencia</th>
                        <th>Procesador</th>
                        <th>Descripcion</th>
                        <th>Sistema</th>
                        <th>RAM</th>
                        <th>Almacenamiento</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    {datosFiltrados.map((item) => (
                    <tr key={item.id_equipo}>
                        <td><img src={editar} className='editar' /></td>
                        <td>{item.identificacion_prov}</td>
                        <td>{item.placa_numero_serie}</td>
                        <td>{item.marca_fk} </td>
                        <td>{item.tipo_equipo_fk} </td>
                        <td>{item.contingencia} </td>
                        <td>{item.procesador} </td>
                        <td>{item.descripcion} </td>
                        <td>{item.sistema_operativo} </td>
                        <td>{item.ram} </td>
                        <td>{item.almacenamiento} </td>
                        <td>{item.estado_fk} </td>
                        
                          {/* <select name="" id="">{computo.map(el=>{
                            return <option value={el.id_estado} key={el.id_estado}>{el.estado}
                            </option>
                          })} 
                          
                          
                          </select> */}
                        
                        
                    </tr>
                ))}
                </tbody>
            </table>
      </div>
    );
  };

  const Equipos = () => {
  
    useEffect(() => {
      return () => { 
        LlamarEquipos()
      }
    }, [])

    const [datosEquipos, setEquipos] = useState([])

    const LlamarEquipos = () => {
      EquipoService.getequipos().then(response => {
        if(response?.data.equiposCreados){
          setEquipos(response.data.equiposCreados)
        }
      })
      .catch(error => {
        console.error('Error maldito', error)
      })
    }
    
    return (
      <div>
        <h1>Contenedor con Espacios para Filtrar</h1>
        <ContenedorFiltro equipos={datosEquipos} />
      </div>
    );
  }
  
  export default Equipos