import { createContext, useState } from "react";

export const DetalhesContext = createContext();

export const DetalhesProvider = ({ children }) => {
  const [qualItem, setQualItem] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const defineItem = (item) => {
    setQualItem(item);
    setIsOpen(true);
  };

  const toggleStateDetalhes = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DetalhesContext.Provider
      value={{
        qualItem,
        setQualItem,
        isOpen,
        setIsOpen,
        defineItem,
        toggleStateDetalhes,
      }}
    >
      {children}
    </DetalhesContext.Provider>
  );
};
