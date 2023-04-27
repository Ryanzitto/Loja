import { Outlet } from 'react-router-dom'
import "./app.css"
import Perfil from './routes/Perfil'


function App() {

  return (
    <div className="App">
       <Outlet/> 
    </div>
  )
}

export default App