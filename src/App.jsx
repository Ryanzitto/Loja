import { Outlet } from 'react-router-dom'
import "./app.css"

import Home from './routes/Home'
function App() {

  return (
    <div className="App">
       <Outlet/>
    </div>
  )
}

export default App