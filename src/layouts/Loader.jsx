import React from 'react';
import '../../Estilos/Loader.css';
import logoLoad from '../assets/logo-load2.svg';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="dots-container">
        <span> Loading </span>
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </div>
      <object type="image/svg+xml" data={logoLoad} width="200" height="200">
        Tu navegador no soporta la visualización de SVG.
      </object>
    </div>
  );
}

export default Loader;