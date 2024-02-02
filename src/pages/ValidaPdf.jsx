import React, {useEffect, useState} from 'react'
import createForm from './CrearPdf'
import { useParams } from 'react-router-dom'
import ActaService from '../../service/ActaService'

const ValidaPdf = (pdfs) => {


  const {id_equipo} = useParams()
  const [datosEquipos, setDatosEquipos] = useState([])


  
    useEffect(() => {

      console.log("==========================")
        console.log(id_equipo)
        console.log("==========================")
      LlamarDatosPdf()
    }, [id_equipo])
    
    
    const [datosForm, setdatosForm] = useState({
      nombreLocal: '',
      nombreEncargado: '',
      cedulaEncargado: '',
      nombreRed: '',
      correoEncargado: '',
      areaEncargado: '',
      telEncargado: '',

      tipoEquipo: '',
      equipoNomRed: '',
      marcaEquipo: '',
      modeloEquipo: '',
      modeloEquipo: '',
      modeloEquipo: '',
      modeloEquipo: '',
      modeloEquipo: '',
      modeloEquipo: '',
      modeloEquipo: '',
      modeloEquipo: '',
    })
    
      const LlamarDatosPdf = () => {
        
          ActaService.getActa(id_equipo)
          .then(response => {
              console.log('respuesta delapi', response.data)
          if(response?.data.infoActa){
              setDatosEquipos(response.data.infoActa)
              console.log(response.data.infoActa)
              setdatosForm({
                ...datosForm,
                nombreLocal: response.data.infoActa[0].id_equipo+""
              })
              console.log(response.data.infoActa)
          }
      })
      .catch(error => {
          console.error('error obteniendo', error)
      })
    }
  

  const [pdfBites, setPdfBites] = useState("")

  useEffect(()=>{
    console.log(pdfs)
  },[pdfs])
  return (<>
    <div>
{/*     <div>
        <h1>Pdf Con los datos del equipo: {id_equipo} </h1>
        <ValidaPdf pdfs={datosEquipos} />
    </div> */}
        <button className='buttonF' onClick={() => {createForm({datosForm, setPdfBites});console.log(datosForm)}}>
            mostrar
        </button>
    </div>
    <div>{pdfBites && <DisplayPdf pdfBytes={pdfBites} id_equipo={id_equipo}/>}</div>
    </>
  )
}



function DisplayPdf({ pdfBytes,  id_equipo}) {
  
  const [pdfSrc, setPdfSrc] = useState('')
  
    useEffect(() => {
      const pdfDataUri = `data:application/pdf;base64,${pdfBytes.toString('base64')}`
      setPdfSrc(pdfDataUri)
      console.log(pdfSrc)
    }, [pdfBytes])
  
    return (
    <>
      <div>
        <h1>Pdf Con los datos del equipo: {id_equipo} </h1>
      </div>
      {<iframe
        title="PDF Viewer"
        src={pdfSrc}
        width="100%"
        height="1500px"
        style={{ border: 'none' }}
      />}
    </>)
  } 

export default ValidaPdf