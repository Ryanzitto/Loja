import React from "react";
import Sidebar from "../components/Sidebar";
import styled from 'styled-components'
import Footer from "../components/Footer";
import Carrinho from "../components/Carrinho";

import { useContext } from 'react'
import { CarrinhoContext } from '../context/CarrinhoContext';

const data = [{
    id: "1",
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "GG",
    cor: "Preto",
    url:  "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-frente-2-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-costas-600x600.jpg",
    descricao: "Camiseta básica preta",
    preço: 99.90,
    colecao: "Premium"
},
{
    id: "2",
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "GG",
    cor: "Preto",
    url:  "https://wantedind.com/wp-content/uploads/2022/04/camiseta-wanted-intern-preto-frente-1-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/04/artigo-4.22-LB-5-600x600.jpg",
    descricao: "Camiseta básica preta",
    preço: 99.90,
    colecao: "Premium"
},
{
    id: "3",
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "GG",
    cor: "Branca",
    url:  "https://wantedind.com/wp-content/uploads/2022/04/camiseta-wanted-dripper-logo-branco-1-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/04/artigo-4.22-LB-1-scaled.jpg",
    descricao: "Camiseta básica preta",
    preço: 99.90,
    colecao: "Premium"
},
{
    id: "4",
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "GG",
    cor: "Preto",
    url:  "https://wantedind.com/wp-content/uploads/2020/11/camiseta-focus-preto-frente3-600x600.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2020/11/focus-2-de-3-scaled.jpg",
    descricao: "Camiseta básica preta",
    preço: 99.90,
    colecao: "Premium"
},
{
    id: "5",
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "GG",
    cor: "Preto",
    url:  "https://wantedind.com/wp-content/uploads/2020/10/Camiseta-Wanted-Logo-Script-Preto-scaled.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2020/10/Camiseta-Wanted-Logo-Script-Branco-600x600.jpg",
    descricao: "Camiseta básica preta",
    preço: 99.90,
    colecao: "Premium"
},
{
    id: "6",
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "GG",
    cor: "Preto",
    url:  "https://wantedind.com/wp-content/uploads/2022/09/camiseta-wanted-wntj-preto-frente-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/09/artigo-final-7-600x800.jpg",
    descricao: "Camiseta básica preta",
    preço: 99.90,
    colecao: "Premium"
},
{
    id: "7",
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "GG",
    cor: "Preto",
    url:  "https://wantedind.com/wp-content/uploads/2022/09/camiseta-wanted-veneno-puro-preto-600x600.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/09/artigo-final-42-600x800.jpg",
    descricao: "Camiseta básica preta",
    preço: 49.90,
    colecao: "Basics"
},
{
    id: "8",
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "GG",
    cor: "Preto",
    url:  "https://wantedind.com/wp-content/uploads/2020/08/japan-hustler-preta-1-600x600.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2020/08/japan-hustler-branca-1-600x600.jpg",
    descricao: "Camiseta básica preta",
    preço: 49.90,
    colecao: "Basics"
},
{
    id: "9",
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "GG",
    cor: "Preto",
    url:  "https://wantedind.com/wp-content/uploads/2020/12/camiseta-wanted-wntd-logo-rosa-preto-1-600x600.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2020/12/camiseta-wanted-wntd-logo-rosa-branco-1-600x600.jpg",
    descricao: "Camiseta básica preta",
    preço: 49.90,
    colecao: "Basics"
},
]

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
height: 200px;
display: flex;
flex-direction: column;
margin-top: 30px;
`
const ImagemProduto = styled.img`
cursor: pointer;
background-color: white;
position: relative;

&:hover{
    animation: anime 2s ease both;
    @keyframes anime {
        from{
            opacity: 1
        } 
        to{
            opacity: 0;
        }
    }
}
`

const SegundaImagem = styled.img`
width: 200px;
height :200px;
position: absolute;
z-index: -1;
background-color: white;
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

const Moletons = () => {

    const {sacola, setSacola} = useContext(CarrinhoContext)

    const add = (indice) =>{
         setSacola([...sacola, indice])
         console.log(sacola)
    }

    return (
        <div>
            <Containergeral>
                <Nav>
                    <Sidebar/>
                </Nav>
                <Container>
                    {data.map((indice)=>{

                        return(          
                        <ContainerProduto>
                            <Produto>
                                <ImagemProduto src={indice.url}/>
                                <SegundaImagem src={indice.urlSubImage}/> 
                            </Produto>
                            <Colecao>{indice.colecao}</Colecao>
                            <PreçoProduto>{indice.preço.toFixed(2)} R$</PreçoProduto>
                            <ContainerBotoes>
                                <Adcionar onClick={() => {                          
                                    add(indice)
                                }} src="./img/add.png"/>
                                <Favoritar src="./img/hear-empty.png"/>
                            </ContainerBotoes>
                        </ContainerProduto>
                        )       
                    })}
                        <Footer/>
                </Container>    
            </Containergeral>

        </div>
    );
}
 
export default Moletons;