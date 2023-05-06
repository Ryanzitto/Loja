import Sidebar from "../components/Sidebar";
import styled from 'styled-components'
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'

import { useContext, useState, useRef } from 'react'
import { FavoritosContext } from "../context/FavoritosContext";

import Favoritar from "../components/FavButton";
import Adcionar from "../components/AddButton";

const Containergeral = styled.div`
display: flex;
width:100vw;    
height: 100vh;
overflow-x: hidden;  
display: flex;

::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; 
}

::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 5px;;
}

@media only screen and (max-width: 1000px) {
    flex-direction: column;
}
`

const Nav= styled.div`
width: 20vw;
height: 100vh;
`

const Container= styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;


@media only screen and (max-width: 1000px) {
    width: 100vw
}
@media only screen and (min-width: 1000px) {
    margin-left: 30px;
}
`
const ContainerProduto = styled.div`
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`
const Produto = styled.div`
width: 200px;
display: flex;
flex-direction: column;
margin-top: 30px;
`
const ContainerNoFav = styled.div`
width: 80vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const NoFav = styled.img`
font-size: 50px;
width: 500px;
`
const Mensagem = styled.h1`
font-size: 30px;
color: #00000097;
font-weight: 900;
letter-spacing: 1px;
`

const FavoriteIcon = styled.img`
width: 30px;
margin-right: 1px;
margin-top: 2px;
`

const ImagemProduto = styled.img`
cursor: pointer;
background-color: white;
position: relative;
`

const Colecao = styled.p`
font-size: 12px;
text-align: center;
opacity: 0.5;
width: 300px;
`
const PreçoProduto = styled.h1`
font-size: 20px;
text-align: center;
`
const ContainerBotoes = styled.div`
display:flex;
justify-content: center;
position: relative;
width: 120px;
height: 20px;
`

const Ver = styled.button`
width: 80px;
height: 30px;
border: none;
border-radius: 5px;
background-color: #ffffffec;
font-size: 14px;
cursor: pointer;
font-weight: 500;
text-decoration: underline;
`

const style = {
    minHeight: "1050px",
};

const linkStyle = {
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    
}

const Favoritos = () => {

    const verRef = useRef()

    const [qualRota, setQualRota] = useState()

    const {favorito, setFavorito} = useContext(FavoritosContext)

    const defineQualRota = (indice) =>{
        if(indice.id > 0 && indice.id <= 9){
            setQualRota("/Camisas")
            setTimeout(() => {
            verRef.current.click()
            }, 100)
            console.log(favorito)
        }
        else if(indice.id >= 10 && indice.id <= 15){
            setQualRota("/Bermudas")
            setTimeout(() => {
                verRef.current.click()
                }, 100)
                console.log(favorito)
        }
        else if(indice.id >= 16 && indice.id <= 24){
            setQualRota("/FootWear")
            setTimeout(() => {
                verRef.current.click()
                }, 100)
                console.log(favorito)
        }
        else if(indice.id >= 25 && indice.id <= 30){
            setQualRota("/HeadWear")
            setTimeout(() => {
                verRef.current.click()
                }, 100)
                console.log(favorito)
        }
        else{ return }
    }
  
    return (
        <Containergeral>
            <Nav>
                <Sidebar/>
            </Nav>
                <Container style={favorito.length > 0 ? style : null} >
                    {favorito.map((indice)=>{
                        return(          
                            <ContainerProduto key={indice?.id}>
                                <Produto>
                                        <FavoriteIcon src="./img/heart.png"/>   
                                    <Link onClick={() => {defineQualRota(indice)}} ref={verRef} style={linkStyle} to={qualRota}>
                                        <ImagemProduto src={indice?.url}/>
                                    </Link>                                     
                                </Produto>
                                <Colecao>{indice?.colecao}</Colecao>
                                <PreçoProduto>{indice?.preço?.toFixed(2)} R$</PreçoProduto>
                                <ContainerBotoes>
                                    <Adcionar item={indice}/>
                                    <Favoritar item={indice}/>  
                                </ContainerBotoes>
                            </ContainerProduto>
                            )})}
                        {favorito < 1 && 
                        <ContainerNoFav>
                            <NoFav  src="./img/nofav.jpg"/>
                            <Mensagem>{`Seus favoritos ficam aqui!`}</Mensagem>
                        </ContainerNoFav>}
                        {favorito.length > 0 &&<Footer/>}
                </Container>     
        </Containergeral>
    );
}
 
export default Favoritos;