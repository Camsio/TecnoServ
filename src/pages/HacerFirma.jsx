import React, { useEffect, useRef, useState } from 'react';

const HacerFirma = () => {
  const canvasRef = useRef(null);
  const [dibujando, setDibujando] = useState(false);
  const [colorPincel, setColorPincel] = useState('#000');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const ajustarTamañoCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const dibujar = (x, y, moviendo) => {
      if (!moviendo) {
        ctx.beginPath();
      }
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.strokeStyle = colorPincel;
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    const usarBorrador = (x, y) => {
      const tamañoBorrador = 20;
      const xBorrador = Math.round(x - tamañoBorrador / 2);
      const yBorrador = Math.round(y - tamañoBorrador / 2);
      ctx.clearRect(xBorrador, yBorrador, tamañoBorrador, tamañoBorrador);
    };

    const onMouseDown = (e) => {
      setDibujando(true);
      const rect = canvas.getBoundingClientRect();
      dibujar(e.clientX - rect.left, e.clientY - rect.top, false);
    };

    const onMouseMove = (e) => {
      if (dibujando) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (colorPincel === 'rgba(0, 0, 0, 0)') {
          usarBorrador(x, y);
        } else {
          dibujar(x, y, true);
        }
      }
    };

    const onMouseUp = () => {
      setDibujando(false);
      ctx.beginPath();
    };

    window.addEventListener('resize', ajustarTamañoCanvas);

    ajustarTamañoCanvas();

    return () => {
      window.removeEventListener('resize', ajustarTamañoCanvas);
    };
  }, [colorPincel, dibujando]);

  const descargarImagen = () => {
    const enlace = document.createElement('a');
    enlace.href = canvasRef.current.toDataURL('image/png');
    enlace.download = 'mi_firma.png';

    document.body.appendChild(enlace);

    const clicEvent = new MouseEvent('click');
    enlace.dispatchEvent(clicEvent);

    document.body.removeChild(enlace);
  };

  const usarBorrador = () => {
    setColorPincel('rgba(0, 0, 0, 0)');
  };

  const usarPincelNegro = () => {
    setColorPincel('#000');
  };

  const borrarTodo = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        id="miCanvas"
        onMouseDown={(e) => onMouseDown(e)}
        onMouseMove={(e) => onMouseMove(e)}
        onMouseUp={() => onMouseUp()}
      />
      <div className="botones">
        <button className='buttonf' onClick={descargarImagen}>
          <img src="./descargas.png" alt="" />
        </button>
        <button className='buttonf' onClick={usarBorrador}>
          <img src="./borrador.png" alt="" />
        </button>
        <button className='buttonf' onClick={usarPincelNegro}>
          <img src="./lapiz.png" alt="" />
        </button>
        <button className='buttonf' onClick={borrarTodo}>
          <img src="./boton-remover-redondo.png" alt="" />
        </button>
        {/* <div className="input-file-container">
          <label htmlFor="archivo" className="input-file-button">
            Cargar
          </label>
          <input type="file" id="archivo" className="input-file" />
          <div className="file-name" id="file-name"></div>
        </div> */}
      </div>
    </div>
  );
};

export default HacerFirma;
