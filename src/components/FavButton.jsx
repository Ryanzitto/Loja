import styled from "styled-components";
import { useState, useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

const FavoritarIcon = styled.img`
width:20px;
height: 20px;
padding:3px;
cursor: pointer;
position: absolute;
margin-left: 50px;

&:hover{
    animation: animacao 0.5s ease both;
    @keyframes animacao {
        from{
            width:20px;
            height: 20px;
        }
        to{
            width: 23px;
            height: 23px;
            transform: translateY(-5px);
        }
    }
}
`

const Favoritar = ({indice}) => {

    const {favorito, setFavorito} = useContext(FavoritosContext)

    const [isClicked, setIsClicked] = useState(indice.fav)

    const addToFavorite = () => {
        
        if(isClicked == false){
            indice.fav = true;
            setFavorito([...favorito, indice])
            setIsClicked(indice.fav)
            console.log(indice)
        }
        else if(isClicked == true){
            indice.fav = false;
            setIsClicked(indice.fav)
            setFavorito(favorito.filter((item) => JSON.stringify(item) !== JSON.stringify(indice)) , indice.fav = false)
        }
    } 

    return (
        <>
        <FavoritarIcon onClick={addToFavorite} src={indice.fav == true ? "./img/heart-full.png" : "./img/heart-empty.png"}/>
        </>
    );
}
 
export default Favoritar;