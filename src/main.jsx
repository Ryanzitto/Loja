import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/Home.jsx'
import Camisas from './routes/Camisas'
import FootWear from './routes/FootWear'
import HeadWear from './routes/HeadWear'
import Bermudas from './routes/Bermudas'
import Checkout from './routes/CheckoutRoute'
import Perfil from './routes/Perfil'

import { CarrinhoProvider } from './context/CarrinhoContext'
import { FavoritoProvider } from './context/FavoritosContext'
import { HistoricoContext, HistoricoProvider } from './context/HistoricoContext'

import Favoritos from './components/Favoritos'






const camisas = [
  {
    id: 1,
    url:  "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-frente-2-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-costas-600x600.jpg",
    descricao: "Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 99.90,
    colecao: "Premium",
    fav: false,
  },
  {
    id: 2,
    url:  "https://wantedind.com/wp-content/uploads/2022/04/camiseta-wanted-intern-preto-frente-1-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/04/artigo-4.22-LB-5-600x600.jpg",
    descricao: "Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 99.90,
    colecao: "Premium",
    fav: false,
    },
    {
    id: 3,
    url:  "https://wantedind.com/wp-content/uploads/2022/04/camiseta-wanted-dripper-logo-branco-1-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/04/artigo-4.22-LB-1-scaled.jpg",
    descricao: "Camiseta linha 'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 99.90,
    colecao: "Premium",
    fav: false,
    },
  {
    id: 4,
    url:  "https://wantedind.com/wp-content/uploads/2020/11/camiseta-focus-preto-frente3-600x600.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2020/11/focus-2-de-3-scaled.jpg",
    descricao: "Camiseta linha 'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 99.90,
    colecao: "Premium",
    fav: false,
  },
  {
  id: 5,
  url:  "https://wantedind.com/wp-content/uploads/2020/10/Camiseta-Wanted-Logo-Script-Preto-scaled.jpg",
  urlSubImage: "https://wantedind.com/wp-content/uploads/2020/10/Camiseta-Wanted-Logo-Script-Branco-600x600.jpg",
  descricao: "Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
  preço: 99.90,
  colecao: "Premium",
  fav: false,
  },
  {
    id: 6,
    url:  "https://wantedind.com/wp-content/uploads/2022/09/camiseta-wanted-wntj-preto-frente-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/09/artigo-final-7-600x800.jpg",
    descricao: "Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 99.90,
    colecao: "Premium",
    fav: false,
  },
  {
    id: 7,
    url:  "https://wantedind.com/wp-content/uploads/2022/09/camiseta-wanted-veneno-puro-preto-600x600.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/09/artigo-final-42-600x800.jpg",
    descricao: "Camiseta linha  'BASICS', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 99.90,
    colecao: "Basics",
    fav: false,
  },
  {
    id: 8,
    url:  "https://wantedind.com/wp-content/uploads/2020/08/japan-hustler-preta-1-600x600.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2020/08/japan-hustler-branca-1-600x600.jpg",
    descricao: "Camiseta linha 'BASICS', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 99.90,
    colecao: "Basics",
    fav: false,
  },
  {
    id: 9,
    url:  "https://wantedind.com/wp-content/uploads/2020/12/camiseta-wanted-wntd-logo-rosa-preto-1-600x600.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2020/12/camiseta-wanted-wntd-logo-rosa-branco-1-600x600.jpg",
    descricao: "Camiseta linha 'BASICS', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
    preço: 99.90,
    colecao: "Basics",
    fav: false,
},
]

