import React from "react";
import styled from 'styled-components'

import { useContext } from 'react'
import { CarrinhoContext } from '../context/CarrinhoContext';

import Favoritar from "../components/FavButton";
import Adcionar from "./AddButton";

const ContainerDeus= styled.div`
width: 80vw;
display: flex;

@media screen  and (max-width: 1000px) {
width: 90%;
}
`

const ContainerGeral= styled.div`
width: 100%;
height: 350px;
display: flex;
justify-content: center;
flex-wrap: wrap;
padding-top: 20px;
flex-direction: column;
align-items: center;
margin-top: 60px;

@media only screen and (max-width: 1000px) {
    width: 100vw;
}
@media only screen and (min-width: 1600px) {
    width: 100%;
}
`
const Container= styled.div`
width: 90%;
height: 100%;
display: flex;
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
  border-radius: 3px;
}

@media only screen and (max-width: 1000px) {
    width: 90vw
}
`

const ContainerProduto = styled.div`
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 10px;
width: 250px;
`

const Produto = styled.div`
width: 150px;
height: 150px;
display: flex;
flex-direction: column;
margin-top: 30px;
position: relative;

@media only screen and (max-width: 1000px) {
    width: 150px;
    height: 150px;
    margin-top: 0;
}
`
const Offer = styled.h1`
padding: 5px;
background-color: red;
color: white;
position: absolute;
font-size: 20px;
`
const ImagemProduto = styled.img`
cursor: pointer;
background-color: white;
`

const Colecao = styled.p`
font-size: 12px;
text-align: center;
opacity: 0.5;
width: 300px;
`
const PreçoBruto = styled.h1`
font-size: 20px;
text-align: center;
text-decoration: line-through;
color: #181818d5;
margin: 0;
`
const PreçoFinal = styled.h1`
font-size: 20px;
text-align: center;
color: red;
margin: 0;
margin-bottom: 10px;
`
const ContainerBotoes = styled.div`
display:flex;
justify-content: center;
position: relative;
width: 120px;
height: 20px;
`

const Div = styled.div`
width: 100px;
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
margin-top: -50px;
padding-left: 10px;
padding-right: 10px;
color: #141414e1;
`

const Outlet = ({data, func, qualItem}) => {

    return (
        <ContainerDeus>
            <ContainerGeral>
                <Div>
                    <Titulo>OUTLET</Titulo> 
                </Div>  
                <Container>                     
                    {data.map((item)=>{
                        return(          
                            <ContainerProduto key={item.id}>
                                <Produto>
                                    <Offer>-30%</Offer>
                                    <ImagemProduto src={item.url}/>
                                </Produto>
                                <Colecao>{item.colecao}</Colecao>
                                <PreçoBruto>{item.bruto.toFixed(2)} R$</PreçoBruto>
                                <PreçoFinal>{item.preço.toFixed(2)} R$</PreçoFinal>
                                <ContainerBotoes>
                                    <Adcionar func={func} item={item}/>
                                    <Favoritar item={item}/>
                                </ContainerBotoes>
                            </ContainerProduto>
                            )})}
                </Container> 
            </ContainerGeral>  
        </ContainerDeus>
    );
}
 
export default Outlet;