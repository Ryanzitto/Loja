import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/Home.jsx'
import Camisas from './routes/Camisas'
import FootWear from './routes/FootWear'
import HeadWear from './routes/HeadWear'
import Bermudas from './routes/Bermudas'

import { CarrinhoProvider } from './context/CarrinhoContext'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {path: "Home", element: <Home/>},
      {path: "Camisas", element: <Camisas/>},
      {path: "FootWear", element: <FootWear/>},
      {path: "HeadWear", element: <HeadWear/>},
      {path: "Bermudas", element: <Bermudas/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CarrinhoProvider>
        <RouterProvider router={router}/>
      </CarrinhoProvider>
  </React.StrictMode>,
)