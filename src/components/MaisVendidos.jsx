import React from "react";
import styled from 'styled-components'

import { useContext } from 'react'
import { CarrinhoContext } from '../context/CarrinhoContext';

const data = [
    {
    tipo: "boné",
    nome: "Boné Wanted",
    tamanho: "P",
    cor: "Preto",
    url:  "https://wantedind.com/wp-content/uploads/2022/12/BONE-PRETO-ALTERADO-1-900x900.png",
    descricao: "Boné five panel",
    preço: 74.90,
    colecao: "Cap00",
    id: 0,
},
{
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "GG",
    cor: "Preto",
    url:  "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-frente-2-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-costas-600x600.jpg",
    descricao: "Camiseta básica preta",
    preço: 99.90,
    colecao: "Premium",
    id: 1,
},
{
    tipo: "boné",
    nome: "Boné Wanted",
    cor: "Preto",
    tamanho: "P",
    url:  "https://wantedind.com/wp-content/uploads/2022/12/FIVE-BONE-PRETO-ALTERADO-900x900.png",
    descricao: "Boné five panel",
    preço: 74.90,
    colecao: "Cap00",
    id: 2,
},
{
    tipo: "Tênis",
    nome: "Ous",
    tamanho: "40",
    cor: "Preto/Rosa",
    url:  "https://dillysports.vteximg.com.br/arquivos/ids/172372-1000-1000/THUMB_350001_44_IMIGRANTE-PRT-REFLETIVO-CHICLE-ESSENCIAL.jpg?v=638004051639500000",
    urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/171722-1000-1000/350001_44-3.jpg?v=637992972757330000",
    descricao: "Tenis bonito pro pé",
    preço: 139.90,
    colecao: "Emigrante",
    id: 3,
},
{
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "GG",
    cor: "Preto",
    url:  "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-frente-2-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-costas-600x600.jpg",
    descricao: "Camiseta básica preta",
    preço: 99.90,
    colecao: "Premium",
    id: 4,
},
{
    tipo: "Tênis",
    nome: "Ous",
    tamanho: "40",
    cor: "Branco",
    url:  "https://dillysports.vteximg.com.br/arquivos/ids/178494-1000-1000/imigrante_branco_2_oe_thumb.jpg?v=638128463015830000",
    urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/176100-1000-1000/350001_64-2.jpg?v=638070503036230000",
    descricao: "Tenis bonito pro pé",
    preço: 139.90,
    colecao: "Emigrante",
    id: 5,
},
{
    tipo: "boné",
    nome: "Boné Wanted",
    url:  "https://wantedind.com/wp-content/uploads/2022/12/BONE-PRETO-ALTERADO-1-900x900.png",
    descricao: "Boné five panel",
    preço: 74.90,
    colecao: "Cap00",
    id: 6,
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
border-top: 3px solid #e2e2e2;
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
const Favoritar = styled.img`
width:20px;
height: 20px;
padding:3px;
cursor: pointer;
position: absolute;
margin-left: 50px;
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


const MaisVendidos = () => {
    
    const {sacola, setSacola} = useContext(CarrinhoContext)

    const add = (indice) =>{
         setSacola([...sacola, indice])
    }
    return (
        <>
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
                            <PreçoProduto>{indice.preço} R$</PreçoProduto>
                            <ContainerBotoes>
                                <Adcionar onClick={() => {                          
                                    add(indice)
                                }} src="./img/add.png"/>
                                <Favoritar src="./img/heart-empty.png"/>
                            </ContainerBotoes>
                        </ContainerProduto>
                        )       
                    })}
                </Container> 
            </ContainerGeral>  

        </>
    );
}
 
export default MaisVendidos;