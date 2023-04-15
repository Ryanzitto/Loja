import React from "react";
import Sidebar from "../components/Sidebar";
import styled from 'styled-components'
import Carousel from "../components/Carousel";
import Tags from "../components/Tags";
import Footer from "../components/Footer";
import MaisVendidos from "../components/MaisVendidos"
import BannerOutLet from "../components/BannerOutLet";
import Outlet from "../components/Outlet";

const outLet = [
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
      fav: false,
  },
  {
      tipo: "Camiseta",
      nome: "Camisa Wanted",
      tamanho: "GG",
      cor: "Branco",
      url:  "https://wantedind.com/wp-content/uploads/2022/09/camiseta-wanted-grillz-preto-900x900.jpg",
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
      descricao: "Camiseta básica preta",
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
      descricao: "Boné five panel",
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
      descricao: "Camiseta básica preta",
      preço: 62.90,
      bruto: 89.90,
      colecao: "Basics",
      id: 4,
      fav: false,
  },
]

const maisVendidos = [
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
  fav: false,
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
  fav: false,
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
  fav: false,
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
  fav: false,
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
  fav: false,
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
  fav: false,
},
{
  tipo: "boné",
  nome: "Boné Wanted",
  url:  "https://wantedind.com/wp-content/uploads/2022/12/BONE-PRETO-ALTERADO-1-900x900.png",
  descricao: "Boné five panel",
  preço: 74.90,
  colecao: "Cap00",
  id: 6,
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
height: 2300px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
@media only screen and (max-width: 1000px) {
  width: 100vw;
}
@media only screen and (min-width: 1550px) {
  height: 3050px;
}
`
const FooterContainer = styled.div`
width: 100%;
`

const Home = () => {
  
 return (
    <ContainerGeral>
      <Nav>
          <Sidebar/>
      </Nav>
        <Body>
            <Carousel images={imagensCarrosel}/>
        <Tags/>
        <MaisVendidos data={maisVendidos}/>
        <BannerOutLet/>     
        <Outlet data={outLet}/>
        <FooterContainer>
            <Footer/>
        </FooterContainer>               
        </Body>
    </ContainerGeral>          
    );
}
 
export default Home;