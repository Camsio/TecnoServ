import { PDFDocument, rgb } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
/* import React, { useEffect, useState } from 'react'

function DisplayPdf({ pdfBytes }) {
  const [pdfSrc, setPdfSrc] = useState('');

  useEffect(() => {
    const pdfDataUri = `data:application/pdf;base64,${pdfBytes.toString('base64')}`;
    setPdfSrc(pdfDataUri);
  }, [pdfBytes]);

  return (
    <iframe
      title="PDF Viewer"
      src={pdfSrc}
      width="100%"
      height="500px"
      style={{ border: 'none' }}
    />
  );
} */
async function download(pdfBytes, fileName, mimeType) {
    const blob = new Blob([pdfBytes], { type: mimeType });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  async function createForm() {
    const pngUrl = '/public/imagenes/logo.png';
    const url = 'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf'
    
    
    const pngImageBytes = await fetch(pngUrl).then((res) => res.arrayBuffer());
    const fontBytes = await fetch(url).then(res => res.arrayBuffer())
  
    const pdfDoc = await PDFDocument.create();

    pdfDoc.registerFontkit(fontkit)
    const customFont = await pdfDoc.embedFont(fontBytes)
  
    // Crear páginas
    const page1 = pdfDoc.addPage();
  
    // Embed de imágenes
    const pngImage = await pdfDoc.embedPng(pngImageBytes);

  
    // Dimensiones de las imágenes
    const pngDims = pngImage.scale(0.3);

    // Dibujar imágenes en las páginas
    page1.drawImage(pngImage, {
      x: 20,
      y: page1.getHeight() - pngDims.height - -5,
      width: pngDims.width,
      height: pngDims.height,
    });
    const text = 'TECNO SERV'
    const textActa = 'Acta de Entrega y devolucion'
    const textActa1 = 'de equipos de computo'
    const textSize = 40

    const textoTabla = 'DATOS DEL COLABORADOR'
    const textoTablaTipo = 'TIPO'
    const textoTablaNomRed = 'NOMBRE DE RED'
    const textoTablaMarca = 'MARCA'
    const textoTablaModelo = 'MODELO'
    const textoTablaProcesador = 'PROCESADOR'
    const textoTablaMemRam = 'MEMORIA RAM'
    const textoTablaCapDisc = 'CAPACIDAD DEL DISCO'
    const textoTablaTeclado = 'TECLADO'
    const textoTablaSerial = 'M'
/*     const textWidth = customFont.widthOfTextAtSize(text, textSize)
    const textHeight = customFont.heightAtSize(textSize) */
  
    page1.drawText(text, {
      x: 250,
      y: 785,
      size: textSize,
      font: customFont,
    })
    page1.drawText(textActa, {
      x: 235,
      y: 755,
      size: 20,
      font: customFont,
    })
    page1.drawText(textActa1, {
      x: 260,
      y: 730,
      size: 20,
      font: customFont,
    })
    page1.drawRectangle({
      x: 20,
      y: 713,
      width: 558,
      height: 110,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1.5,
    })
    page1.drawText(textoTabla, {
      x: 230,
      y: 692,
      size: 10,
      font: customFont,
    })
    page1.drawRectangle({
      x: 20,
      y: 688,
      width: 558,
      height: 15,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1.5,
    })
    page1.drawRectangle({
      x: 20,
      y: 673,
      width: 112,
      height: 15,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1.5,
    })
    page1.drawText(textoTablaTipo, {
      x: 60,
      y: 677,
      size: 10,
      font: customFont,
    })
    page1.drawRectangle({
      x: 132,
      y: 673,
      width: 112,
      height: 15,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1.5,
    })
    page1.drawRectangle({
      x: 244,
      y: 673,
      width: 112,
      height: 15,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1.5,
    })
    page1.drawRectangle({
      x: 356,
      y: 673,
      width: 112,
      height: 15,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1.5,
    })
    page1.drawRectangle({
      x: 468,
      y: 673,
      width: 110,
      height: 15,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1.5,
    })
    page1.drawRectangle({
      x: 20,
      y: 658,
      width: 112,
      height: 15,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1.5,
    })
    page1.drawText(textoTablaNomRed, {
      x: 40,
      y: 663,
      size: 10,
      font: customFont,
    })
    page1.drawRectangle({
      x: 132,
      y: 658,
      width: 112,
      height: 15,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1.5,
    })
    page1.drawRectangle({
      x: 244,
      y: 658,
      width: 112,
      height: 15,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1.5,
    })
    page1.drawRectangle({
      x: 356,
      y: 658,
      width: 112,
      height: 15,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1.5,
    })
    page1.drawRectangle({
      x: 468,
      y: 658,
      width: 110,
      height: 15,
      borderColor: rgb(0, 0, 0),
      borderWidth: 1.5,
    })
  
  const pdfBytes = await pdfDoc.save()
  download(pdfBytes, "pdf-lib_form_creation_example.pdf", "application/pdf")
}
export default createForm