import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.jsx";
import Vestuario from "./routes/Vestuario";
import FootWear from "./routes/FootWear";
import HeadWear from "./routes/HeadWear";
import ActionFigure from "./routes/ActionFigure";
import Checkout from "./routes/CheckoutRoute";
import Perfil from "./routes/Perfil";
import CadastroLogin from "./routes/CadastroLogin";
import Produto from "./routes/Produto";
import ProdutoUnico from "./routes/ProdutoUnico";
import { FavoritoProvider } from "./context/FavoritosContext";
import { DetalhesProvider } from "./context/DetalhesContext";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import Favoritos from "./components/Favoritos";

const Roupas = [
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
];

const ActionFigures = [
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

const Acessorios = [
  {
    id: 42,
    url: "https://down-br.img.susercontent.com/file/e1a0a8ce0dea9aa9ebb2ef32f38acb2a",
    descricao:
      "Quadro Decorativo, para mostrar que você é fã de verdade do seu anime favorito, Tamanho único de 60x60 acabamento em madeira pau brasil com verniz feito a partir de gordura de arara azul para maior durabilidade.",
    preço: 10.49,
    colecao: "Deco-Nerd",
    fav: false,
    tipo: "Quadro Anime",
    nome: "Quadro Decorativo",
    variacoes: [
      {
        url: "https://down-br.img.susercontent.com/file/e1a0a8ce0dea9aa9ebb2ef32f38acb2a",
        nome: "luffy",
      },
      {
        url: "https://down-br.img.susercontent.com/file/e1a0a8ce0dea9aa9ebb2ef32f38acb2a",
        nome: "luffy",
      },
      {
        url: "https://down-br.img.susercontent.com/file/e1a0a8ce0dea9aa9ebb2ef32f38acb2a",
        nome: "luffy",
      },
      {
        url: "https://down-br.img.susercontent.com/file/e1a0a8ce0dea9aa9ebb2ef32f38acb2a",
        nome: "luffy",
      },
    ],
  },
];

const caps = [
  {
    id: 24,
    url: "https://wantedind.com/wp-content/uploads/2022/12/BONE-PRETO-ALTERADO-1-900x900.png",
    descricao:
      "Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 74.9,
    colecao: "Cap00",
    fav: false,
    nome: "Boné SIKE",
    tipo: "Boné",
    CoresDisp: ["Preto", "Branco"],
    tamanhosDisp: ["P", "M", "G"],
  },
  {
    id: 25,
    url: "https://wantedind.com/wp-content/uploads/2022/12/BONE-BRANCO-ALTERADO-900x900.png",
    descricao:
      "Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 74.9,
    colecao: "Cap00",
    fav: false,
    nome: "Boné SIKE",
    tipo: "Boné",
    CoresDisp: ["Preto", "Branco"],
    tamanhosDisp: ["P", "M", "G"],
  },
  {
    id: 26,
    url: "https://wantedind.com/wp-content/uploads/2022/12/BONE-BEGE-ALTERADO-900x900.png",
    descricao:
      "Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 74.9,
    colecao: "Cap00",
    fav: false,
    nome: "Boné SIKE",
    tipo: "Boné",
    CoresDisp: ["Preto", "Branco"],
    tamanhosDisp: ["P", "M", "G"],
  },
  {
    id: 27,
    url: "https://wantedind.com/wp-content/uploads/2022/12/FIVE-BONE-PRETO-ALTERADO-900x900.png",
    descricao:
      "Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 74.9,
    colecao: "Cap00",
    fav: false,
    nome: "Boné SIKE",
    tipo: "Boné",
    CoresDisp: ["Preto", "Branco"],
    tamanhosDisp: ["P", "M", "G"],
  },
  {
    id: 28,
    url: "https://wantedind.com/wp-content/uploads/2022/12/FIVE-4-900x900.png",
    descricao:
      "Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 74.9,
    colecao: "Cap00",
    fav: false,
    nome: "Boné SIKE",
    tipo: "Boné",
    CoresDisp: ["Preto", "Branco"],
    tamanhosDisp: ["P", "M", "G"],
  },
  {
    id: 29,
    url: "https://wantedind.com/wp-content/uploads/2022/12/FIVE-BONE-AZUL-ALTERADO-900x900.png",
    descricao:
      "Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 74.9,
    colecao: "Cap00",
    fav: false,
    nome: "Boné SIKE",
    tipo: "Boné",
    CoresDisp: ["Preto", "Branco"],
    tamanhosDisp: ["P", "M", "G"],
  },
];

const router = createHashRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "/", element: <Home /> },
      { path: "Vestuario", element: <Vestuario data={Roupas} /> },
      { path: "ActionFigure", element: <ActionFigure data={ActionFigures} /> },
      { path: "Acessorios", element: <FootWear data={Acessorios} /> },
      { path: "HeadWear", element: <HeadWear data={caps} /> },
      { path: "Favorites", element: <Favoritos /> },
      { path: "Checkout", element: <Checkout /> },
      { path: "Perfil", element: <Perfil /> },
      { path: "Register", element: <CadastroLogin /> },
      { path: "Produto/:id", element: <Produto /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FavoritoProvider>
          <DetalhesProvider>
            <RouterProvider router={router} />
          </DetalhesProvider>
        </FavoritoProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
