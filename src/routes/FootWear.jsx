import React from "react";
import Sidebar from "../components/Sidebar";
import styled from 'styled-components'
import Footer from "../components/Footer";

import { useContext } from 'react'
import { useState } from 'react'
import { CarrinhoContext } from '../context/CarrinhoContext';

const data = [{
    tipo: "Tênis",
    nome: "Ous",
    tamanho: "40",
    cor: "Azul/Amarelo",
    url:  "https://dillysports.vteximg.com.br/arquivos/ids/175503-1000-1000/350015_23-1.jpg?v=638049830862630000",
    urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/160589-1000-1000/350015_23-2.jpg?v=637874537716200000",
    descricao: "Tenis bonito pro pé",
    preço: 139.90,
    colecao: "Sneackers00"
},
{
    tipo: "Tênis",
    nome: "Ous",
    tamanho: "40",
    cor: "Branco/Azul",
    url:  "https://dillysports.vteximg.com.br/arquivos/ids/170784-1000-1000/THUMB_350015_26_1000x800.jpg?v=637987841174800000",
    urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/170676-1000-1000/350015_26-2.jpg?v=637987829955570000",
    descricao: "Tenis bonito pro pé",
    preço: 139.90,
    colecao: "Sneackers00"
},
{
    tipo: "Tênis",
    nome: "Ous",
    tamanho: "40",
    cor: "Branco",
    url:  "https://dillysports.vteximg.com.br/arquivos/ids/171998-1000-1000/THUMB_0002_350001_69_1.jpg?v=637994607636170000",
    urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/171921-1000-1000/350001_69-2.jpg?v=637994549779630000",
    descricao: "Tenis bonito pro pé",
    preço: 139.90,
    colecao: "Sneackers00"
},
{
    tipo: "Tênis",
    nome: "Ous",
    tamanho: "40",
    cor: "Marrom",
    url:  "https://dillysports.vteximg.com.br/arquivos/ids/178975-1000-1000/gomes_whisky_essencial_lateral.jpg?v=638132979341130000",
    urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/178976-1000-1000/gomes_whisky_essencial_superior.jpg?v=638132979378170000",
    descricao: "Tenis bonito pro pé",
    preço: 139.90,
    promo: 97.93,
    colecao: "Sneackers00"
},
{
    tipo: "Tênis",
    nome: "Ous",
    tamanho: "40",
    cor: "Preto/Azul",
    url:  "https://dillysports.vteximg.com.br/arquivos/ids/172073-1000-1000/THUMB_0003_350001_70_1.jpg?v=637999828278730000",
    urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/171542-1000-1000/350001_70-3.jpg?v=637992963718930000",
    descricao: "Tenis bonito pro pé",
    preço: 139.90,
    colecao: "Sneackers00"
},
{
    tipo: "Tênis",
    nome: "Ous",
    tamanho: "40",
    cor: "Branco/Azul",
    url:  "https://dillysports.vteximg.com.br/arquivos/ids/171939-1000-1000/THUMB_0003_350001_67_1.jpg?v=637994551021800000",
    urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/171875-1000-1000/350001_67-3.jpg?v=637994546877430000",
    descricao: "Tenis bonito pro pé",
    preço: 139.90,
    colecao: "Sneackers00"
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
    colecao: "Emigrante"
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
    colecao: "Emigrante"
},
{
    tipo: "Tênis",
    nome: "Ous",
    tamanho: "40",
    cor: "Preto;Cinzas",
    url:  "https://dillysports.vteximg.com.br/arquivos/ids/166808-1000-1000/350007_25-1.jpg?v=637956434964770000",
    urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/166809-1000-1000/350007_25-2.jpg?v=637956435005100000",
    descricao: "Tenis bonito pro pé",
    preço: 139.90,
    colecao: "Emigrante"
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

const Nav = styled.div`
width: 18vw;
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
    margin-left: 50px;
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
gap: 10px;
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
margin-left: 50px;
`

const Moletons = () => {
  
    const {sacola, setSacola} = useContext(CarrinhoContext)

    const add = (indice) =>{
         setSacola([...sacola, indice])
         console.log(sacola)
    }
    
    const [source, setSource] = useState('./img/hear-empty.png')

    const toggle = () => {
        if (source === "./img/hear-empty.png"){
            setSource('./img/heart-full.png')
        }
        else {setSource('./img/hear-empty.png')}
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
                                <Favoritar onClick={toggle} src={source}/>
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