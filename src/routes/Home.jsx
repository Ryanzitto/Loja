import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import Tags from "../components/Tags";
import Footer from "../components/Footer";
import MaisVendidos from "../components/MaisVendidos";
import BannerOutLet from "../components/BannerOutLet";
import Cards from "../components/Cards";
import axios from "axios";
import Banner from "../components/BannerTeste";
const maisVendidos = [
  {
    id: 16,
    url: "https://dillysports.vteximg.com.br/arquivos/ids/175503-1000-1000/350015_23-1.jpg?v=638049830862630000",
    urlSubImage:
      "https://dillysports.vteximg.com.br/arquivos/ids/160589-1000-1000/350015_23-2.jpg?v=637874537716200000",
    descricao:
      "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
    preço: 139.9,
    colecao: "Sneackers00",
    fav: false,
  },
  {
    id: 17,
    url: "https://dillysports.vteximg.com.br/arquivos/ids/170784-1000-1000/THUMB_350015_26_1000x800.jpg?v=637987841174800000",
    urlSubImage:
      "https://dillysports.vteximg.com.br/arquivos/ids/170676-1000-1000/350015_26-2.jpg?v=637987829955570000",
    descricao:
      "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
    preço: 139.9,
    colecao: "Sneackers00",

    fav: false,
  },
  {
    id: 18,
    url: "https://dillysports.vteximg.com.br/arquivos/ids/171998-1000-1000/THUMB_0002_350001_69_1.jpg?v=637994607636170000",
    urlSubImage:
      "https://dillysports.vteximg.com.br/arquivos/ids/171921-1000-1000/350001_69-2.jpg?v=637994549779630000",
    descricao:
      "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
    preço: 139.9,
    colecao: "Sneackers00",
    fav: false,
  },
];

const imagensCarrosel = [
  "https://wantedind.com/wp-content/uploads/2023/03/BANNER-2-1.png",
  "https://wantedind.com/wp-content/uploads/2023/03/BANNER-DROP-SECRETO-1.png",
  "https://wantedind.com/wp-content/uploads/2023/03/BANNER-4-1.png",
  "https://wantedind.com/wp-content/uploads/2023/03/BANNER-5-1.png",
  "https://wantedind.com/wp-content/uploads/2023/03/BANNER-1-1-1.png",
  "https://wantedind.com/wp-content/uploads/2023/02/LANÇAMENTO-CORRERIA-2.png",
];

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
`;
const Nav = styled.div`
  width: 20vw;
  height: 100vh;
  position: relative;

  @media only screen and (max-width: 1000px) {
    width: 0;
    height: 0;
  }
`;
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
`;
const FooterContainer = styled.div`
  width: 100%;
`;

const Home = () => {
  return (
    <ContainerGeral>
      <Nav>
        <Sidebar />
      </Nav>
      <Body>
        <Carousel images={imagensCarrosel} />
        <Banner />
        <Cards />
        <Tags />
        <MaisVendidos data={maisVendidos} />
        <BannerOutLet />
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Body>
    </ContainerGeral>
  );
};

export default Home;
