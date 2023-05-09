import { createContext, useState } from "react";

export const FavoritosContext = createContext();

export const FavoritoProvider = ({ children }) => {
  const [favorito, setFavorito] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <FavoritosContext.Provider
      value={{ isClicked, setIsClicked, favorito, setFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};
