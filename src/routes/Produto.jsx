import styled from "styled-components";
import Sidebar from "../components/Sidebar";

import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

import HeaderProduto from "../components/Produto-Components/Header";
import ProdContainer from "../components/Produto-Components/ProdutoContainer";
import ProdPainel from "../components/Produto-Components/ProdPainel";
import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

const ContainerPai = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const ContainerGeral = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`;
const SidebarContainer = styled.div`
  width: 20vw;
  height: 100vh;
  position: relative;

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    width: 100vw;
    height: 20vh;
  }
  @media screen and (max-width: 800px) {
    height: 0;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 1250px) {
    flex-direction: column;
    height: 1200px;
    align-items: center;
  }
  @media screen and (min-width: 1500px) {
    justify-content: center;
    gap: 100px;
  }
`;

const Mid = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MidContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1500px) {
    width: 60%;
  }
`;
const DescSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  padding: 20px;
`;

const DescricaoTitulo = styled.h4`
  width: 100%;
  font-size: 30px;
  letter-spacing: 1px;
  color: #222222eb;
  padding-top: 5px;
  padding-bottom: 5px;
  &:hover {
    animation: animaTexto 1s both;
  }
`;

const DescricaoProduto = styled.p`
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: #222222eb;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SobreMarcaDesc = styled.div`
  width: 100%;
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 0.5px;
  margin-top: 100px;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  padding: 20px;
`;

const SobreTitulo = styled.h4`
  width: 100%;
  font-size: 30px;
  letter-spacing: 1px;
  color: #222222eb;
  padding-top: 5px;
  padding-bottom: 5px;
  &:hover {
    animation: animaTexto 1s both;
  }
`;

const Sobre = styled.p`
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: #222222eb;
`;

const RelacionadosContainer = styled.div`
  border: 1px solid #e2e2e2;
  width: 100%;
  margin-top: 100px;
  border-radius: 3px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProdutosRelacionados = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: start;
  gap: 50px;
  margin-top: 40px;
  margin-bottom: 40px;
`;
const RelacionadosTitulo = styled.h2`
  font-size: 30px;
  letter-spacing: 1px;
  color: #222222eb;
  padding-top: 5px;
  padding-bottom: 5px;
  &:hover {
    animation: animaTexto 1s both;
  }
`;
const ProdRelacionadoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImagemProdRelacionado = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
const PreçoProdRelacionado = styled.p`
  font-size: 16px;
  color: #a840c2;
  font-weight: 600;