const camisa_variacoes = [
  {
    id: 1,
    url:  "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-frente-2-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-costas-600x600.jpg",
    preço: 99.90,
    colecao: "Premium",
    fav: false,
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "P",
    cor: "Preto"
  },
  {
    id: 2,
    url:  "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-frente-2-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-costas-600x600.jpg",
    preço: 99.90,
    colecao: "Premium",
    fav: false,
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "M",
    cor: "Preto"
  },
  {
    id: 3,
    url:  "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-frente-2-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-costas-600x600.jpg",
    preço: 99.90,
    colecao: "Premium",
    fav: false,
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "G",
    cor: "Preto"
  },
  {
    id: 4,
    url:  "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-frente-2-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-costas-600x600.jpg",
    preço: 99.90,
    colecao: "Premium",
    fav: false,
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "P",
    cor: "Branco"
  },
  {
    id: 5,
    url:  "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-frente-2-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-costas-600x600.jpg",
    preço: 99.90,
    colecao: "Premium",
    fav: false,
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "M",
    cor: "Branco"
  },
  {
    id: 6,
    url:  "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-frente-2-900x900.jpg",
    urlSubImage: "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-costas-600x600.jpg",
    preço: 99.90,
    colecao: "Premium",
    fav: false,
    tipo: "camiseta",
    nome: "Camiseta Wanted",
    tamanho: "G",
    cor: "Branco"
  },
]

const bermudas = [{
  id: 10,
  url:  "https://wantedind.com/wp-content/uploads/2022/12/BERMUDA-2-900x900.jpg",
  descricao: "Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
  preço: 109.90,
  colecao: "Berm00",
  fav: false,
},
{
  id: 11,
  url:  "https://wantedind.com/wp-content/uploads/2022/12/BERMUDA-5-900x900.jpg",
  descricao: "Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
  preço: 109.90,
  colecao: "Berm00",
  fav: false,
},
{
  id: 12,
  url:  "https://wantedind.com/wp-content/uploads/2022/12/BERMUDA-4-900x900.jpg",
  descricao: "Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
  preço: 109.90,
  colecao: "Berm00",
  fav: false,
},
{
  id: 13,
  url:  "https://wantedind.com/wp-content/uploads/2021/05/still-bermuda-preto-900x900.jpg",
  descricao: "Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
  preço: 109.90,
  colecao: "Berm00",
  fav: false,
},
{
  id: 14,
  url:  "https://wantedind.com/wp-content/uploads/2020/08/Bermuda-Moletom-Wanted-Wu-Tang-Preto-900x900.jpg",
  descricao: "Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
  preço: 109.90,
  colecao: "Berm00",
  fav: false,
},
{
  id: 15,
  url:  "https://wantedind.com/wp-content/uploads/2020/08/Bermuda-Moletom-Wanted-In-God-We-Trust-Cinza-900x900.jpg",
  descricao: "Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
  preço: 109.90,
  colecao: "Berm00",
  fav: false,
},
]

const bermudas_variacoes = [
  {
    id: 10,
    url:  "",
    preço: 109.90,
    colecao: "Berm00",
    fav: false,
    tipo: "Bermuda",
    nome: "Bermuda Wanted",
    tamanho: "P",
    cor: "Preto"
  },
  {
    id: 11,
    url:  "",
    preço: 109.90,
    colecao: "Berm00",
    fav: false,
    tipo: "Bermuda",
    nome: "Bermuda Wanted",
    tamanho: "M",
    cor: "Preto"
  },
  {
    id: 12,
    url:  "",
    preço: 109.90,
    colecao: "Berm00",
    fav: false,
    tipo: "Bermuda",
    nome: "Bermuda Wanted",
    tamanho: "G",
    cor: "Preto"
  },
  {
    id: 13,
    url:  "",
    preço: 109.90,
    colecao: "Berm00",
    fav: false,
    tipo: "Bermuda",
    nome: "Bermuda Wanted",
    tamanho: "P",
    cor: "Branco"
  },
  {
    id: 14,
    url:  "",
    preço: 109.90,
    colecao: "Berm00",
    fav: false,
    tipo: "Bermuda",
    nome: "Bermuda Wanted",
    tamanho: "M",
    cor: "Branco"
  },
  {
    id: 15,
    url:  "",
    preço: 109.90,
    colecao: "Berm00",
    fav: false,
    tipo: "Bermuda",
    nome: "Bermuda Wanted",
    tamanho: "G",
    cor: "Branco"
  },
]

