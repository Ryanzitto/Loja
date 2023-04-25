import React from "react";
import Sidebar from "../components/Sidebar";
import styled from 'styled-components'
import Carousel from "../components/Carousel";
import Tags from "../components/Tags";
import Footer from "../components/Footer";
import MaisVendidos from "../components/MaisVendidos"
import BannerOutLet from "../components/BannerOutLet";
import Checkout from "./CheckoutRoute";

import { useState } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { useContext } from "react";

const maisVendidos = [
  {
  id: 16,
  url:  "https://dillysports.vteximg.com.br/arquivos/ids/175503-1000-1000/350015_23-1.jpg?v=638049830862630000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/160589-1000-1000/350015_23-2.jpg?v=637874537716200000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
  preço: 139.90,
  colecao: "Sneackers00",
  fav: false,
},
{
  id: 17,
  url:  "https://dillysports.vteximg.com.br/arquivos/ids/170784-1000-1000/THUMB_350015_26_1000x800.jpg?v=637987841174800000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/170676-1000-1000/350015_26-2.jpg?v=637987829955570000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
  preço: 139.90,
  colecao: "Sneackers00",

  fav: false,
},
{
  id: 18,
  url:  "https://dillysports.vteximg.com.br/arquivos/ids/171998-1000-1000/THUMB_0002_350001_69_1.jpg?v=637994607636170000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/171921-1000-1000/350001_69-2.jpg?v=637994549779630000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
  preço: 139.90,
  colecao: "Sneackers00",
  fav: false,
},
]

const mais_vendidos_variacoes = [
  {
    id: 16,
    url:  "",
    preço: 99.90,
    colecao: "Sneackers00",
    fav: false,
    tipo: "Tenis",
    nome: "Tenis Ous",
    tamanho: "P",
    cor: "Preto"
  },
  {
    id: 17,
    url:  "",
    preço: 99.90,
    colecao: "Sneackers00",
    fav: false,
    tipo: "Tenis",
    nome: "Tenis Ous",
    tamanho: "M",
    cor: "Preto"
  },
  {
    id: 18,
    url:  "",
    preço: 99.90,
    colecao: "Sneackers00",
    fav: false,
    tipo: "Tenis",
    nome: "Tenis Ous",
    tamanho: "G",
    cor: "Preto"
  },
  {
    id: 19,
    url:  "",
    preço: 99.90,
    colecao: "Sneackers00",
    fav: false,
    tipo: "Tenis",
    nome: "Tenis Ous",
    tamanho: "P",
    cor: "Branco"
  },
  {
    id: 20,
    url:  "",
    preço: 99.90,
    colecao: "Sneackers00",
    fav: false,
    tipo: "Tenis",
    nome: "Tenis Ous",
    tamanho: "M",
    cor: "Branco"
  },
  {
    id: 21,
    url:  "",
    preço: 99.90,
    colecao: "Sneackers00",
    fav: false,
    tipo: "Tenis",
    nome: "Tenis Ous",
    tamanho: "G",
    cor: "Branco"
  },

]


const outLet = [
  {
      tipo: "Camiseta",
      nome: "Camisa Wanted",
      tamanho: "GG",
      cor: "Branco",
      url:  "https://wantedind.com/wp-content/uploads/2022/09/camiseta-wanted-grillz-preto-900x900.jpg",
      descricao: "Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
      preço: 97.90,
      bruto: 139.90,
      colecao: "Premium",
      id: 1,
      fav: false,
  },
  {
      tipo: "camiseta",
      nome: "Camiseta Wanted",
      tamanho: "GG",
      cor: "Preto",
      url:  "https://wantedind.com/wp-content/uploads/2020/08/logo-pixo-laranja-900x900.jpg",
      descricao: "Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
      preço: 66.50,
      bruto: 94.90,
      colecao: "Premium",
      id: 2,
      fav: false,
  },
  {
      tipo: "Camiseta",
      nome: "Camiseta Wanted",
      url:  "https://wantedind.com/wp-content/uploads/2022/03/camiseta-wanted-bomb14-preto-900x900.jpg",
      descricao: "Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
      preço: 51.90,
      bruto: 74.90,
      colecao: "Basics",
      cor: "Azul",
      tamanho: "P",
      id: 3,
      fav: false,
  },
  {
      tipo: "camiseta",
      nome: "Camiseta Wanted",
      tamanho: "GG",
      cor: "Preto",
      url:  "https://wantedind.com/wp-content/uploads/2021/05/still-camiseta-premium-offwhite1-900x900.jpg",
      descricao: "Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
      preço: 62.90,
      bruto: 89.90,
      colecao: "Basics",
      id: 4,
      fav: false,
  },
  {
    tipo: "boné",
    nome: "Boné Wanted",
    url:  "https://wantedind.com/wp-content/uploads/2022/12/FIVE-BONE-AZUL-ALTERADO-900x900.png",
    descricao: "Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 74.90,
    bruto: 52.43,
    colecao: "Cap00",
    cor: "Azul",
    tamanho: "P",
    id: "30",
    fav: false,
},
]

const imagensCarrosel = [
  "https://wantedind.com/wp-content/uploads/2023/03/BANNER-2-1.png",
  "https://wantedind.com/wp-content/uploads/2023/03/BANNER-DROP-SECRETO-1.png",
  "https://wantedind.com/wp-content/uploads/2023/03/BANNER-4-1.png",
  "https://wantedind.com/wp-content/uploads/2023/03/BANNER-5-1.png",
  "https://wantedind.com/wp-content/uploads/2023/03/BANNER-1-1-1.png",
  "https://wantedind.com/wp-content/uploads/2023/02/LANÇAMENTO-CORRERIA-2.png",
]

const ContainerGeral = styled.div`
width: 100vw;
height: 100vh;
display: flex;
overflow-x: hidden;

::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; 
}
::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 5px;
}
@media only screen and (max-width: 1000px) {
  flex-direction: column;
}
`
const Nav = styled.div`
width: 20vw;
height:100vh;
position: relative;

@media only screen and (max-width: 1000px) {
  width: 0;
  height: 0;
}
`
const Body = styled.div`
width: 80vw;
height: fit-content;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
@media only screen and (max-width: 1000px) {
  width: 100vw;
}
@media only screen and (min-width: 1550px) {
  height: 2100px;
}
`
const FooterContainer = styled.div`
width: 100%;
`

const Home = () => {

  const {checkoutEstado} = useContext(CarrinhoContext)


 return (
    <ContainerGeral>
      <Nav>
          <Sidebar/>
      </Nav>
        <Body>
        <Carousel images={imagensCarrosel}/>
        <Tags/>
        <MaisVendidos variacoes={mais_vendidos_variacoes} data={maisVendidos}/>
        <BannerOutLet/>     
        <FooterContainer>
            <Footer/>
        </FooterContainer>                
        </Body>
    </ContainerGeral>          
    );
}
 
export default Home;