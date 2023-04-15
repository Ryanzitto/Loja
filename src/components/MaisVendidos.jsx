import React from "react";
import styled from 'styled-components'
import { useContext } from 'react'
import { CarrinhoContext } from '../context/CarrinhoContext'; 

import Favoritar from "../components/FavButton";

const ContainerGeral= styled.div`
width: 100vw;
height: 400px;
display: flex;
justify-content: center;
flex-wrap: wrap;
padding-top:20px;
flex-direction: column;
align-items: center;
margin-top: 20px;
@media only screen and (max-width: 1000px) {
    width: 100vw
}
  @media only screen and (min-width: 1550px) {
    width: 100%;
    height: 400px;
    margin-top: 0;
}
`
const Container= styled.div`
width: 60%;
height: 100%;
display: flex;
justify-content: center;
overflow:auto; 
border-top: 1px solid #e2e2e2;
position: relative;

::-webkit-scrollbar {
  width: 3px;
  height: 5px;
  background-color: #aaa; 
}
::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 3px;;
}
@media only screen and (max-width: 1000px) {
    width: 100vw
}
`

const ContainerProduto = styled.div`
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 10px;
`

const Produto = styled.div`
width: 200px;
height: 200px;
display: flex;
flex-direction: column;
margin-top: 30px;
@media only screen and (max-width: 1000px) {
    width: 150px;
    height: 150px;
    margin-top: 0;
}
`
const ImagemProduto = styled.img`
cursor: pointer;
background-color: white;
position: relative;
`

const SegundaImagem = styled.img`
width: 200px;
height :200px;
position: absolute;
z-index: -1;
background-color: white;

@media only screen and (max-width: 1000px) {
    width: 150px;
    height: 150px;
    margin-top: 0;
}
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
const Adcionar = styled.img`
width:20px;
height: 20px;
padding:3px;
cursor: pointer;
position: absolute;
margin-right: 50px;

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

const Div = styled.div`
width:200px;
display: flex;
position: relative;
justify-content: center;
align-items: center;
margin-bottom: -25px;
`

const Titulo = styled.h1`
    font-size: 20px;
    background-color: white;
    position: absolute;
    z-index: 1;
    margin-top: -45px;
    padding-left: 10px;
    padding-right: 10px;
    color: #141414e1;
`

const MaisVendidos = ({data}) => {
    
    const {sacola, setSacola} = useContext(CarrinhoContext)

    const add = (indice) =>{
         setSacola([...sacola, indice])
    }
    return (
        <ContainerGeral>
            <Div>
                <Titulo>MAIS VENDIDOS</Titulo> 
            </Div>  
                <Container>                     
                    {data.map((indice)=>{
                        return(          
                        <ContainerProduto  key={indice.id}>
                            <Produto>
                                <ImagemProduto src={indice.url}/>
                                <SegundaImagem src={indice.urlSubImage}/>
                            </Produto>
                            <Colecao>{indice.colecao}</Colecao>
                            <PreçoProduto>{indice.preço.toFixed(2)} R$</PreçoProduto>
                            <ContainerBotoes>
                                <Adcionar onClick={() => {add(indice)}} src="./img/add.png"/>
                                <Favoritar indice={indice}/>
                            </ContainerBotoes>
                        </ContainerProduto>
                        )})}
                </Container> 
        </ContainerGeral>  
    );
}
 
export default MaisVendidos;