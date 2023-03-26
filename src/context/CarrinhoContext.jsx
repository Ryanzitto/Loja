import { createContext, useState } from "react";

export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({children}) => {

    const [carrinhoEstado, setCarrinhoEstado] = useState("fechado")

    const [sacola, setSacola] = useState([])

    const toggleCarrinhoEstado = () => {
        setCarrinhoEstado( carrinhoEstado === "fechado" ? "aberto" : "fechado");
    }
    return(
        <CarrinhoContext.Provider value={{carrinhoEstado, toggleCarrinhoEstado, sacola, setSacola}}>{children}</CarrinhoContext.Provider>
    )
}