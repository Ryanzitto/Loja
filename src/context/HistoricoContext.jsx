import { useContext } from "react";
import { createContext, useState, useEffect} from "react";


export const HistoricoContext = createContext()

export const HistoricoProvider = ({children}) => {

    const [historicoDeCompra, setHistoricoDeCompra] = useState([])

    useEffect(() => {console.log('Funciona')},[historicoDeCompra])
    return(
        <HistoricoContext.Provider value={{historicoDeCompra, setHistoricoDeCompra}}>{children}</HistoricoContext.Provider>
    )
}