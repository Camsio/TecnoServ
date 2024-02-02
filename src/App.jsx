import React, { Component } from 'react'
import '../Estilos/App.css'
import MenuLateral from './layouts/MenuLateral'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Gestion from './pages/Gestion'
import Inicio from './pages/InicioAdmin'
import Usuarios from './pages/Usuarios'
import Firma from './pages/Firma' 
import Stock from './pages/Stock' 
import AgregaUsuarios from './pages/AgregaUsuarios'
import AgregaEquipo from './pages/AgregaEquipo'
import EditaUsuario from './pages/EditaUsuario'
import HacerFirma from './pages/HacerFirma'
import { Toaster } from 'react-hot-toast'
import Historial from './pages/Historial'
import ValidaPdf from './pages/validaPdf'


function App() {

  const router = createBrowserRouter([
    { path: '/', exact: true, element: <Navigate to="/login" />},
    {
      path: "/dashboard",
      element: (
        <div>
          <MenuLateral/>
          <div className="contenido">
            <Inicio />
          </div>
        </div>
      ),
    },
    {
      path: "/dashboard/gestion",
      element: <div><MenuLateral/><div className="contenido"><Gestion /></div></div>
    },
    {
      path: "/dashboard/usuarios",
      element: <div><MenuLateral/><div className="contenido"><Usuarios /></div></div>
    },
    {
      path: "/dashboard/usuarios/editausuario",
      element: <div><MenuLateral/><div className="contenido"><EditaUsuario /></div></div>
    },
    {
      path: "/dashboard/usuarios/agregausuario",
      element: <div><MenuLateral/><div className="contenido"><AgregaUsuarios /></div></div>
    },
    {
      path: "/dashboard/gestion/stock",
      element: <div><MenuLateral/><div className="contenido"><Stock /></div></div>
    },
    {
      path: "/dashboard/gestion/stock/validarinfo/:id_equipo",
      element: <div><MenuLateral/><div className="contenido"><ValidaPdf /></div></div>
    },
    {
      path: "/dashboard/gestion/stock/historial/:id_equipo",
      element: <div><MenuLateral/><div className="contenido"><Historial /></div></div>
    },
    {
      path: "/dashboard/gestion/stock/agregarequipo",
      element: <div><MenuLateral/><div className="contenido"><AgregaEquipo /></div></div>
    },
    {
      path: "/dashboard/firma",
      element: <div><MenuLateral/><div className="contenido"><Firma /></div></div>
    },
    {
      path: "/dashboard/firma/hacerfirma",
      element: <div><MenuLateral/><div className="contenido"><HacerFirma /> </div></div>
    },
    {
      path: "login",
      element: <div><Login/></div>
    },
    {
      path:"*",
      element:"Error 404 pagina no encontrada XD, dedicate a otra cosa :p"
    }
    
  ]);

  return (
    <> 
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
      <RouterProvider router={router} />
    </>
  )
}
export default App