const tenis = [{
  id: 16,
  url:  "https://dillysports.vteximg.com.br/arquivos/ids/175503-1000-1000/350015_23-1.jpg?v=638049830862630000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/160589-1000-1000/350015_23-2.jpg?v=637874537716200000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
  preço: 139.90,
  colecao: "Sneackers00",
  fav: false,
  tipo: 'tenis',
},
{
  id: 17,
  url:  "https://dillysports.vteximg.com.br/arquivos/ids/170784-1000-1000/THUMB_350015_26_1000x800.jpg?v=637987841174800000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/170676-1000-1000/350015_26-2.jpg?v=637987829955570000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
  preço: 139.90,
  colecao: "Sneackers00",
  fav: false,
  tipo: 'tenis',
},
{
  id: 18,
  url:  "https://dillysports.vteximg.com.br/arquivos/ids/171998-1000-1000/THUMB_0002_350001_69_1.jpg?v=637994607636170000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/171921-1000-1000/350001_69-2.jpg?v=637994549779630000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
  preço: 139.90,
  colecao: "Sneackers00",
  fav: false,
  tipo: 'tenis',
},
{
  id: 19,
  url:  "https://dillysports.vteximg.com.br/arquivos/ids/178975-1000-1000/gomes_whisky_essencial_lateral.jpg?v=638132979341130000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/178976-1000-1000/gomes_whisky_essencial_superior.jpg?v=638132979378170000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
  preço: 139.90,
  colecao: "Sneackers00",
  fav: false,
  tipo: 'tenis',
},
{
  id: 20,
  url:  "https://dillysports.vteximg.com.br/arquivos/ids/172073-1000-1000/THUMB_0003_350001_70_1.jpg?v=637999828278730000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/171542-1000-1000/350001_70-3.jpg?v=637992963718930000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
  preço: 139.90,
  colecao: "Sneackers00",
  fav: false,
  tipo: 'tenis',
},
{
  id: 21,
  url:  "https://dillysports.vteximg.com.br/arquivos/ids/171939-1000-1000/THUMB_0003_350001_67_1.jpg?v=637994551021800000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/171875-1000-1000/350001_67-3.jpg?v=637994546877430000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
  preço: 139.90,
  colecao: "Sneackers00",
  fav: false,
  tipo: 'tenis',
},
{
  id: 22,
  url:  "https://dillysports.vteximg.com.br/arquivos/ids/172372-1000-1000/THUMB_350001_44_IMIGRANTE-PRT-REFLETIVO-CHICLE-ESSENCIAL.jpg?v=638004051639500000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/171722-1000-1000/350001_44-3.jpg?v=637992972757330000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
  preço: 139.90,
  colecao: "Emigrante",
  fav: false,
  tipo: 'tenis',
},
{
  id: 23,
  url:  "https://dillysports.vteximg.com.br/arquivos/ids/178494-1000-1000/imigrante_branco_2_oe_thumb.jpg?v=638128463015830000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/176100-1000-1000/350001_64-2.jpg?v=638070503036230000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
  preço: 139.90,
  colecao: "Emigrante",
  fav: false,
  tipo: 'tenis',
},
{
  id: 24,
  url:  "https://dillysports.vteximg.com.br/arquivos/ids/166808-1000-1000/350007_25-1.jpg?v=637956434964770000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/166809-1000-1000/350007_25-2.jpg?v=637956435005100000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",
  preço: 139.90,
  colecao: "Emigrante",
  fav: false,
  tipo: 'tenis',
},
]

const tenis_variacoes = [
  {
    id: 16,
    url:  "",
    preço: 139.90,
    colecao: "Sneackers00",
    fav: false,
    tipo: "Tenis",
    nome: "Tenis Ous",
    tamanho: 39,
  },
  {
    id: 17,
    url:  "",
    preço: 139.90,
    colecao: "Sneackers00",
    fav: false,
    tipo: "Tenis",
    nome: "Tenis Ous",
    tamanho: 40,
  },
  {
    id: 18,
    url:  "",
    preço: 139.90,
    colecao: "Sneackers00",
    fav: false,
    tipo: "Tenis",
    nome: "Tenis Ous",
    tamanho: 41,
  },
]

