import React from 'react'
import '/Estilos/Firma.css'
import archivo from '../assets/selecfirma.svg'
import firmamanual from '../assets/firmamanual.svg'
import consultarfirma from '../assets/consultar.svg'
import docfirma from '../assets/selecciondoc.svg'

const firma = () => {
  return (
    <>
      <div className="contenedore">
        <div className="imagen-con-texto">
          <img className='firma' src={archivo} alt="archivofirma" />
          <p>Seleccione un archivo (firma)</p>
        </div>

        <div className="imagen-con-texto">
          <img className='firma' src={firmamanual} alt="firmamanual" />
          <p>Firma Manual</p>
        </div>

        <div className="imagen-con-texto">
          <img className='firma' src={consultarfirma} alt="consultarfirma" />
          <p>Consultar Firma</p>
        </div>

        <div className="imagen-con-texto">
          <img className='firma' src={docfirma} alt="docfirma" />
          <p>Documento Firma</p>
        </div>
      </div>
    </>

  )
}

export default firma