import React, { useState } from 'react'
import { AgregaLista } from './AgregaLista'


const Item = ({nombre, visto}) => {
    return (
        <li className='rojito'>
            {nombre}
            {visto ? 'no' : 'si'} 
        </li>
    )
}


export const Lista = () => {
    
    let listado = [
        {nombre : "nombre", visto: false },
        {nombre : "nombre2", visto: false },
        {nombre : "nombre3", visto: false },
        {nombre : "nombre4", visto: true },
        {nombre : "nombre5", visto: true },
        {nombre : "nombre6", visto: true },
        {nombre : "nombre7", visto: false },
    ]
    const [agrega, setAgregar] = useState(listado)
    
    const addTarea = (val) => {
        const envio = {
            nombre: val,
            visto: false
        }
        setAgregar([...agrega, envio])
    }


    return (
        <>
            <h1>Lista</h1>
            <AgregaLista agregarTarea={setAgregar} />
            <ol>
                {agrega.map(item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto} /> )}
            </ol>
                <button onClick={() => addTarea()}>Agrega Nuevo item</button>
            </>
        )
        }
