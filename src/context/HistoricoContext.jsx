import { createContext, useState } from "react";

export const HistoricoContext = createContext()

export const HistoricoProvider = ({children}) => {

    const [historicoDeCompra, setHistoricoDeCompra] = useState([])

    return(
        <HistoricoContext.Provider value={{historicoDeCompra, setHistoricoDeCompra}}>{children}</HistoricoContext.Provider>
    )
}