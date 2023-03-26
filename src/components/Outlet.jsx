import React from "react";
import styled from 'styled-components'

import { useContext } from 'react'
import { CarrinhoContext } from '../context/CarrinhoContext';

const data = [
    {
        tipo: "camiseta",
        nome: "Camiseta Wanted",
        tamanho: "GG",
        cor: "Preto",
        url:  "https://wantedind.com/wp-content/uploads/2020/08/logo-pixo-laranja-900x900.jpg",
        descricao: "Camiseta básica preta",
        preço: 99.90,
        bruto: 30.23,
        colecao: "Premium",
        id: 0,
    },
    {
        tipo: "Camiseta",
        nome: "Camisa Wanted",
        tamanho: "GG",
        cor: "Branco",
        url:  "https://wantedind.com/wp-content/uploads/2022/09/camiseta-wanted-grillz-preto-900x900.jpg",
        preço: 99.90,
        bruto: 139.90,
        colecao: "Premium",
        id: 1,
    },
    {
        tipo: "camiseta",
        nome: "Camiseta Wanted",
        tamanho: "GG",
        cor: "Preto",
        url:  "https://wantedind.com/wp-content/uploads/2020/08/logo-pixo-laranja-900x900.jpg",
        descricao: "Camiseta básica preta",
        preço: 74.90,
        bruto: 94.90,
        colecao: "Premium",
        id: 2,
    },
    {
        tipo: "Camiseta",
        nome: "Camiseta Wanted",
        url:  "https://wantedind.com/wp-content/uploads/2022/03/camiseta-wanted-bomb14-preto-900x900.jpg",
        descricao: "Boné five panel",
        preço: 54.90,
        bruto: 74.90,
        colecao: "Basics",
        cor: "Azul",
        tamanho: "P",
        id: 3,
    },
    {
        tipo: "camiseta",
        nome: "Camiseta Wanted",
        tamanho: "GG",
        cor: "Preto",
        url:  "https://wantedind.com/wp-content/uploads/2021/05/still-camiseta-premium-offwhite1-900x900.jpg",
        descricao: "Camiseta básica preta",
        preço: 54.90,
        bruto: 89.90,
        colecao: "Basics",
        id: 4,
    },
]

const ContainerGeral= styled.div`
width: 100vw;
height: 350px;
display: flex;
justify-content: center;
flex-wrap: wrap;
padding-top:20px;
flex-direction: column;
align-items: center;
margin-top: 20px;
@media only screen and (max-width: 1000px) {
    width: 100vw;
  }
@media only screen and (min-width: 1600px) {
    width: 100%;
  }
`
const Container= styled.div`
width: 60%;
height: 100%;
display: flex;
justify-content: center;
overflow:auto; 
border-top: 3px solid #e2e2e2;
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
    width: 100vw;
  }

`

const ContainerProduto = styled.div`
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 15px;
`

const Produto = styled.div`
width: 200px;
height: 200px;
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
`
const PreçoFinal = styled.h1`
font-size: 20px;
text-align: center;
color: red;
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
const Favoritar = styled.img`
width:20px;
height: 20px;
padding:3px;
cursor: pointer;
position: absolute;
margin-left: 50px;
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



const Outlet = () => {
    
    const {sacola, setSacola} = useContext(CarrinhoContext)

    const add = (indice) =>{
         setSacola([...sacola, indice])
         console.log(sacola)
    }
    return (
        <>
            <ContainerGeral>
                    <Div>
                        <Titulo>OUTLET</Titulo> 
                    </Div>  
                <Container>                     
                    {data.map((indice)=>{
                        return(          
                        <ContainerProduto key={indice.id}>
                            <Produto>
                                <Offer>-30%</Offer>
                                <ImagemProduto src={indice.url}/>
                            </Produto>
                            <Colecao>{indice.colecao}</Colecao>
                            <PreçoBruto>{indice.bruto} R$</PreçoBruto>
                            <PreçoFinal>{indice.preço} R$</PreçoFinal>
                            <ContainerBotoes>
                                <Adcionar onClick={() => {                          
                                    add(indice)
                                }} src="./img/add.png"/>
                                <Favoritar src="./img/hear-empty.png"/>
                            </ContainerBotoes>
                        </ContainerProduto>
                        )       
                    })}
                </Container> 
            </ContainerGeral>  

        </>
    );
}
 
export default Outlet;