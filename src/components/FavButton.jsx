import styled from "styled-components";
import { useState, useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

const FavoritarIcon = styled.img`
  width: 40px;
  height: 40px;
  padding: 3px;
  cursor: pointer;
  position: absolute;
  margin-left: 20px;
  margin-top: -7px;

  &:hover {
    animation: animaBtn 0.5s ease both;
    @keyframes animaBtn {
      to {
        padding: 0;
        width: 43px;
        height: 43px;
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
