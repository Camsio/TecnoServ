import React from 'react'
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
import EditaUsuario from './pages/EditaUsuario'
import HacerFirma from './pages/HacerFirma'
import { Toaster } from 'react-hot-toast'


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