`;

const Produto = () => {
  const produtos = [
    {
      id: 0,
      url: "https://cdn.dooca.store/292/products/wjygmn2eco3w1mspolrfevirwjmlhftxj7ba_1600x1600+fill_ffffff.jpg?v=1674861932",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 1,
      url: "https://cdn.dooca.store/292/products/kpnc9nh8mpzfdpfnsopxy8pbfrfj9fafxket_1600x1600+fill_ffffff.jpg?v=1674861504",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 2,
      url: "https://cdn.dooca.store/292/products/ohlwlcut0hgkljtt4kbowa11nyifv5klerfl_1600x1600+fill_ffffff.jpg?v=1674861858",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "G", "GG"],
    },
    {
      id: 3,
      url: "https://cdn.dooca.store/292/products/wcjyo8dlizq3gfbp5jq7wwjat4980nasujrn_1600x1600+fill_ffffff.jpg?v=1673956364",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 4,
      url: "https://cdn.dooca.store/292/products/jvutnvqds5x0uaqiauozpy0eyart8g9f1mnb_1600x1600+fill_ffffff.jpg?v=1666207608",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 5,
      url: "https://cdn.dooca.store/292/products/1f4ij5fjekqwlxybgcfiefdkc8apnfrtyvyg_1600x1600+fill_ffffff.jpg?v=1664549894",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 6,
      url: "https://cdn.dooca.store/292/products/esrth2raa7eunfzrj5zwqdjl7haldd7jjndx_1600x1600+fill_ffffff.jpg?v=1654621229",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "M", "G"],
    },
    {
      id: 7,
      url: "https://cdn.dooca.store/292/products/camiseta-jujutsu-kaisen-sukuna_1600x1600+fill_ffffff.jpg?v=1626373558",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "M"],
    },
    {
      id: 8,
      url: "https://cdn.dooca.store/292/products/camiseta-jujutsu-kaisen_1600x1600+fill_ffffff.jpg?v=1621879674",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 9,
      url: "https://cdn.dooca.store/292/products/camiseta-jojos-bizarre-adventure_1600x1600+fill_ffffff.jpg?v=1615829866",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 10,
      url: "https://cdn.dooca.store/292/products/jujutsu-satoru-aberta_1600x1600+fill_ffffff.jpg?v=1622668013&webp=0",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 11,
      url: "https://cdn.dooca.store/292/products/camiseta-bulbasaur-aberta_1600x1600+fill_ffffff.jpg?v=1592947880",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 12,
      url: "https://cdn.dooca.store/292/products/jrjnt6hvx3jbxln7ms2wis58fvm7qkznw1gd_1600x1600+fill_ffffff.jpg?v=1630685603",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 13,
      url: "https://cdn.dooca.store/292/products/nq6pwkxypqxtkavnirvgojj6y7fh1vsedtzt_1600x1600+fill_ffffff.jpg?v=1630687058",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 14,
      url: "https://cdn.dooca.store/292/products/r2dwvaga66zkiwzmqzvwyrzdi0rknjgnwyh0_1600x1600+fill_ffffff.jpg?v=1633457900",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 99.9,
      colecao: "Anime-01",
      fav: false,
      nome: "Camisa de Anime",
      tipo: "Vestuario",
      subTipo: "Camisa",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 15,
      url: "//cdn.shopify.com/s/files/1/0528/9705/4920/products/5454_1800x1800.png.jpg?v=1667846873",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 149.99,
      colecao: "Frio",
      fav: false,
      nome: "Moletom de Anime",
      tipo: "Vestuario",
      subTipo: "Moletom",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 16,
      url: "//cdn.shopify.com/s/files/1/0528/9705/4920/products/C1_f657d869-e3fe-4be0-806b-a1b75de05cbe_1800x1800.jpg?v=1668801943",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 149.99,
      colecao: "Frio",
      fav: false,
      nome: "Moletom de Anime",
      tipo: "Vestuario",
      subTipo: "Moletom",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 17,
      url: "//cdn.shopify.com/s/files/1/0528/9705/4920/products/52b0dfad756aced8becd0b3044b61681_quot_1800x1800.jpg?v=1625664273",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 149.99,
      colecao: "Frio",
      fav: false,
      nome: "Moletom de Anime",
      tipo: "Vestuario",
      subTipo: "Moletom",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },

    {
      id: 18,
      url: "//cdn.shopify.com/s/files/1/0528/9705/4920/products/B2_b4622e23-634f-4e9a-9d5f-75c41efcb71a_1800x1800.jpg?v=1646320487",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 149.99,
      colecao: "Frio",
      fav: false,
      nome: "Moletom de Anime",
      tipo: "Vestuario",
      subTipo: "Moletom",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 19,
      url: "//cdn.shopify.com/s/files/1/0528/9705/4920/products/Quente-dem-nio-slayer-anime-harajuku-hoodies-homem-mulher-rengoku-kyoujurou-gr-fico-com-capuz-pul.jpg_640x640_8123058c-9217-4d25-b5ca-a49720a88827_1800x1800.jpg?v=1649429632",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 149.99,
      colecao: "Frio",
      fav: false,
      nome: "Moletom de Anime",
      tipo: "Vestuario",
      subTipo: "Moletom",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 20,
      url: "//cdn.shopify.com/s/files/1/0528/9705/4920/products/5c63236ff2e14ec52a147e6420d6eb20_quot_1800x1800.jpg?v=1635174493",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante. ",
      preço: 149.99,
      colecao: "Frio",
      fav: false,
      nome: "Moletom de Anime",
      tipo: "Vestuario",
      subTipo: "Moletom",
      tamanhosDisp: ["P", "M", "G", "GG"],
    },
    {
      id: 21,
      url: "https://cdn.awsli.com.br/600x1000/2526/2526597/produto/188087016/039cae7839.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Anime",
    },
    {
      id: 22,
      url: "https://cdn.awsli.com.br/600x1000/2526/2526597/produto/188117358/7fb75084e3.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Anime",
    },
    {
      id: 23,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/n/e/nezuko_2_1_1.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Anime",
    },
    {
      id: 24,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/k/a/katsuki-min.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Anime",
    },
    {
      id: 25,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/i/z/izuku_midoriya_deku_the_amazing-min.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Anime",
    },
    {
      id: 26,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/t/s/tsunade.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Anime",
    },
    {
      id: 27,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/j/i/jiraiya2.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Anime",
    },
    {
      id: 28,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/n/a/naruto_uzumaki_kurama_1-min.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Anime",
    },
    {
      id: 29,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/p/o/portgas_2-min.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Anime",
    },
    {
      id: 30,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/s/h/shanks_2-min.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Anime",
    },
    {
      id: 31,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/s/h/shanks_-_dxf_the_grandline_children_3-min.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Anime",
    },
    {
      id: 32,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/y/a/yamato-min_1.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Anime",
    },
    {
      id: 33,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/t/h/thor-min_5.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Heroi",
    },
    {
      id: 34,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/i/r/iron_man_mark-min.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Heroi",
    },
    {
      id: 35,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/t/h/thanos-min_4.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Heroi",
    },
    {
      id: 36,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/h/u/hulkgallery_1.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Heroi",
    },
    {
      id: 37,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/f/u/fury.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Heroi",
    },
    {
      id: 38,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/e/s/estatua-captain-america-legacy-replica-iron-studios-03.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Heroi",
    },
    {
      id: 39,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/2/1/212-min_4.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Heroi",
    },
    {
      id: 40,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/d/e/deadpoolsh-min.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Heroi",
    },
    {
      id: 41,
      url: "https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/j/o/joker4-min.jpg",
      descricao:
        "Action figure de personagem de anime ou filme de herói que custa o equivalente a um carro",
      preço: 559.99,
      colecao: "Bonequinho",
      fav: false,
      nome: "Action-Figure",
      tipo: "Action Figure",
      subTipo: "Heroi",
    },
  ];

  const { id } = useParams();

  const produtoAtual = produtos[id];

  const [relacionados, setRelacionados] = useState(
    produtos.filter((item) => item.tipo === produtoAtual.tipo)
  );

  useEffect(() => {
    setRelacionados(relacionados.slice(0, 6));
  }, []);

  console.log(relacionados);
  return (
    <ContainerPai>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <ContainerGeral>
        <HeaderProduto produtoAtual={produtoAtual} />
        <Top>
          <ProdContainer produtoAtual={produtoAtual} id={id} />
          <ProdPainel produtoAtual={produtoAtual} />
        </Top>
        <Mid>
          <MidContainer>
            <DescSection>
              <DescricaoTitulo>Descrição</DescricaoTitulo>
              <DescricaoProduto>{produtoAtual.descricao}</DescricaoProduto>
            </DescSection>
            <SobreMarcaDesc>
              <SobreTitulo>Sobre a SIKE</SobreTitulo>
              <Sobre>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                finibus placerat tempor. Phasellus semper, orci feugiat
                tincidunt gravida, nunc quam ullamcorper tortor, non consectetur
                neque mauris id diam. Vivamus tristique vestibulum eros ut
                dictum. Vivamus rutrum neque maximus augue consequat facilisis.
                Curabitur varius mauris ac arcu euismod semper. Nullam luctus
                vel dui ut cursus. In mattis, odio sed interdum maximus, leo
                dolor posuere erat, sit amet cursus turpis diam vitae ante.
              </Sobre>
            </SobreMarcaDesc>
            <RelacionadosContainer>
              <RelacionadosTitulo>Produtos relacionados</RelacionadosTitulo>
              <ProdutosRelacionados>
                {relacionados.map((item) => (
                  <ProdRelacionadoContainer key={item.id}>
                    <Link to={`/Produto/${item.id}`} target="_blank">
                      <ImagemProdRelacionado src={item.url} />
                    </Link>
                    <PreçoProdRelacionado>
                      {item.preço.toFixed(2)} R$
                    </PreçoProdRelacionado>
                  </ProdRelacionadoContainer>
                ))}
              </ProdutosRelacionados>
            </RelacionadosContainer>
          </MidContainer>
        </Mid>
        <Bottom>
          <FooterContainer>
            <Footer primary={true} />
          </FooterContainer>
        </Bottom>
      </ContainerGeral>
    </ContainerPai>
  );
};

export default Produto;
