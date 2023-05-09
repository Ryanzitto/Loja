import styled from "styled-components";
import { useState, useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

const FavoritarIcon = styled.img`
  width: 20px;
  height: 20px;
  padding: 3px;
  cursor: pointer;
  position: absolute;
  margin-left: 50px;

  &:hover {
    animation: animacao 0.5s ease both;
    @keyframes animacao {
      from {
        width: 20px;
        height: 20px;
      }
      to {
        width: 23px;
        height: 23px;
        transform: translateY(-5px);
      }
    }
  }
`;

const Favoritar = ({ item }) => {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  const [isClicked, setIsClicked] = useState(item.fav);

  const addToFavorite = () => {
    if (isClicked == false) {
      item.fav = true;
      setFavorito([...favorito, item]);
      setIsClicked(item.fav);
    } else if (isClicked == true) {
      item.fav = false;
      setIsClicked(item.fav);
      setFavorito(
        favorito.filter(
          (indice) => JSON.stringify(indice) !== JSON.stringify(item)
        )
      );
    }
  };

  return (
    <>
      <FavoritarIcon
        onClick={addToFavorite}
        src={
          item.fav == true ? "./img/heart-full.png" : "./img/heart-empty.png"
        }
      />
    </>
  );
};

export default Favoritar;
