import React from 'react'
import exportar from '../assets/exportar.svg'

class ExportButton extends React.Component {
  exportTableToExcel = () => {
    // Get the table element using the provided ID
    const table = document.getElementById(this.props.tableId)

    // Extract the HTML content of the table
    const html = table.outerHTML

    // Create a Blob containing the HTML data with Excel MIME type
    const blob = new Blob([html], {type: 'application/vnd.ms-excel'})

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob)

    // Create a temporary anchor element for downloading
    const a = document.createElement('a')
    a.href = url

    // Set the desired filename for the downloaded file
    a.download = 'Usuarios.xls'

    // Simulate a click on the anchor to trigger download
    a.click()

    // Release the URL object to free up resources
    URL.revokeObjectURL(url)
  }

  render() {
    return (
        <div className='boton-exportar' onClick={this.exportTableToExcel}>
            <img className='agregar' src={exportar}/>
            <label htmlFor="">Exportar a Excel</label>
        </div>
      
    )
  }
}

export default ExportButton