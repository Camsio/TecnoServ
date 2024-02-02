import '/Estilos/HacerFirma.css'
import React, { useEffect, useRef, useState } from 'react'
import SignaturePad from 'react-signature-pad-wrapper'
import toast from 'react-hot-toast'
import FirmaService from '../../service/FirmaService'
const HacerFirma = () => {
  const signatureRef = useRef(null)

  const limpiarFirma = () => {
    signatureRef.current.clear()
  }

  /* const imageData = signatureRef.current.toDataURL()
  const idUsuario = " " // Reemplaza '123' con el ID real del usuario
  
  // Realizamos la solicitud POST al servidor con el base64 de la firma y el ID
  fetch('http://127.0.0.1:1584/api-tecnoserv-v01/firma/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ docIdentidad: idUsuario, firmaBase64: imageData }),
  }) */
  const [nuevaFirma, setNuevaFirma] = useState({
    docIdentidad: '',
    firma: ''
  })
  
  
  const crearFirma = (e) => {
    e.preventDefault()
    signatureRef.current.toDataURL()

    setNuevaFirma({
      ...nuevaFirma,
      firma: imageData,
    })
      console.log(nuevaFirma)
      FirmaService.addFirma(nuevaFirma)
      .then(response => {
        if (response.data.resultadoNewFirma) {
          toast(response.data.message, {
            icon: '✅✅✅',
            style: {
              borderRadius: '10px',
              width:"500px",
              background:"#bcf7c5"
            }
          })
          Navigate('/dashboard/firma')
        }
      })
      .catch(error => {
        if (error.response.status==403){
          error.response.data.errors.forEach(el => {
            if(el.msg != 'Invalid value') {
              toast(el.msg, {
                icon: '❌❌❌',
                style: {
                  borderRadius: '10px',
                  width:"500px",
                  background:"#f7f7bc"
                }
              })
            }
          })
        }
      })

  }
  
  return (
    <div className='gridmelito'>
      <center>
        <SignaturePad
          ref={signatureRef}
          options={{ penColor: 'black', backgroundColor: 'white' }}
          />
      </center>
      <div className='botones'>
        <button className='buttonF' onClick={limpiarFirma}>
          Limpiar Firma
        </button>
        <button className='buttonF' onClick={crearFirma} >
          Guardar Firma
        </button>
        <button className='buttonF' >
          Cargar Firma
        </button>
      </div>
    </div>
  )
}

  export default HacerFirma

  /* onChange={manualCambio} */