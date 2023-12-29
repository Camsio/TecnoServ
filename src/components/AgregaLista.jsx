import React, { useState } from 'react'

export const AgregaLista = ({agregarTarea}) => {
    const [inputValor, setInputValor] = useState ('')
    const onInputCambio = (event) => {
        setInputValor (event.target.value)
    }
    const onEnvio = (event) => {
        const envio = {
            nombre: inputValor,
            visto: false
        }
        event.preventDefault()
        agregarTarea(tareas => [...tareas, envio])
    }
  return (
    <form onSubmit={onEnvio}>
        <input type="text"
            placeholder='Ingrese nuevo item'
            value={inputValor}
            onChange={onInputCambio}
        />
    </form>
  )
}