const caps = [{
  id: 25,
  url:  "https://wantedind.com/wp-content/uploads/2022/12/BONE-PRETO-ALTERADO-1-900x900.png",
  descricao: "Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
  preço: 74.90,
  colecao: "Cap00",
  fav: false,
},
{
  id: 26,
  url:  "https://wantedind.com/wp-content/uploads/2022/12/BONE-BRANCO-ALTERADO-900x900.png",
  descricao: "Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
  preço: 74.90,
  colecao: "Cap00",
  fav: false,
},
{
  id: 27,
  url:  "https://wantedind.com/wp-content/uploads/2022/12/BONE-BEGE-ALTERADO-900x900.png",
  descricao: "Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
  preço: 74.90,
  colecao: "Cap00",
  fav: false,
},
{
  id: 28,
  url:  "https://wantedind.com/wp-content/uploads/2022/12/FIVE-BONE-PRETO-ALTERADO-900x900.png",
  descricao: "Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
  preço: 74.90,
  colecao: "Cap00",
  fav: false,
},
{
  id: 29,
  url:  "https://wantedind.com/wp-content/uploads/2022/12/FIVE-4-900x900.png",
  descricao: "Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
  preço: 74.90,
  colecao: "Cap00",
  fav: false,
},
{
  id: 30,
  url:  "https://wantedind.com/wp-content/uploads/2022/12/FIVE-BONE-AZUL-ALTERADO-900x900.png",
  descricao: "Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",
  preço: 74.90,
  colecao: "Cap00",
  fav: false,
},
]

const caps_variacoes = [
  {
    id: 25,
    url:  "",
    preço: 74.90,
    colecao: "Cap00",
    fav: false,
    tipo: "Boné",
    nome: "Boné Wanted",
    tamanho: "P",
    cor: "Preto"
  },
  {
    id: 26,
    url:  "",
    preço: 74.90,
    colecao: "Cap00",
    fav: false,
    tipo: "Boné",
    nome: "Boné Wanted",
    tamanho: "M",
    cor: "Preto"
  },
  {
    id: 27,
    url:  "",
    preço: 74.90,
    colecao: "Cap00",
    fav: false,
    tipo: "Boné",
    nome: "Boné Wanted",
    tamanho: "G",
    cor: "Preto"
  },
  {
    id: 28,
    url:  "",
    preço: 74.90,
    colecao: "Cap00",
    fav: false,
    tipo: "Boné",
    nome: "Boné Wanted",
    tamanho: "P",
    cor: "Branco"
  },
  {
    id: 29,
    url:  "",
    preço: 74.90,
    colecao: "Cap00",
    fav: false,
    tipo: "Boné",
    nome: "Boné Wanted",
    tamanho: "M",
    cor: "Branco"
  },
  {
    id: 29,
    url:  "",
    preço: 74.90,
    colecao: "Cap00",
    fav: false,
    tipo: "Boné",
    nome: "Boné Wanted",
    tamanho: "G",
    cor: "Branco"
  },

]



const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {path: "Home", element: <Home/>},
      {path: "Camisas", element: <Camisas data={camisas} variacoes={camisa_variacoes}/>},
      {path: "FootWear", element: <FootWear data={tenis} variacoes={tenis_variacoes}/>},
      {path: "HeadWear", element: <HeadWear data={caps} variacoes={caps_variacoes}/>},
      {path: "Bermudas", element: <Bermudas data={bermudas} variacoes={bermudas_variacoes}/>},
      {path: "Favorites", element: <Favoritos/>},
      {path: "Checkout", element: <Checkout/>},
      {path: "Perfil", element: <Perfil/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CarrinhoProvider>
        <FavoritoProvider>
          <HistoricoProvider>
            <RouterProvider router={router}/>
          </HistoricoProvider>
        </FavoritoProvider>
      </CarrinhoProvider>
  </React.StrictMode>,
)