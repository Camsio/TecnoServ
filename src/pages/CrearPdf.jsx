import { PDFDocument, degrees, rgb } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
/* import { useEffect, useState } from 'react' */
/* import React, { useEffect, useState } from 'react'

*/


  



async function download(pdfBytes, fileName, mimeType) {
    const blob = new Blob([pdfBytes], { type: mimeType })
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = fileName
  
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  async function createForm(params) {


    const pngUrl = '/public/imagenes/logo.png'
    const url = 'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf'
    
    
    const pngImageBytes = await fetch(pngUrl).then((res) => res.arrayBuffer())
    const fontBytes = await fetch(url).then(res => res.arrayBuffer())
  
    const pdfDoc = await PDFDocument.create()
    const form = pdfDoc.getForm()

    pdfDoc.registerFontkit(fontkit)
    const customFont = await pdfDoc.embedFont(fontBytes)
  
    // Crear páginas
    const page1 = pdfDoc.addPage()
  
    // Embed de imágenes
    const pngImage = await pdfDoc.embedPng(pngImageBytes)

    
    page1.drawText('TECNO SERV', {x: 5, y: 750, size:80, rotate: degrees(-55), color: rgb(0.8, 0.8, 0.8)})
    page1.drawText('TECNO SERV', {x: 200, y: 750, size:80, rotate: degrees(-55), color: rgb(0.8, 0.8, 0.8)})
    page1.drawText('TECNO SERV', {x: 5, y: 400, size:80, rotate: degrees(-55), color: rgb(0.8, 0.8, 0.8)})
    // Dimensiones de las imágenes
    const pngDims = pngImage.scale(0.3)

    // Dibujar imágenes en las páginas
    page1.drawImage(pngImage, {
      x: 20,
      y: page1.getHeight() - pngDims.height - -5,
      width: pngDims.width,
      height: pngDims.height,
    })

    
    const text = 'TECNO SERV'
    const textActa = 'Acta de Entrega y Devolución'
    const textActa1 = 'de Equipos de Cómputo'
    const textSize = 40
    
    const textoTabla = 'DATOS DEL COLABORADOR'
    const textoDatosLocal = 'NOMBRE DEL LOCAL'
    const textoDatosEncargado = 'NOMBRE DEL ENCARGADO'
    const textoDatosEncargadoCedula = 'CÉDULA'
    const textoDatosUsuario = 'USUARIO DE RED'
    const textoDatosCorreo = 'CORREO'
    const textoDatosArea = 'ÁREA'
    const textoDatosTelefono = 'TELÉFONO'
    
    const textoHardware = 'HARDWARE'
    const textoTablaTipo = 'TIPO'
    const textoTablaNomRed = 'NOMBRE DE RED'
    const textoTablaMarca = 'MARCA'
    const textoTablaModelo = 'MODELO'
    const textoTablaSerial = 'SERIAL'
    const textoTablaProcesador = 'PROCESADOR'
    const textoTablaMemRam = 'MEMORIA RAM'
    const textoTablaCapDisc = 'CAPACIDAD DEL DISCO'
    const textoTablaTeclado = 'TECLADO'
    const textoTablaMouse = 'MOUSE'
    const textoTablaMonitor = 'MONITOR'
    const textoTablaLector = 'LECTOR'
    const textoTablaDvr = 'DVR'
    const textoTablaTel = 'TELÉFONO'
    const textoTablaImpresora = 'IMPRESORA'


  // INICIO ENCABEZADO
    page1.drawText(text, { x: 250, y: 785, size: textSize, font: customFont,})
    page1.drawText(textActa, { x: 235, y: 755, size: 20, font: customFont,})
    page1.drawText(textActa1, { x: 260, y: 730, size: 20, font: customFont,})
    page1.drawRectangle({ x: 20, y: 713, width: 558, height: 110, borderColor: rgb(0, 0, 0), borderWidth: 1.5,})
  // FIN ENCABEZADO

 

  // INICIO DATOS DEL COLABORADOR

    page1.drawRectangle({ x: 20, y: 688, width: 558, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5,})
    page1.drawText(textoTabla, { x: 230, y: 692, size: 10, color: rgb(0, 0, 0), font: customFont,})
    
    page1.drawRectangle({ x: 20, y: 673, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5,})
    page1.drawRectangle({ x: 170, y: 673, width: 408, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5,})
    page1.drawText(params.datosForm.nombreLocal, { x: 170, y: 673, size: 10, color: rgb(0, 0, 0), font: customFont,})
    page1.drawText(textoDatosLocal, { x: 40, y: 677, size: 10, color: rgb(0, 0, 0), font: customFont,})
    
    page1.drawRectangle({ x: 20, y: 658, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5,})
    page1.drawRectangle({ x: 170,y: 658,width: 200,height: 15,borderColor: rgb(0, 0, 0),borderWidth: 1.5,})
    page1.drawText(textoDatosEncargado, { x: 35, y: 661, size: 10, color: rgb(0, 0, 0), font: customFont, })
    
    /* page1.drawRectangle({ x: 400,y: 658,width: 178,height: 15,borderColor: rgb(0, 0, 0),borderWidth: 1.5,}) */
    page1.drawRectangle({ x: 350,y: 658,width: 100,height: 15,color: rgb(0.8, 0.8, 0.8),borderColor: rgb(0, 0, 0),borderWidth: 1.5,})
    page1.drawRectangle({ x: 450,y: 658,width: 128,height: 15,borderColor: rgb(0, 0, 0),borderWidth: 1.5,})
    page1.drawText(textoDatosEncargadoCedula, { x: 380, y: 662, size: 10, color: rgb(0, 0, 0), font: customFont, })
    
    page1.drawRectangle({ x: 20,y: 643,width: 150,height: 15,color: rgb(0.8, 0.8, 0.8),borderColor: rgb(0, 0, 0),borderWidth: 1.5,})
    page1.drawRectangle({ x: 170,y: 643,width: 408,height: 15,borderColor: rgb(0, 0, 0),borderWidth: 1.5,})
    page1.drawText(textoDatosUsuario, { x: 50,y: 647,size: 10,color: rgb(0, 0, 0),font: customFont,})
    
    page1.drawRectangle({ x: 20,y: 628,width: 150,height: 15,color: rgb(0.8, 0.8, 0.8),borderColor: rgb(0, 0, 0),borderWidth: 1.5,})
    page1.drawRectangle({ x: 170,y: 628,width: 408,height: 15,borderColor: rgb(0, 0, 0),borderWidth: 1.5,})
    page1.drawText(textoDatosCorreo, { x: 70,y: 632,size: 10,color: rgb(0, 0, 0),font: customFont,})
    
    page1.drawRectangle({ x: 20,y: 613,width: 80,height: 15,color: rgb(0.8, 0.8, 0.8),borderColor: rgb(0, 0, 0),borderWidth: 1.5,})
    page1.drawRectangle({ x: 100,y: 613,width: 200,height: 15,borderColor: rgb(0, 0, 0),borderWidth: 1.5,})
    page1.drawText(textoDatosArea, { x: 45,y: 617,size: 10,color: rgb(0, 0, 0),font: customFont,})
    
    page1.drawRectangle({ x: 380, y: 613, width: 198, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 300, y: 613, width: 80, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoDatosTelefono, { x: 315, y: 617, size: 10, color: rgb(0, 0, 0), font: customFont, })

    
    // FIN DEL LOS DATOS DEL COLABORADOR

    // INICIO APARTADO HARDWARE


    page1.drawRectangle({ x: 20, y: 580, width: 558, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoHardware, { x: 260, y: 584, size: 10, font: customFont, })
    page1.drawRectangle({ x: 20, y: 565, width: 112, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaTipo, { x: 60, y: 569, size: 10, font: customFont, })
    page1.drawRectangle({ x: 132, y: 565, width: 112, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaNomRed, { x: 150, y: 569, size: 10, font: customFont, })
    page1.drawRectangle({ x: 244, y: 565, width: 112, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaMarca, { x: 278, y: 569, size: 10, font: customFont, })
    page1.drawRectangle({ x: 356, y: 565, width: 112, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaModelo, { x: 390, y: 569, size: 10, font: customFont, })
    page1.drawRectangle({ x: 468, y: 565, width: 110, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaSerial, { x: 510, y: 569, size: 10, font: customFont, })
    // INGRESO DATOS
    page1.drawRectangle({ x: 20, y: 550, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 132, y: 550, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 244, y: 550, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 356, y: 550, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 468, y: 550, width: 110, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    // FIN INGRESO DATOS

    
    page1.drawRectangle({ x: 20, y: 535, width: 112, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaProcesador, { x: 45, y: 539, size: 10, font: customFont, })
    page1.drawRectangle({ x: 132, y: 535, width: 112, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaMemRam, { x: 150, y: 539, size: 10, font: customFont, })
    page1.drawRectangle({ x: 244, y: 535, width: 112, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaCapDisc, { x: 247, y: 539, size: 10, font: customFont, })
    page1.drawRectangle({ x: 356, y: 535, width: 112, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaTeclado, { x: 390, y: 539, size: 10, font: customFont, })
    page1.drawRectangle({ x: 468, y: 535, width: 110, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaMouse, { x: 510, y: 539, size: 10, font: customFont, })


    /* // INGRESO DATOS


    page1.drawRectangle({ x: 20, y: 550, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 132, y: 550, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 244, y: 550, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 356, y: 550, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 468, y: 550, width: 110, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    // FIN INGRESO DATOS */

    // INGRESO DATOS
    page1.drawRectangle({ x: 20, y: 520, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 132, y: 520, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 244, y: 520, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 356, y: 520, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 468, y: 520, width: 110, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    // FIN INGRESO DATOS

    page1.drawRectangle({ x: 20, y: 505, width: 112, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaMonitor, { x: 55, y: 509, size: 10, font: customFont, })
    page1.drawRectangle({ x: 132, y: 505, width: 112, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaLector, { x: 170, y: 509, size: 10, font: customFont, })
    page1.drawRectangle({ x: 244, y: 505, width: 112, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaDvr, { x: 290, y: 509, size: 10, font: customFont, })
    page1.drawRectangle({ x: 356, y: 505, width: 112, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaTel, { x: 385, y: 509, size: 10, font: customFont, })
    page1.drawRectangle({ x: 468, y: 505, width: 110, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText(textoTablaImpresora, { x: 500, y: 509, size: 10, font: customFont, })


    // INGRESO DATOS

    page1.drawRectangle({ x: 20, y: 490, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 132, y: 490, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 244, y: 490, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 356, y: 490, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 468, y: 490, width: 110, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })

    // FIN INGRESO DATOS

    /*     // INGRESO DATOS
    page1.drawRectangle({ x: 20, y: 520, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 132, y: 520, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 244, y: 520, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 356, y: 520, width: 112, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 468, y: 520, width: 110, height: 15, borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    // FIN INGRESO DATOS */

    // INICIO DE OPCIONES MULTIPLES
    
    page1.drawRectangle({ x: 20, y: 461, width: 558, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawText('SOFTWARE', { x: 260, y: 465, size: 10, font: customFont, })
    page1.drawRectangle({x: 20, y: 446, width: 373, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5,})
        page1.drawText('Software estandar corporativo', {x: 140, y: 450, size: 10,font: customFont,})
    page1.drawRectangle({x: 392, y: 446, width: 186, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5,})
        page1.drawText('Otro Software solicitado', {x: 430, y: 450, size: 10,font: customFont,})
    
    page1.drawRectangle({ x: 20, y: 431, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 170, y: 431, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 20, y: 416, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 170, y: 416, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 20, y: 401, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 170, y: 401, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 20, y: 387, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 170, y: 387, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 20, y: 372, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 170, y: 372, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 20, y: 357, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 170, y: 357, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 20, y: 342, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 170, y: 342, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    
    page1.drawRectangle({ x: 206, y: 431, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 356, y: 431, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 206, y: 416, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 356, y: 416, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 206, y: 401, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 356, y: 401, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 206, y: 387, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 356, y: 387, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 206, y: 372, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 356, y: 372, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 206, y: 357, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 356, y: 357, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 206, y: 342, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 356, y: 342, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })

    page1.drawRectangle({ x: 392, y: 431, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 542, y: 431, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 392, y: 416, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 542, y: 416, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 392, y: 401, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 542, y: 401, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 392, y: 387, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 542, y: 387, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 392, y: 372, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 542, y: 372, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 392, y: 357, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 542, y: 357, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 392, y: 342, width: 150, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
    page1.drawRectangle({ x: 542, y: 342, width: 36, height: 15, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })



  page1.drawText('Windows',{ x: 30, y: 435, size:10  })
  page1.drawText('Office',{ x: 30, y: 420, size:10 })
  page1.drawText('Antivirus',{ x: 30, y: 405, size:10 })
  page1.drawText('PDF',{ x: 30, y: 390, size:10 })
  page1.drawText('7 Zip',{ x: 30, y: 375, size:10 })
  page1.drawText('Mozilla Firefox',{ x: 30, y: 360, size:10 })
  page1.drawText('Thunderbird',{ x: 30, y: 345, size:10 })

  page1.drawText('VLC Player',{ x: 220, y: 435, size:10 })
  page1.drawText('Skype',{ x: 220, y: 420, size:10 })
  page1.drawText('Flash Player',{ x: 220, y: 405, size:10 })
  page1.drawText('AnyDesk',{ x: 220, y: 392, size:10 })
  page1.drawText('Word Office',{ x: 220, y: 375, size:10 })
  
  page1.drawText('Photoshop',{ x: 410, y: 435, size:10 })
  page1.drawText('SQL Express',{ x: 410, y: 420, size:10 })
  page1.drawText('Eureka POS',{ x: 410, y: 405, size:10 })
  page1.drawText('Swift',{ x: 410, y: 390, size:10 })
  page1.drawText('Power BI',{ x: 410, y: 375, size:10 })
  page1.drawText('Otro(s)',{ x: 410, y: 362, size:10 })

  const windowsField = form.createCheckBox('Windows')
  const officeField = form.createCheckBox('Office')
  const antivirusField = form.createCheckBox('Antivirus')
  const pdfField = form.createCheckBox('PDF')
  const zipField = form.createCheckBox('7 Zip')
  const mozillaField = form.createCheckBox('Mozilla Firefox')
  const thunderbirdField = form.createCheckBox('Thunderbird')
  const vlcField = form.createCheckBox('VLC Player')
  const skypeField = form.createCheckBox('Skype')
  const flashField = form.createCheckBox('Flash Player')
  const anydeskField = form.createCheckBox('AnyDesk')
  const helisaField = form.createCheckBox('Photoshop')
  const sqlField = form.createCheckBox('SQL Express')
  const erkField = form.createCheckBox('Eureka POS')
  const illusField = form.createCheckBox('Swift')
  const photoField = form.createCheckBox('Power BI')

  const wordField = form.createCheckBox('Word Office')
  const otroField = form.createCheckBox('Otro(s)')

  windowsField.addToPage(page1, { x: 185, y: 435, width: 8, height: 8,})
  officeField.addToPage(page1, { x: 185, y: 420, width: 8, height: 8 })
  antivirusField.addToPage(page1, { x: 185, y: 405, width: 8, height: 8 })
  pdfField.addToPage(page1, { x: 185, y: 390, width: 8, height: 8 })
  zipField.addToPage(page1, { x: 185, y: 375, width: 8, height: 8 })
  mozillaField.addToPage(page1, { x: 185, y: 360, width: 8, height: 8 })
  thunderbirdField.addToPage(page1, { x: 185, y: 345, width: 8, height: 8 })

  vlcField.addToPage(page1, { x: 370, y: 435, width: 8, height: 8 })
  skypeField.addToPage(page1, { x: 370, y: 420, width: 8, height: 8 })
  flashField.addToPage(page1, { x: 370, y: 405, width: 8, height: 8 })
  anydeskField.addToPage(page1, { x: 370, y: 390, width: 8, height: 8 })
  wordField.addToPage(page1, { x: 370, y: 375, width: 8, height: 8 })
  
  helisaField.addToPage(page1, { x: 557, y: 435, width: 8, height: 8 })
  sqlField.addToPage(page1, { x: 557, y: 420, width: 8, height: 8 })
  erkField.addToPage(page1, { x: 557, y: 405, width: 8, height: 8 })
  illusField.addToPage(page1, { x: 557, y: 390, width: 8, height: 8 })
  photoField.addToPage(page1, { x: 557, y: 375, width: 8, height: 8 })
  otroField.addToPage(page1, { x: 557, y: 360, width: 8, height: 8 })
  



/*   page1.drawRectangle({ x: 20, y: 15, width: 558, height: 315, color: rgb(1, 1, 1), borderColor: rgb(0, 0, 0), borderWidth: 1.5, }) */
  
  const clausulas = 'Certifico que los elementos detallados en el presente documento me han sido entregados para mi cuidado y custodia con '

  const clausulas0 = 'el propósito de cumplir con las tareas y asignaciones propias de mi cargo en la empresa, siendo estos de mi única y '
   
  const clausulas1 = 'exclusiva responsabilidad. Me comprometo a usar correctamente los recursos, y solo para los fines establecidos, a no ' 
  const clausulas2 = 'instalar ni permitir la instalación de software por personal ajeno al grupo interno de Soporte TI. Todo daño físico causado '
  const clausulas3 = 'por maltrato o uso inapropiado de los equipos, robo o pérdida de estos es de mi única y exclusiva responsabilidad, por lo '
    
  const clausulas4 = 'cual autorizo se descuente el valor correspondiente del pago de nómina en caso de finalizar mi contrato laboral, '
  const clausulas5 = 'me comprometo a realizar la devolución de la totalidad de los equipos asignados y autorizo el descuento de salarios, '
  const clausulas6 = 'prestaciones sociales, vacaciones, bonificaciones, auxilios y demás derechos que me correspondan del valor '
  const clausulas7 = 'correspondiente a daños, pérdida o robo.'
   


  const clausula1 = 'Clausula 1: El dispositivo debe ser devuelto al jefe directo, quien quedará bajo su custodia, cuando el colaborador o la '
  const clausula2 = 'colaboradora decida trasladarse o no continuar en la empresa.'


  
  
  page1.drawRectangle({ x: 20, y: 250, width: 558, height: 80, color: rgb(0.9, 0.9, 0.9), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
  
  page1.drawRectangle({ x: 20, y: 315, width: 558, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
  page1.drawText('OBSERVACIONES',{ x: 250, y: 318, size:10,  })
  page1.drawText(clausulas,{ x: 25, y: 238 , size: 10, maxWidth: 548, })
  page1.drawText(clausulas0,{ x: 25, y: 228 , size: 10, maxWidth: 548, })
  page1.drawText(clausulas1,{ x: 25, y: 218, size: 10, maxWidth: 548, })
  page1.drawText(clausulas2,{ x: 25, y: 208, size: 10, maxWidth: 548, })
  page1.drawText(clausulas3,{ x: 25, y: 198, size: 10, maxWidth: 548, })
  page1.drawText(clausulas4,{ x: 25, y: 188, size: 10, maxWidth: 548, })
  page1.drawText(clausulas5,{ x: 25, y: 178, size: 10, maxWidth: 548, })
  page1.drawText(clausulas6,{ x: 25, y: 168, size: 10, maxWidth: 548, })
  page1.drawText(clausulas7,{ x: 25, y: 158, size: 10, maxWidth: 548, })

  page1.drawText(clausula1,{ x: 25, y: 148, size: 10, maxWidth: 548, })
  page1.drawText(clausula2,{ x: 25, y: 138, size: 10, maxWidth: 548, })
  page1.drawText(clausula1,{ x: 25, y: 148, size: 10, maxWidth: 548, })
  page1.drawText(clausula2,{ x: 25, y: 138, size: 10, maxWidth: 548, })

  page1.drawRectangle({ x: 20.5, y: 120, width: 558, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
  page1.drawText('ENTREGA DE EQUIPO',{ x: 240, y: 123, size:10,  })
  page1.drawRectangle({ x: 20.5, y: 105, width: 279, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
  page1.drawText('ENTREGA',{ x: 130, y: 109, size:10,  })
  page1.drawRectangle({ x: 298, y: 105, width: 280, height: 15, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
  page1.drawText('RECIBE',{ x: 430, y: 109, size:10,  })
  
  page1.drawLine({start: {x: 298, y: 120}, end: {x: 298, y: 15}, thickness: 1.5, color: rgb(0, 0, 0)})
  page1.drawLine({start: {x: 20.5, y: 330}, end: {x: 20.5, y: 15}, thickness: 1.5, color: rgb(0, 0, 0)})
  page1.drawLine({start: {x: 578, y: 330}, end: {x: 578, y: 15}, thickness: 1.5, color: rgb(0, 0, 0)})
  page1.drawRectangle({ x: 20.5, y: 15, width: 279, height: 30, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
  page1.drawRectangle({ x: 298, y: 15, width: 280, height: 30, color: rgb(0.8, 0.8, 0.8), borderColor: rgb(0, 0, 0), borderWidth: 1.5, })
  page1.drawText('FIRMA',{ x: 80, y: 60, size:50, color: rgb(0.9, 0.9, 0.9)  })
  page1.drawText('FIRMA',{ x: 370, y: 60, size:50, color: rgb(0.9, 0.9, 0.9)  })
  page1.drawText('NOMBRE:',{ x: 25, y: 30, size: 10, })
  page1.drawText('NOMBRE:',{ x: 305, y: 30, size: 10, })
  page1.drawText('CÉDULA:',{ x: 305, y: 20, size: 10, })
  page1.drawText('CÉDULA:',{ x: 25, y: 20, size: 10, })


  

  

  const pdfBytes = await pdfDoc.save()
  console.log(pdfBytes)
  params.setPdfBites(await pdfDoc.saveAsBase64())
  /* download(pdfBytes, "creation_example.pdf", "application/pdf") */
}/* 
const LlamarDatos = ({user}) => {
  const [usuarios, setUsuarios] = useState({
    docIdentidadUsuario: '',
    nombreUsuario: '',
    correo: '',
    rolUsuario: '',
    areaUsuario: '',
    ubicacion: '',
  })
  useEffect(() => {
    setUsuarios({
      docIdentidadUsuario: user.doc_identidad,
      nombreUsuario: user.nombre,
      correo: user.correo,
      rolUsuario: user.rol.id_rol,
      areaUsuario: user.area.id_area,
      ubicacion: user.ubicacion.id_ubicacion,
    })
  }, [user])

  return (
    <div>a</div>
  )
} */
export default createForm