import { jsxDEV } from "/@id/__x00__react/jsx-dev-runtime";
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=39b97c0d"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=39b97c0d"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import App from "/src/App.jsx";
import "/src/index.css";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=39b97c0d";
import Home from "/src/routes/Home.jsx?t=1681758529111";
import Camisas from "/src/routes/Camisas.jsx?t=1681758529111";
import FootWear from "/src/routes/FootWear.jsx?t=1681758529111";
import HeadWear from "/src/routes/HeadWear.jsx?t=1681758529111";
import Bermudas from "/src/routes/Bermudas.jsx?t=1681758529111";
import { CarrinhoProvider } from "/src/context/CarrinhoContext.jsx";
import { FavoritoProvider } from "/src/context/FavoritosContext.jsx";
import Favoritos from "/src/components/Favoritos.jsx?t=1681758529111";
const camisas = [{
  id: "1",
  tipo: "camiseta",
  nome: "Camiseta Wanted",
  tamanho: "GG",
  cor: "Preto",
  url: "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-frente-2-900x900.jpg",
  urlSubImage: "https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-costas-600x600.jpg",
  descricao: "Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 99.9,
  colecao: "Premium",
  fav: false
}, {
  id: "2",
  tipo: "camiseta",
  nome: "Camiseta Wanted",
  tamanho: "GG",
  cor: "Preto",
  url: "https://wantedind.com/wp-content/uploads/2022/04/camiseta-wanted-intern-preto-frente-1-900x900.jpg",
  urlSubImage: "https://wantedind.com/wp-content/uploads/2022/04/artigo-4.22-LB-5-600x600.jpg",
  descricao: "Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 99.9,
  colecao: "Premium",
  fav: false
}, {
  id: "3",
  tipo: "camiseta",
  nome: "Camiseta Wanted",
  tamanho: "GG",
  cor: "Branca",
  url: "https://wantedind.com/wp-content/uploads/2022/04/camiseta-wanted-dripper-logo-branco-1-900x900.jpg",
  urlSubImage: "https://wantedind.com/wp-content/uploads/2022/04/artigo-4.22-LB-1-scaled.jpg",
  descricao: "Camiseta linha 'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 99.9,
  colecao: "Premium",
  fav: false
}, {
  id: "4",
  tipo: "camiseta",
  nome: "Camiseta Wanted",
  tamanho: "GG",
  cor: "Preto",
  url: "https://wantedind.com/wp-content/uploads/2020/11/camiseta-focus-preto-frente3-600x600.jpg",
  urlSubImage: "https://wantedind.com/wp-content/uploads/2020/11/focus-2-de-3-scaled.jpg",
  descricao: "Camiseta linha 'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 99.9,
  colecao: "Premium",
  fav: false
}, {
  id: "5",
  tipo: "camiseta",
  nome: "Camiseta Wanted",
  tamanho: "GG",
  cor: "Preto",
  url: "https://wantedind.com/wp-content/uploads/2020/10/Camiseta-Wanted-Logo-Script-Preto-scaled.jpg",
  urlSubImage: "https://wantedind.com/wp-content/uploads/2020/10/Camiseta-Wanted-Logo-Script-Branco-600x600.jpg",
  descricao: "Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 99.9,
  colecao: "Premium",
  fav: false
}, {
  id: "6",
  tipo: "camiseta",
  nome: "Camiseta Wanted",
  tamanho: "GG",
  cor: "Preto",
  url: "https://wantedind.com/wp-content/uploads/2022/09/camiseta-wanted-wntj-preto-frente-900x900.jpg",
  urlSubImage: "https://wantedind.com/wp-content/uploads/2022/09/artigo-final-7-600x800.jpg",
  descricao: "Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 99.9,
  colecao: "Premium",
  fav: false
}, {
  id: "7",
  tipo: "camiseta",
  nome: "Camiseta Wanted",
  tamanho: "GG",
  cor: "Preto",
  url: "https://wantedind.com/wp-content/uploads/2022/09/camiseta-wanted-veneno-puro-preto-600x600.jpg",
  urlSubImage: "https://wantedind.com/wp-content/uploads/2022/09/artigo-final-42-600x800.jpg",
  descricao: "Camiseta linha  'BASICS', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 49.9,
  colecao: "Basics",
  fav: false
}, {
  id: "8",
  tipo: "camiseta",
  nome: "Camiseta Wanted",
  tamanho: "GG",
  cor: "Preto",
  url: "https://wantedind.com/wp-content/uploads/2020/08/japan-hustler-preta-1-600x600.jpg",
  urlSubImage: "https://wantedind.com/wp-content/uploads/2020/08/japan-hustler-branca-1-600x600.jpg",
  descricao: "Camiseta linha 'BASICS', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 49.9,
  colecao: "Basics",
  fav: false
}, {
  id: "9",
  tipo: "camiseta",
  nome: "Camiseta Wanted",
  tamanho: "GG",
  cor: "Preto",
  url: "https://wantedind.com/wp-content/uploads/2020/12/camiseta-wanted-wntd-logo-rosa-preto-1-600x600.jpg",
  urlSubImage: "https://wantedind.com/wp-content/uploads/2020/12/camiseta-wanted-wntd-logo-rosa-branco-1-600x600.jpg",
  descricao: "Camiseta linha 'BASICS', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 49.9,
  colecao: "Basics",
  fav: false
}];
const bermudas = [{
  tipo: "Bermuda",
  nome: "Bermuda Wanted",
  url: "https://wantedind.com/wp-content/uploads/2022/12/BERMUDA-2-900x900.jpg",
  descricao: "Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 109.9,
  colecao: "Berm00",
  cor: "Preto",
  tamanho: "G",
  id: "10",
  fav: false
}, {
  tipo: "Bermuda",
  nome: "Bermuda Wanted",
  url: "https://wantedind.com/wp-content/uploads/2022/12/BERMUDA-5-900x900.jpg",
  descricao: "Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 109.9,
  colecao: "Berm00",
  cor: "Branco",
  tamanho: "G",
  id: "11",
  fav: false
}, {
  tipo: "Bermuda",
  nome: "Bermuda Wanted",
  url: "https://wantedind.com/wp-content/uploads/2022/12/BERMUDA-4-900x900.jpg",
  descricao: "Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 109.9,
  colecao: "Berm00",
  cor: "Marrom",
  tamanho: "G",
  id: "12",
  fav: false
}, {
  tipo: "Bermuda",
  nome: "Bermuda Wanted",
  url: "https://wantedind.com/wp-content/uploads/2021/05/still-bermuda-preto-900x900.jpg",
  descricao: "Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 89.9,
  colecao: "Berm00",
  cor: "Preto",
  tamanho: "G",
  id: "13",
  fav: false
}, {
  tipo: "Bermuda",
  nome: "Bermuda Wanted",
  url: "https://wantedind.com/wp-content/uploads/2020/08/Bermuda-Moletom-Wanted-Wu-Tang-Preto-900x900.jpg",
  descricao: "Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 89.9,
  colecao: "Berm00",
  cor: "Preto",
  tamanho: "G",
  id: "14",
  fav: false
}, {
  tipo: "Bermuda",
  nome: "Bermuda Wanted",
  url: "https://wantedind.com/wp-content/uploads/2020/08/Bermuda-Moletom-Wanted-In-God-We-Trust-Cinza-900x900.jpg",
  descricao: "Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH",
  preço: 89.9,
  colecao: "Berm00",
  cor: "Cinza",
  tamanho: "G",
  id: "15",
  fav: false
}];
const tenis = [{
  tipo: "Tênis",
  nome: "Ous",
  tamanho: "40",
  cor: "Azul/Amarelo",
  url: "https://dillysports.vteximg.com.br/arquivos/ids/175503-1000-1000/350015_23-1.jpg?v=638049830862630000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/160589-1000-1000/350015_23-2.jpg?v=637874537716200000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seu joelho",
  preço: 139.9,
  colecao: "Sneackers00",
  id: "16",
  fav: false
}, {
  tipo: "Tênis",
  nome: "Ous",
  tamanho: "40",
  cor: "Branco/Azul",
  url: "https://dillysports.vteximg.com.br/arquivos/ids/170784-1000-1000/THUMB_350015_26_1000x800.jpg?v=637987841174800000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/170676-1000-1000/350015_26-2.jpg?v=637987829955570000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seu joelho",
  preço: 139.9,
  colecao: "Sneackers00",
  id: "17",
  fav: false
}, {
  tipo: "Tênis",
  nome: "Ous",
  tamanho: "40",
  cor: "Branco",
  url: "https://dillysports.vteximg.com.br/arquivos/ids/171998-1000-1000/THUMB_0002_350001_69_1.jpg?v=637994607636170000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/171921-1000-1000/350001_69-2.jpg?v=637994549779630000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seu joelho",
  preço: 139.9,
  colecao: "Sneackers00",
  id: "18",
  fav: false
}, {
  tipo: "Tênis",
  nome: "Ous",
  tamanho: "40",
  cor: "Marrom",
  url: "https://dillysports.vteximg.com.br/arquivos/ids/178975-1000-1000/gomes_whisky_essencial_lateral.jpg?v=638132979341130000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/178976-1000-1000/gomes_whisky_essencial_superior.jpg?v=638132979378170000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seu joelho",
  preço: 139.9,
  promo: 97.93,
  colecao: "Sneackers00",
  id: "19",
  fav: false
}, {
  tipo: "Tênis",
  nome: "Ous",
  tamanho: "40",
  cor: "Preto/Azul",
  url: "https://dillysports.vteximg.com.br/arquivos/ids/172073-1000-1000/THUMB_0003_350001_70_1.jpg?v=637999828278730000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/171542-1000-1000/350001_70-3.jpg?v=637992963718930000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seu joelho",
  preço: 139.9,
  colecao: "Sneackers00",
  id: "20",
  fav: false
}, {
  tipo: "Tênis",
  nome: "Ous",
  tamanho: "40",
  cor: "Branco/Azul",
  url: "https://dillysports.vteximg.com.br/arquivos/ids/171939-1000-1000/THUMB_0003_350001_67_1.jpg?v=637994551021800000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/171875-1000-1000/350001_67-3.jpg?v=637994546877430000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seu joelho",
  preço: 139.9,
  colecao: "Sneackers00",
  id: "21",
  fav: false
}, {
  tipo: "Tênis",
  nome: "Ous",
  tamanho: "40",
  cor: "Preto/Rosa",
  url: "https://dillysports.vteximg.com.br/arquivos/ids/172372-1000-1000/THUMB_350001_44_IMIGRANTE-PRT-REFLETIVO-CHICLE-ESSENCIAL.jpg?v=638004051639500000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/171722-1000-1000/350001_44-3.jpg?v=637992972757330000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seu joelho",
  preço: 139.9,
  colecao: "Emigrante",
  id: "22",
  fav: false
}, {
  tipo: "Tênis",
  nome: "Ous",
  tamanho: "40",
  cor: "Branco",
  url: "https://dillysports.vteximg.com.br/arquivos/ids/178494-1000-1000/imigrante_branco_2_oe_thumb.jpg?v=638128463015830000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/176100-1000-1000/350001_64-2.jpg?v=638070503036230000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seu joelho",
  preço: 139.9,
  colecao: "Emigrante",
  id: "23",
  fav: false
}, {
  tipo: "Tênis",
  nome: "Ous",
  tamanho: "40",
  cor: "Preto;Cinzas",
  url: "https://dillysports.vteximg.com.br/arquivos/ids/166808-1000-1000/350007_25-1.jpg?v=637956434964770000",
  urlSubImage: "https://dillysports.vteximg.com.br/arquivos/ids/166809-1000-1000/350007_25-2.jpg?v=637956435005100000",
  descricao: "Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seu joelho",
  preço: 139.9,
  colecao: "Emigrante",
  id: "24",
  fav: false
}];
const caps = [{
  tipo: "boné",
  nome: "Boné Wanted",
  url: "https://wantedind.com/wp-content/uploads/2022/12/BONE-PRETO-ALTERADO-1-900x900.png",
  descricao: "Boné Sike, cofortável e estiloso",
  preço: 74.9,
  colecao: "Cap00",
  cor: "Preto",
  tamanho: "P",
  id: "25",
  fav: false
}, {
  tipo: "boné",
  nome: "Boné Wanted",
  url: "https://wantedind.com/wp-content/uploads/2022/12/BONE-BRANCO-ALTERADO-900x900.png",
  descricao: "Boné Sike, cofortável e estiloso",
  preço: 74.9,
  colecao: "Cap00",
  cor: "Branco",
  tamanho: "P",
  id: "26",
  fav: false
}, {
  tipo: "boné",
  nome: "Boné Wanted",
  url: "https://wantedind.com/wp-content/uploads/2022/12/BONE-BEGE-ALTERADO-900x900.png",
  descricao: "Boné five panel",
  preço: 74.9,
  colecao: "Cap00",
  cor: "Bege",
  tamanho: "P",
  id: "27",
  fav: false
}, {
  tipo: "boné",
  nome: "Boné Wanted",
  url: "https://wantedind.com/wp-content/uploads/2022/12/FIVE-BONE-PRETO-ALTERADO-900x900.png",
  descricao: "Boné Sike, cofortável e estiloso",
  preço: 74.9,
  colecao: "Cap00",
  cor: "Preto",
  tamanho: "P",
  id: "28",
  fav: false
}, {
  tipo: "boné",
  nome: "Boné Wanted",
  url: "https://wantedind.com/wp-content/uploads/2022/12/FIVE-4-900x900.png",
  descricao: "Boné Sike, cofortável e estiloso",
  preço: 74.9,
  colecao: "Cap00",
  cor: "branco",
  tamanho: "P",
  id: "29",
  fav: false
}, {
  tipo: "boné",
  nome: "Boné Wanted",
  url: "https://wantedind.com/wp-content/uploads/2022/12/FIVE-BONE-AZUL-ALTERADO-900x900.png",
  descricao: "Boné Sike, cofortável e estiloso",
  preço: 74.9,
  promo: 52.43,
  colecao: "Cap00",
  cor: "Azul",
  tamanho: "P",
  id: "30",
  fav: false
}];
const router = createBrowserRouter([{
  path: "/",
  element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    fileName: "C:/Users/ryanh/Desktop/Projetos/Loja/meu-app/src/main.jsx",
    lineNumber: 370,
    columnNumber: 12
  }, this),
  children: [{
    path: "Home",
    element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
      fileName: "C:/Users/ryanh/Desktop/Projetos/Loja/meu-app/src/main.jsx",
      lineNumber: 373,
      columnNumber: 14
    }, this)
  }, {
    path: "Camisas",
    element: /* @__PURE__ */ jsxDEV(Camisas, { data: camisas }, void 0, false, {
      fileName: "C:/Users/ryanh/Desktop/Projetos/Loja/meu-app/src/main.jsx",
      lineNumber: 376,
      columnNumber: 14
    }, this)
  }, {
    path: "FootWear",
    element: /* @__PURE__ */ jsxDEV(FootWear, { data: tenis }, void 0, false, {
      fileName: "C:/Users/ryanh/Desktop/Projetos/Loja/meu-app/src/main.jsx",
      lineNumber: 379,
      columnNumber: 14
    }, this)
  }, {
    path: "HeadWear",
    element: /* @__PURE__ */ jsxDEV(HeadWear, { data: caps }, void 0, false, {
      fileName: "C:/Users/ryanh/Desktop/Projetos/Loja/meu-app/src/main.jsx",
      lineNumber: 382,
      columnNumber: 14
    }, this)
  }, {
    path: "Bermudas",
    element: /* @__PURE__ */ jsxDEV(Bermudas, { data: bermudas }, void 0, false, {
      fileName: "C:/Users/ryanh/Desktop/Projetos/Loja/meu-app/src/main.jsx",
      lineNumber: 385,
      columnNumber: 14
    }, this)
  }, {
    path: "Favorites",
    element: /* @__PURE__ */ jsxDEV(Favoritos, {}, void 0, false, {
      fileName: "C:/Users/ryanh/Desktop/Projetos/Loja/meu-app/src/main.jsx",
      lineNumber: 388,
      columnNumber: 14
    }, this)
  }]
}]);
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(CarrinhoProvider, { children: /* @__PURE__ */ jsxDEV(FavoritoProvider, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
  fileName: "C:/Users/ryanh/Desktop/Projetos/Loja/meu-app/src/main.jsx",
  lineNumber: 394,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "C:/Users/ryanh/Desktop/Projetos/Loja/meu-app/src/main.jsx",
  lineNumber: 393,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "C:/Users/ryanh/Desktop/Projetos/Loja/meu-app/src/main.jsx",
  lineNumber: 392,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "C:/Users/ryanh/Desktop/Projetos/Loja/meu-app/src/main.jsx",
  lineNumber: 391,
  columnNumber: 61
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBcVphO0FBclpiLE9BQU9BLFdBQVc7QUFDbEIsT0FBT0MsY0FBYztBQUNyQixPQUFPQyxTQUFTO0FBQ2hCLE9BQU87QUFFUCxTQUFRQyxxQkFBcUJDLHNCQUFxQjtBQUVsRCxPQUFPQyxVQUFVO0FBQ2pCLE9BQU9DLGFBQWE7QUFDcEIsT0FBT0MsY0FBYztBQUNyQixPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLGNBQWM7QUFFckIsU0FBU0Msd0JBQXdCO0FBQ2pDLFNBQVNDLHdCQUF3QjtBQUNqQyxPQUFPQyxlQUFlO0FBRXRCLE1BQU1DLFVBQVUsQ0FBQztBQUFBLEVBQ2ZDLElBQUk7QUFBQSxFQUNKQyxNQUFNO0FBQUEsRUFDTkMsTUFBTTtBQUFBLEVBQ05DLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQUEsRUFDTEMsS0FBTTtBQUFBLEVBQ05DLGFBQWE7QUFBQSxFQUNiQyxXQUFXO0FBQUEsRUFDWEMsT0FBTztBQUFBLEVBQ1BDLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQ1AsR0FDQTtBQUFBLEVBQ0VWLElBQUk7QUFBQSxFQUNKQyxNQUFNO0FBQUEsRUFDTkMsTUFBTTtBQUFBLEVBQ05DLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQUEsRUFDTEMsS0FBTTtBQUFBLEVBQ05DLGFBQWE7QUFBQSxFQUNiQyxXQUFXO0FBQUEsRUFDWEMsT0FBTztBQUFBLEVBQ1BDLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQ1AsR0FDQTtBQUFBLEVBQ0VWLElBQUk7QUFBQSxFQUNKQyxNQUFNO0FBQUEsRUFDTkMsTUFBTTtBQUFBLEVBQ05DLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQUEsRUFDTEMsS0FBTTtBQUFBLEVBQ05DLGFBQWE7QUFBQSxFQUNiQyxXQUFXO0FBQUEsRUFDWEMsT0FBTztBQUFBLEVBQ1BDLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQ1AsR0FDQTtBQUFBLEVBQ0VWLElBQUk7QUFBQSxFQUNKQyxNQUFNO0FBQUEsRUFDTkMsTUFBTTtBQUFBLEVBQ05DLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQUEsRUFDTEMsS0FBTTtBQUFBLEVBQ05DLGFBQWE7QUFBQSxFQUNiQyxXQUFXO0FBQUEsRUFDWEMsT0FBTztBQUFBLEVBQ1BDLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQ1AsR0FDQTtBQUFBLEVBQ0VWLElBQUk7QUFBQSxFQUNKQyxNQUFNO0FBQUEsRUFDTkMsTUFBTTtBQUFBLEVBQ05DLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQUEsRUFDTEMsS0FBTTtBQUFBLEVBQ05DLGFBQWE7QUFBQSxFQUNiQyxXQUFXO0FBQUEsRUFDWEMsT0FBTztBQUFBLEVBQ1BDLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQ1AsR0FDQTtBQUFBLEVBQ0VWLElBQUk7QUFBQSxFQUNKQyxNQUFNO0FBQUEsRUFDTkMsTUFBTTtBQUFBLEVBQ05DLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQUEsRUFDTEMsS0FBTTtBQUFBLEVBQ05DLGFBQWE7QUFBQSxFQUNiQyxXQUFXO0FBQUEsRUFDWEMsT0FBTztBQUFBLEVBQ1BDLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQ1AsR0FDQTtBQUFBLEVBQ0VWLElBQUk7QUFBQSxFQUNKQyxNQUFNO0FBQUEsRUFDTkMsTUFBTTtBQUFBLEVBQ05DLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQUEsRUFDTEMsS0FBTTtBQUFBLEVBQ05DLGFBQWE7QUFBQSxFQUNiQyxXQUFXO0FBQUEsRUFDWEMsT0FBTztBQUFBLEVBQ1BDLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQ1AsR0FDQTtBQUFBLEVBQ0VWLElBQUk7QUFBQSxFQUNKQyxNQUFNO0FBQUEsRUFDTkMsTUFBTTtBQUFBLEVBQ05DLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQUEsRUFDTEMsS0FBTTtBQUFBLEVBQ05DLGFBQWE7QUFBQSxFQUNiQyxXQUFXO0FBQUEsRUFDWEMsT0FBTztBQUFBLEVBQ1BDLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQ1AsR0FDQTtBQUFBLEVBQ0VWLElBQUk7QUFBQSxFQUNKQyxNQUFN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TkMsTUFBTTtBQUFBLEVBQ05DLFNBQVM7QUFBQSxFQUNUQyxLQUFLO0FBQUEsRUFDTEMsS0FBTTtBQUFBLEVBQ05DLGFBQWE7QUFBQSxFQUNiQyxXQUFXO0FBQUEsRUFDWEMsT0FBTztBQUFBLEVBQ1BLLE9BQU87QUFBQSxFQUNQSixTQUFTO0FBQUEsRUFDVFQsSUFBSTtBQUFBLEVBQ0pVLEtBQUs7QUFDUCxHQUNBO0FBQUEsRUFDRVQsTUFBTTtBQUFBLEVBQ05DLE1BQU07QUFBQSxFQUNOQyxTQUFTO0FBQUEsRUFDVEMsS0FBSztBQUFBLEVBQ0xDLEtBQU07QUFBQSxFQUNOQyxhQUFhO0FBQUEsRUFDYkMsV0FBVztBQUFBLEVBQ1hDLE9BQU87QUFBQSxFQUNQQyxTQUFTO0FBQUEsRUFDVFQsSUFBSTtBQUFBLEVBQ0pVLEtBQUs7QUFDUCxHQUNBO0FBQUEsRUFDRVQsTUFBTTtBQUFBLEVBQ05DLE1BQU07QUFBQSxFQUNOQyxTQUFTO0FBQUEsRUFDVEMsS0FBSztBQUFBLEVBQ0xDLEtBQU07QUFBQSxFQUNOQyxhQUFhO0FBQUEsRUFDYkMsV0FBVztBQUFBLEVBQ1hDLE9BQU87QUFBQSxFQUNQQyxTQUFTO0FBQUEsRUFDVFQsSUFBSTtBQUFBLEVBQ0pVLEtBQUs7QUFDUCxHQUNBO0FBQUEsRUFDRVQsTUFBTTtBQUFBLEVBQ05DLE1BQU07QUFBQSxFQUNOQyxTQUFTO0FBQUEsRUFDVEMsS0FBSztBQUFBLEVBQ0xDLEtBQU07QUFBQSxFQUNOQyxhQUFhO0FBQUEsRUFDYkMsV0FBVztBQUFBLEVBQ1hDLE9BQU87QUFBQSxFQUNQQyxTQUFTO0FBQUEsRUFDVFQsSUFBSTtBQUFBLEVBQ0pVLEtBQUs7QUFDUCxHQUNBO0FBQUEsRUFDRVQsTUFBTTtBQUFBLEVBQ05DLE1BQU07QUFBQSxFQUNOQyxTQUFTO0FBQUEsRUFDVEMsS0FBSztBQUFBLEVBQ0xDLEtBQU07QUFBQSxFQUNOQyxhQUFhO0FBQUEsRUFDYkMsV0FBVztBQUFBLEVBQ1hDLE9BQU87QUFBQSxFQUNQQyxTQUFTO0FBQUEsRUFDVFQsSUFBSTtBQUFB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WUFBUyxNQUFNTixZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXlCO0FBQUEsRUFBRSxHQUN2RDtBQUFBLElBQUNLLE1BQU07QUFBQSxJQUFhQyxTQUFTLHVCQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFVO0FBQUEsRUFBRSxDQUFDO0FBRTlDLENBQUMsQ0FDRjtBQUVEOUIsU0FBU2dDLFdBQVdDLFNBQVNDLGVBQWUsTUFBTSxDQUFDLEVBQUVDLE9BQ25ELHVCQUFDLE1BQU0sWUFBTixFQUNHLGlDQUFDLG9CQUNDLGlDQUFDLG9CQUNELGlDQUFDLGtCQUFlLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0IsS0FEL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlBLEtBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1BLENBQW1CIiwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkFwcCIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXJQcm92aWRlciIsIkhvbWUiLCJDYW1pc2FzIiwiRm9vdFdlYXIiLCJIZWFkV2VhciIsIkJlcm11ZGFzIiwiQ2FycmluaG9Qcm92aWRlciIsIkZhdm9yaXRvUHJvdmlkZXIiLCJGYXZvcml0b3MiLCJjYW1pc2FzIiwiaWQiLCJ0aXBvIiwibm9tZSIsInRhbWFuaG8iLCJjb3IiLCJ1cmwiLCJ1cmxTdWJJbWFnZSIsImRlc2NyaWNhbyIsInByZcOnbyIsImNvbGVjYW8iLCJmYXYiLCJiZXJtdWRhcyIsInRlbmlzIiwicHJvbW8iLCJjYXBzIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJjaGlsZHJlbiIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sInNvdXJjZXMiOlsibWFpbi5qc3giXSwiZmlsZSI6IkM6L1VzZXJzL3J5YW5oL0Rlc2t0b3AvUHJvamV0b3MvTG9qYS9tZXUtYXBwL3NyYy9tYWluLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcbmltcG9ydCAnLi9pbmRleC5jc3MnXG5cbmltcG9ydCB7Y3JlYXRlQnJvd3NlclJvdXRlciwgUm91dGVyUHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBIb21lIGZyb20gJy4vcm91dGVzL0hvbWUuanN4J1xuaW1wb3J0IENhbWlzYXMgZnJvbSAnLi9yb3V0ZXMvQ2FtaXNhcydcbmltcG9ydCBGb290V2VhciBmcm9tICcuL3JvdXRlcy9Gb290V2VhcidcbmltcG9ydCBIZWFkV2VhciBmcm9tICcuL3JvdXRlcy9IZWFkV2VhcidcbmltcG9ydCBCZXJtdWRhcyBmcm9tICcuL3JvdXRlcy9CZXJtdWRhcydcblxuaW1wb3J0IHsgQ2FycmluaG9Qcm92aWRlciB9IGZyb20gJy4vY29udGV4dC9DYXJyaW5ob0NvbnRleHQnXG5pbXBvcnQgeyBGYXZvcml0b1Byb3ZpZGVyIH0gZnJvbSAnLi9jb250ZXh0L0Zhdm9yaXRvc0NvbnRleHQnXG5pbXBvcnQgRmF2b3JpdG9zIGZyb20gJy4vY29tcG9uZW50cy9GYXZvcml0b3MnXG5cbmNvbnN0IGNhbWlzYXMgPSBbe1xuICBpZDogXCIxXCIsXG4gIHRpcG86IFwiY2FtaXNldGFcIixcbiAgbm9tZTogXCJDYW1pc2V0YSBXYW50ZWRcIixcbiAgdGFtYW5obzogXCJHR1wiLFxuICBjb3I6ICdQcmV0bycsXG4gIHVybDogIFwiaHR0cHM6Ly93YW50ZWRpbmQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzAxL2NhbWlzZXRhLXdhbnRlZC1yZWJlbC1wcmV0by1mcmVudGUtMi05MDB4OTAwLmpwZ1wiLFxuICB1cmxTdWJJbWFnZTogXCJodHRwczovL3dhbnRlZGluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDEvY2FtaXNldGEtd2FudGVkLXJlYmVsLXByZXRvLWNvc3Rhcy02MDB4NjAwLmpwZ1wiLFxuICBkZXNjcmljYW86IFwiQ2FtaXNldGEgbGluaGEgICdQUkVNSVVNJywgdGVjaWRvIGNvbmZvcnTDoXZlbCBkZSBhbHRhIHF1YWxpZGFkZS4gYSBTaWtlIGZvaSBjcmlhZGEgZW0gMTk5OCBlIGRlc2RlIGVudMOjbywgdmVtIGZhemVuZG8gcGFydGUgZGFzIGN1bHR1cmFzIGRlIHJ1YSBlIHRhbWLDqW0gZGEgY3VsdHVyYSBURUNIXCIsXG4gIHByZcOnbzogOTkuOTAsXG4gIGNvbGVjYW86IFwiUHJlbWl1bVwiLFxuICBmYXY6IGZhbHNlLFxufSxcbntcbiAgaWQ6IFwiMlwiLFxuICB0aXBvOiBcImNhbWlzZXRhXCIsXG4gIG5vbWU6IFwiQ2FtaXNldGEgV2FudGVkXCIsXG4gIHRhbWFuaG86IFwiR0dcIixcbiAgY29yOiBcIlByZXRvXCIsXG4gIHVybDogIFwiaHR0cHM6Ly93YW50ZWRpbmQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzA0L2NhbWlzZXRhLXdhbnRlZC1pbnRlcm4tcHJldG8tZnJlbnRlLTEtOTAweDkwMC5qcGdcIixcbiAgdXJsU3ViSW1hZ2U6IFwiaHR0cHM6Ly93YW50ZWRpbmQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzA0L2FydGlnby00LjIyLUxCLTUtNjAweDYwMC5qcGdcIixcbiAgZGVzY3JpY2FvOiBcIkNhbWlzZXRhIGxpbmhhICAnUFJFTUlVTScsIHRlY2lkbyBjb25mb3J0w6F2ZWwgZGUgYWx0YSBxdWFsaWRhZGUuIGEgU2lrZSBmb2kgY3JpYWRhIGVtIDE5OTggZSBkZXNkZSBlbnTDo28sIHZlbSBmYXplbmRvIHBhcnRlIGRhcyBjdWx0dXJhcyBkZSBydWEgZSB0YW1iw6ltIGRhIGN1bHR1cmEgVEVDSFwiLFxuICBwcmXDp286IDk5LjkwLFxuICBjb2xlY2FvOiBcIlByZW1pdW1cIixcbiAgZmF2OiBmYWxzZSxcbn0sXG57XG4gIGlkOiBcIjNcIixcbiAgdGlwbzogXCJjYW1pc2V0YVwiLFxuICBub21lOiBcIkNhbWlzZXRhIFdhbnRlZFwiLFxuICB0YW1hbmhvOiBcIkdHXCIsXG4gIGNvcjogXCJCcmFuY2FcIixcbiAgdXJsOiAgXCJodHRwczovL3dhbnRlZGluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDQvY2FtaXNldGEtd2FudGVkLWRyaXBwZXItbG9nby1icmFuY28tMS05MDB4OTAwLmpwZ1wiLFxuICB1cmxTdWJJbWFnZTogXCJodHRwczovL3dhbnRlZGluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDQvYXJ0aWdvLTQuMjItTEItMS1zY2FsZWQuanBnXCIsXG4gIGRlc2NyaWNhbzogXCJDYW1pc2V0YSBsaW5oYSAnUFJFTUlVTScsIHRlY2lkbyBjb25mb3J0w6F2ZWwgZGUgYWx0YSBxdWFsaWRhZGUuIGEgU2lrZSBmb2kgY3JpYWRhIGVtIDE5OTggZSBkZXNkZSBlbnTDo28sIHZlbSBmYXplbmRvIHBhcnRlIGRhcyBjdWx0dXJhcyBkZSBydWEgZSB0YW1iw6ltIGRhIGN1bHR1cmEgVEVDSFwiLFxuICBwcmXDp286IDk5LjkwLFxuICBjb2xlY2FvOiBcIlByZW1pdW1cIixcbiAgZmF2OiBmYWxzZSxcbn0sXG57XG4gIGlkOiBcIjRcIixcbiAgdGlwbzogXCJjYW1pc2V0YVwiLFxuICBub21lOiBcIkNhbWlzZXRhIFdhbnRlZFwiLFxuICB0YW1hbmhvOiBcIkdHXCIsXG4gIGNvcjogXCJQcmV0b1wiLFxuICB1cmw6ICBcImh0dHBzOi8vd2FudGVkaW5kLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8xMS9jYW1pc2V0YS1mb2N1cy1wcmV0by1mcmVudGUzLTYwMHg2MDAuanBnXCIsXG4gIHVybFN1YkltYWdlOiBcImh0dHBzOi8vd2FudGVkaW5kLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8xMS9mb2N1cy0yLWRlLTMtc2NhbGVkLmpwZ1wiLFxuICBkZXNjcmljYW86IFwiQ2FtaXNldGEgbGluaGEgJ1BSRU1JVU0nLCB0ZWNpZG8gY29uZm9ydMOhdmVsIGRlIGFsdGEgcXVhbGlkYWRlLiBhIFNpa2UgZm9pIGNyaWFkYSBlbSAxOTk4IGUgZGVzZGUgZW50w6NvLCB2ZW0gZmF6ZW5kbyBwYXJ0ZSBkYXMgY3VsdHVyYXMgZGUgcnVhIGUgdGFtYsOpbSBkYSBjdWx0dXJhIFRFQ0hcIixcbiAgcHJlw6dvOiA5OS45MCxcbiAgY29sZWNhbzogXCJQcmVtaXVtXCIsXG4gIGZhdjogZmFsc2UsXG59LFxue1xuICBpZDogXCI1XCIsXG4gIHRpcG86IFwiY2FtaXNldGFcIixcbiAgbm9tZTogXCJDYW1pc2V0YSBXYW50ZWRcIixcbiAgdGFtYW5obzogXCJHR1wiLFxuICBjb3I6IFwiUHJldG9cIixcbiAgdXJsOiAgXCJodHRwczovL3dhbnRlZGluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTAvQ2FtaXNldGEtV2FudGVkLUxvZ28tU2NyaXB0LVByZXRvLXNjYWxlZC5qcGdcIixcbiAgdXJsU3ViSW1hZ2U6IFwiaHR0cHM6Ly93YW50ZWRpbmQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzEwL0NhbWlzZXRhLVdhbnRlZC1Mb2dvLVNjcmlwdC1CcmFuY28tNjAweDYwMC5qcGdcIixcbiAgZGVzY3JpY2FvOiBcIkNhbWlzZXRhIGxpbmhhICAnUFJFTUlVTScsIHRlY2lkbyBjb25mb3J0w6F2ZWwgZGUgYWx0YSBxdWFsaWRhZGUuIGEgU2lrZSBmb2kgY3JpYWRhIGVtIDE5OTggZSBkZXNkZSBlbnTDo28sIHZlbSBmYXplbmRvIHBhcnRlIGRhcyBjdWx0dXJhcyBkZSBydWEgZSB0YW1iw6ltIGRhIGN1bHR1cmEgVEVDSFwiLFxuICBwcmXDp286IDk5LjkwLFxuICBjb2xlY2FvOiBcIlByZW1pdW1cIixcbiAgZmF2OiBmYWxzZSxcbn0sXG57XG4gIGlkOiBcIjZcIixcbiAgdGlwbzogXCJjYW1pc2V0YVwiLFxuICBub21lOiBcIkNhbWlzZXRhIFdhbnRlZFwiLFxuICB0YW1hbmhvOiBcIkdHXCIsXG4gIGNvcjogXCJQcmV0b1wiLFxuICB1cmw6ICBcImh0dHBzOi8vd2FudGVkaW5kLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8wOS9jYW1pc2V0YS13YW50ZWQtd250ai1wcmV0by1mcmVudGUtOTAweDkwMC5qcGdcIixcbiAgdXJsU3ViSW1hZ2U6IFwiaHR0cHM6Ly93YW50ZWRpbmQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzA5L2FydGlnby1maW5hbC03LTYwMHg4MDAuanBnXCIsXG4gIGRlc2NyaWNhbzogXCJDYW1pc2V0YSBsaW5oYSAgJ1BSRU1JVU0nLCB0ZWNpZG8gY29uZm9ydMOhdmVsIGRlIGFsdGEgcXVhbGlkYWRlLiBhIFNpa2UgZm9pIGNyaWFkYSBlbSAxOTk4IGUgZGVzZGUgZW50w6NvLCB2ZW0gZmF6ZW5kbyBwYXJ0ZSBkYXMgY3VsdHVyYXMgZGUgcnVhIGUgdGFtYsOpbSBkYSBjdWx0dXJhIFRFQ0hcIixcbiAgcHJlw6dvOiA5OS45MCxcbiAgY29sZWNhbzogXCJQcmVtaXVtXCIsXG4gIGZhdjogZmFsc2UsXG59LFxue1xuICBpZDogXCI3XCIsXG4gIHRpcG86IFwiY2FtaXNldGFcIixcbiAgbm9tZTogXCJDYW1pc2V0YSBXYW50ZWRcIixcbiAgdGFtYW5obzogXCJHR1wiLFxuICBjb3I6IFwiUHJldG9cIixcbiAgdXJsOiAgXCJodHRwczovL3dhbnRlZGluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDkvY2FtaXNldGEtd2FudGVkLXZlbmVuby1wdXJvLXByZXRvLTYwMHg2MDAuanBnXCIsXG4gIHVybFN1YkltYWdlOiBcImh0dHBzOi8vd2FudGVkaW5kLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8wOS9hcnRpZ28tZmluYWwtNDItNjAweDgwMC5qcGdcIixcbiAgZGVzY3JpY2FvOiBcIkNhbWlzZXRhIGxpbmhhICAnQkFTSUNTJywgdGVjaWRvIGNvbmZvcnTDoXZlbCBkZSBhbHRhIHF1YWxpZGFkZS4gYSBTaWtlIGZvaSBjcmlhZGEgZW0gMTk5OCBlIGRlc2RlIGVudMOjbywgdmVtIGZhemVuZG8gcGFydGUgZGFzIGN1bHR1cmFzIGRlIHJ1YSBlIHRhbWLDqW0gZGEgY3VsdHVyYSBURUNIXCIsXG4gIHByZcOnbzogNDkuOTAsXG4gIGNvbGVjYW86IFwiQmFzaWNzXCIsXG4gIGZhdjogZmFsc2UsXG59LFxue1xuICBpZDogXCI4XCIsXG4gIHRpcG86IFwiY2FtaXNldGFcIixcbiAgbm9tZTogXCJDYW1pc2V0YSBXYW50ZWRcIixcbiAgdGFtYW5obzogXCJHR1wiLFxuICBjb3I6IFwiUHJldG9cIixcbiAgdXJsOiAgXCJodHRwczovL3dhbnRlZGluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvamFwYW4taHVzdGxlci1wcmV0YS0xLTYwMHg2MDAuanBnXCIsXG4gIHVybFN1YkltYWdlOiBcImh0dHBzOi8vd2FudGVkaW5kLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC9qYXBhbi1odXN0bGVyLWJyYW5jYS0xLTYwMHg2MDAuanBnXCIsXG4gIGRlc2NyaWNhbzogXCJDYW1pc2V0YSBsaW5oYSAnQkFTSUNTJywgdGVjaWRvIGNvbmZvcnTDoXZlbCBkZSBhbHRhIHF1YWxpZGFkZS4gYSBTaWtlIGZvaSBjcmlhZGEgZW0gMTk5OCBlIGRlc2RlIGVudMOjbywgdmVtIGZhemVuZG8gcGFydGUgZGFzIGN1bHR1cmFzIGRlIHJ1YSBlIHRhbWLDqW0gZGEgY3VsdHVyYSBURUNIXCIsXG4gIHByZcOnbzogNDkuOTAsXG4gIGNvbGVjYW86IFwiQmFzaWNzXCIsXG4gIGZhdjogZmFsc2UsXG59LFxue1xuICBpZDogXCI5XCIsXG4gIHRpcG86IFwiY2FtaXNldGFcIixcbiAgbm9tZTogXCJDYW1pc2V0YSBXYW50ZWRcIixcbiAgdGFtYW5obzogXCJHR1wiLFxuICBjb3I6IFwiUHJldG9cIixcbiAgdXJsOiAgXCJodHRwczovL3dhbnRlZGluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTIvY2FtaXNldGEtd2FudGVkLXdudGQtbG9nby1yb3NhLXByZXRvLTEtNjAweDYwMC5qcGdcIixcbiAgdXJsU3ViSW1hZ2U6IFwiaHR0cHM6Ly93YW50ZWRpbmQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzEyL2NhbWlzZXRhLXdhbnRlZC13bnRkLWxvZ28tcm9zYS1icmFuY28tMS02MDB4NjAwLmpwZ1wiLFxuICBkZXNjcmljYW86IFwiQ2FtaXNldGEgbGluaGEgJ0JBU0lDUycsIHRlY2lkbyBjb25mb3J0w6F2ZWwgZGUgYWx0YSBxdWFsaWRhZGUuIGEgU2lrZSBmb2kgY3JpYWRhIGVtIDE5OTggZSBkZXNkZSBlbnTDo28sIHZlbSBmYXplbmRvIHBhcnRlIGRhcyBjdWx0dXJhcyBkZSBydWEgZSB0YW1iw6ltIGRhIGN1bHR1cmEgVEVDSFwiLFxuICBwcmXDp286IDQ5LjkwLFxuICBjb2xlY2FvOiBcIkJhc2ljc1wiLFxuICBmYXY6IGZhbHNlLFxufSxcbl1cbmNvbnN0IGJlcm11ZGFzID0gW3tcbiAgdGlwbzogXCJCZXJtdWRhXCIsXG4gIG5vbWU6IFwiQmVybXVkYSBXYW50ZWRcIixcbiAgdXJsOiAgXCJodHRwczovL3dhbnRlZGluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMTIvQkVSTVVEQS0yLTkwMHg5MDAuanBnXCIsXG4gIGRlc2NyaWNhbzogXCJCZXJtdWRhIGxpbmhhICdCZXJtMDAnLCB0ZWNpZG8gY29uZm9ydMOhdmVsIGRlIGFsdGEgcXVhbGlkYWRlLiBhIFNpa2UgZm9pIGNyaWFkYSBlbSAxOTk4IGUgZGVzZGUgZW50w6NvLCB2ZW0gZmF6ZW5kbyBwYXJ0ZSBkYXMgY3VsdHVyYXMgZGUgcnVhIGUgdGFtYsOpbSBkYSBjdWx0dXJhIFRFQ0hcIixcbiAgcHJlw6dvOiAxMDkuOTAsXG4gIGNvbGVjYW86IFwiQmVybTAwXCIsXG4gIGNvcjogXCJQcmV0b1wiLFxuICB0YW1hbmhvOiBcIkdcIixcbiAgaWQ6IFwiMTBcIixcbiAgZmF2OiBmYWxzZSxcbn0sXG57XG4gIHRpcG86IFwiQmVybXVkYVwiLFxuICBub21lOiBcIkJlcm11ZGEgV2FudGVkXCIsXG4gIHVybDogIFwiaHR0cHM6Ly93YW50ZWRpbmQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzEyL0JFUk1VREEtNS05MDB4OTAwLmpwZ1wiLFxuICBkZXNjcmljYW86IFwiQmVybXVkYSBsaW5oYSAnQmVybTAwJywgdGVjaWRvIGNvbmZvcnTDoXZlbCBkZSBhbHRhIHF1YWxpZGFkZS4gYSBTaWtlIGZvaSBjcmlhZGEgZW0gMTk5OCBlIGRlc2RlIGVudMOjbywgdmVtIGZhemVuZG8gcGFydGUgZGFzIGN1bHR1cmFzIGRlIHJ1YSBlIHRhbWLDqW0gZGEgY3VsdHVyYSBURUNIXCIsXG4gIHByZcOnbzogMTA5LjkwLFxuICBjb2xlY2FvOiBcIkJlcm0wMFwiLFxuICBjb3I6IFwiQnJhbmNvXCIsXG4gIHRhbWFuaG86IFwiR1wiLFxuICBpZDogXCIxMVwiLFxuICBmYXY6IGZhbHNlLFxufSxcbntcbiAgdGlwbzogXCJCZXJtdWRhXCIsXG4gIG5vbWU6IFwiQmVybXVkYSBXYW50ZWRcIixcbiAgdXJsOiAgXCJodHRwczovL3dhbnRlZGluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMTIvQkVSTVVEQS00LTkwMHg5MDAuanBnXCIsXG4gIGRlc2NyaWNhbzogXCJCZXJtdWRhIGxpbmhhICdCZXJtMDAnLCB0ZWNpZG8gY29uZm9ydMOhdmVsIGRlIGFsdGEgcXVhbGlkYWRlLiBhIFNpa2UgZm9pIGNyaWFkYSBlbSAxOTk4IGUgZGVzZGUgZW50w6NvLCB2ZW0gZmF6ZW5kbyBwYXJ0ZSBkYXMgY3VsdHVyYXMgZGUgcnVhIGUgdGFtYsOpbSBkYSBjdWx0dXJhIFRFQ0hcIixcbiAgcHJlw6dvOiAxMDkuOTAsXG4gIGNvbGVjYW86IFwiQmVybTAwXCIsXG4gIGNvcjogXCJNYXJyb21cIixcbiAgdGFtYW5obzogXCJHXCIsXG4gIGlkOiBcIjEyXCIsXG4gIGZhdjogZmFsc2UsXG59LFxue1xuICB0aXBvOiBcIkJlcm11ZGFcIixcbiAgbm9tZTogXCJCZXJtdWRhIFdhbnRlZFwiLFxuICB1cmw6ICBcImh0dHBzOi8vd2FudGVkaW5kLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wNS9zdGlsbC1iZXJtdWRhLXByZXRvLTkwMHg5MDAuanBnXCIsXG4gIGRlc2NyaWNhbzogXCJCZXJtdWRhIGxpbmhhICdCZXJtMDAnLCB0ZWNpZG8gY29uZm9ydMOhdmVsIGRlIGFsdGEgcXVhbGlkYWRlLiBhIFNpa2UgZm9pIGNyaWFkYSBlbSAxOTk4IGUgZGVzZGUgZW50w6NvLCB2ZW0gZmF6ZW5kbyBwYXJ0ZSBkYXMgY3VsdHVyYXMgZGUgcnVhIGUgdGFtYsOpbSBkYSBjdWx0dXJhIFRFQ0hcIixcbiAgcHJlw6dvOiA4OS45MCxcbiAgY29sZWNhbzogXCJCZXJtMDBcIixcbiAgY29yOiBcIlByZXRvXCIsXG4gIHRhbWFuaG86IFwiR1wiLFxuICBpZDogXCIxM1wiLFxuICBmYXY6IGZhbHNlLFxufSxcbntcbiAgdGlwbzogXCJCZXJtdWRhXCIsXG4gIG5vbWU6IFwiQmVybXVkYSBXYW50ZWRcIixcbiAgdXJsOiAgXCJodHRwczovL3dhbnRlZGluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvQmVybXVkYS1Nb2xldG9tLVdhbnRlZC1XdS1UYW5nLVByZXRvLTkwMHg5MDAuanBnXCIsXG4gIGRlc2NyaWNhbzogXCJCZXJtdWRhIGxpbmhhICdCZXJtMDAnLCB0ZWNpZG8gY29uZm9ydMOhdmVsIGRlIGFsdGEgcXVhbGlkYWRlLiBhIFNpa2UgZm9pIGNyaWFkYSBlbSAxOTk4IGUgZGVzZGUgZW50w6NvLCB2ZW0gZmF6ZW5kbyBwYXJ0ZSBkYXMgY3VsdHVyYXMgZGUgcnVhIGUgdGFtYsOpbSBkYSBjdWx0dXJhIFRFQ0hcIixcbiAgcHJlw6dvOiA4OS45MCxcbiAgY29sZWNhbzogXCJCZXJtMDBcIixcbiAgY29yOiBcIlByZXRvXCIsXG4gIHRhbWFuaG86IFwiR1wiLFxuICBpZDogXCIxNFwiLFxuICBmYXY6IGZhbHNlLFxufSxcbntcbiAgdGlwbzogXCJCZXJtdWRhXCIsXG4gIG5vbWU6IFwiQmVybXVkYSBXYW50ZWRcIixcbiAgdXJsOiAgXCJodHRwczovL3dhbnRlZGluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvQmVybXVkYS1Nb2xldG9tLVdhbnRlZC1Jbi1Hb2QtV2UtVHJ1c3QtQ2luemEtOTAweDkwMC5qcGdcIixcbiAgZGVzY3JpY2FvOiBcIkJlcm11ZGEgbGluaGEgJ0Jlcm0wMCcsIHRlY2lkbyBjb25mb3J0w6F2ZWwgZGUgYWx0YSBxdWFsaWRhZGUuIGEgU2lrZSBmb2kgY3JpYWRhIGVtIDE5OTggZSBkZXNkZSBlbnTDo28sIHZlbSBmYXplbmRvIHBhcnRlIGRhcyBjdWx0dXJhcyBkZSBydWEgZSB0YW1iw6ltIGRhIGN1bHR1cmEgVEVDSFwiLFxuICBwcmXDp286IDg5LjkwLFxuICBjb2xlY2FvOiBcIkJlcm0wMFwiLFxuICBjb3I6IFwiQ2luemFcIixcbiAgdGFtYW5obzogXCJHXCIsXG4gIGlkOiBcIjE1XCIsXG4gIGZhdjogZmFsc2UsXG59LFxuXVxuY29uc3QgdGVuaXMgPSBbe1xuICB0aXBvOiBcIlTDqm5pc1wiLFxuICBub21lOiBcIk91c1wiLFxuICB0YW1hbmhvOiBcIjQwXCIsXG4gIGNvcjogXCJBenVsL0FtYXJlbG9cIixcbiAgdXJsOiAgXCJodHRwczovL2RpbGx5c3BvcnRzLnZ0ZXhpbWcuY29tLmJyL2FycXVpdm9zL2lkcy8xNzU1MDMtMTAwMC0xMDAwLzM1MDAxNV8yMy0xLmpwZz92PTYzODA0OTgzMDg2MjYzMDAwMFwiLFxuICB1cmxTdWJJbWFnZTogXCJodHRwczovL2RpbGx5c3BvcnRzLnZ0ZXhpbWcuY29tLmJyL2FycXVpdm9zL2lkcy8xNjA1ODktMTAwMC0xMDAwLzM1MDAxNV8yMy0yLmpwZz92PTYzNzg3NDUzNzcxNjIwMDAwMFwiLFxuICBkZXNjcmljYW86IFwiU25lYWNrZXIgU2lrZSwgY29sZcOnw6NvICdTbmVhY2tlcnMwMCcsIGNvbmZvcnTDoXZlbCBlIGVzdGlsb3NvLCBwcmEgcXVlbSBuw6NvIHBvZGUgcGFyYXIgZGUgY29ycmVyLCBjb20gdGVjbm9sb2dpYSBkZSBwYWxtaWxoYSBleHBhbnNpdmEgcXVlIHByZXNlcnZhIGEgc2HDumRlIGRvcyBzZXUgam9lbGhvXCIsXG4gIHByZcOnbzogMTM5LjkwLFxuICBjb2xlY2FvOiBcIlNuZWFja2VyczAwXCIsXG4gIGlkOiBcIjE2XCIsXG4gIGZhdjogZmFsc2UsXG59LFxue1xuICB0aXBvOiBcIlTDqm5pc1wiLFxuICBub21lOiBcIk91c1wiLFxuICB0YW1hbmhvOiBcIjQwXCIsXG4gIGNvcjogXCJCcmFuY28vQXp1bFwiLFxuICB1cmw6ICBcImh0dHBzOi8vZGlsbHlzcG9ydHMudnRleGltZy5jb20uYnIvYXJxdWl2b3MvaWRzLzE3MDc4NC0xMDAwLTEwMDAvVEhVTUJfMzUwMDE1XzI2XzEwMDB4ODAwLmpwZz92PTYzNzk4Nzg0MTE3NDgwMDAwMFwiLFxuICB1cmxTdWJJbWFnZTogXCJodHRwczovL2RpbGx5c3BvcnRzLnZ0ZXhpbWcuY29tLmJyL2FycXVpdm9zL2lkcy8xNzA2NzYtMTAwMC0xMDAwLzM1MDAxNV8yNi0yLmpwZz92PTYzNzk4NzgyOTk1NTU3MDAwMFwiLFxuICBkZXNjcmljYW86IFwiU25lYWNrZXIgU2lrZSwgY29sZcOnw6NvICdTbmVhY2tlcnMwMCcsIGNvbmZvcnTDoXZlbCBlIGVzdGlsb3NvLCBwcmEgcXVlbSBuw6NvIHBvZGUgcGFyYXIgZGUgY29ycmVyLCBjb20gdGVjbm9sb2dpYSBkZSBwYWxtaWxoYSBleHBhbnNpdmEgcXVlIHByZXNlcnZhIGEgc2HDumRlIGRvcyBzZXUgam9lbGhvXCIsXG4gIHByZcOnbzogMTM5LjkwLFxuICBjb2xlY2FvOiBcIlNuZWFja2VyczAwXCIsXG4gIGlkOiBcIjE3XCIsXG4gIGZhdjogZmFsc2UsXG59LFxue1xuICB0aXBvOiBcIlTDqm5pc1wiLFxuICBub21lOiBcIk91c1wiLFxuICB0YW1hbmhvOiBcIjQwXCIsXG4gIGNvcjogXCJCcmFuY29cIixcbiAgdXJsOiAgXCJodHRwczovL2RpbGx5c3BvcnRzLnZ0ZXhpbWcuY29tLmJyL2FycXVpdm9zL2lkcy8xNzE5OTgtMTAwMC0xMDAwL1RIVU1CXzAwMDJfMzUwMDAxXzY5XzEuanBnP3Y9NjM3OTk0NjA3NjM2MTcwMDAwXCIsXG4gIHVybFN1YkltYWdlOiBcImh0dHBzOi8vZGlsbHlzcG9ydHMudnRleGltZy5jb20uYnIvYXJxdWl2b3MvaWRzLzE3MTkyMS0xMDAwLTEwMDAvMzUwMDAxXzY5LTIuanBnP3Y9NjM3OTk0NTQ5Nzc5NjMwMDAwXCIsXG4gIGRlc2NyaWNhbzogXCJTbmVhY2tlciBTaWtlLCBjb2xlw6fDo28gJ1NuZWFja2VyczAwJywgY29uZm9ydMOhdmVsIGUgZXN0aWxvc28sIHByYSBxdWVtIG7Do28gcG9kZSBwYXJhciBkZSBjb3JyZXIsIGNvbSB0ZWNub2xvZ2lhIGRlIHBhbG1pbGhhIGV4cGFuc2l2YSBxdWUgcHJlc2VydmEgYSBzYcO6ZGUgZG9zIHNldSBqb2VsaG9cIixcbiAgcHJlw6dvOiAxMzkuOTAsXG4gIGNvbGVjYW86IFwiU25lYWNrZXJzMDBcIixcbiAgaWQ6IFwiMThcIixcbiAgZmF2OiBmYWxzZSxcbn0sXG57XG4gIHRpcG86IFwiVMOqbmlzXCIsXG4gIG5vbWU6IFwiT3VzXCIsXG4gIHRhbWFuaG86IFwiNDBcIixcbiAgY29yOiBcIk1hcnJvbVwiLFxuICB1cmw6ICBcImh0dHBzOi8vZGlsbHlzcG9ydHMudnRleGltZy5jb20uYnIvYXJxdWl2b3MvaWRzLzE3ODk3NS0xMDAwLTEwMDAvZ29tZXNfd2hpc2t5X2Vzc2VuY2lhbF9sYXRlcmFsLmpwZz92PTYzODEzMjk3OTM0MTEzMDAwMFwiLFxuICB1cmxTdWJJbWFnZTogXCJodHRwczovL2RpbGx5c3BvcnRzLnZ0ZXhpbWcuY29tLmJyL2FycXVpdm9zL2lkcy8xNzg5NzYtMTAwMC0xMDAwL2dvbWVzX3doaXNreV9lc3NlbmNpYWxfc3VwZXJpb3IuanBnP3Y9NjM4MTMyOTc5Mzc4MTcwMDAwXCIsXG4gIGRlc2NyaWNhbzogXCJTbmVhY2tlciBTaWtlLCBjb2xlw6fDo28gJ1NuZWFja2VyczAwJywgY29uZm9ydMOhdmVsIGUgZXN0aWxvc28sIHByYSBxdWVtIG7Do28gcG9kZSBwYXJhciBkZSBjb3JyZXIsIGNvbSB0ZWNub2xvZ2lhIGRlIHBhbG1pbGhhIGV4cGFuc2l2YSBxdWUgcHJlc2VydmEgYSBzYcO6ZGUgZG9zIHNldSBqb2VsaG9cIixcbiAgcHJlw6dvOiAxMzkuOTAsXG4gIHByb21vOiA5Ny45MyxcbiAgY29sZWNhbzogXCJTbmVhY2tlcnMwMFwiLFxuICBpZDogXCIxOVwiLFxuICBmYXY6IGZhbHNlLFxufSxcbntcbiAgdGlwbzogXCJUw6puaXNcIixcbiAgbm9tZTogXCJPdXNcIixcbiAgdGFtYW5obzogXCI0MFwiLFxuICBjb3I6IFwiUHJldG8vQXp1bFwiLFxuICB1cmw6ICBcImh0dHBzOi8vZGlsbHlzcG9ydHMudnRleGltZy5jb20uYnIvYXJxdWl2b3MvaWRzLzE3MjA3My0xMDAwLTEwMDAvVEhVTUJfMDAwM18zNTAwMDFfNzBfMS5qcGc/dj02Mzc5OTk4MjgyNzg3MzAwMDBcIixcbiAgdXJsU3ViSW1hZ2U6IFwiaHR0cHM6Ly9kaWxseXNwb3J0cy52dGV4aW1nLmNvbS5ici9hcnF1aXZvcy9pZHMvMTcxNTQyLTEwMDAtMTAwMC8zNTAwMDFfNzAtMy5qcGc/dj02Mzc5OTI5NjM3MTg5MzAwMDBcIixcbiAgZGVzY3JpY2FvOiBcIlNuZWFja2VyIFNpa2UsIGNvbGXDp8OjbyAnU25lYWNrZXJzMDAnLCBjb25mb3J0w6F2ZWwgZSBlc3RpbG9zbywgcHJhIHF1ZW0gbsOjbyBwb2RlIHBhcmFyIGRlIGNvcnJlciwgY29tIHRlY25vbG9naWEgZGUgcGFsbWlsaGEgZXhwYW5zaXZhIHF1ZSBwcmVzZXJ2YSBhIHNhw7pkZSBkb3Mgc2V1IGpvZWxob1wiLFxuICBwcmXDp286IDEzOS45MCxcbiAgY29sZWNhbzogXCJTbmVhY2tlcnMwMFwiLFxuICBpZDogXCIyMFwiLFxuICBmYXY6IGZhbHNlLFxufSxcbntcbiAgdGlwbzogXCJUw6puaXNcIixcbiAgbm9tZTogXCJPdXNcIixcbiAgdGFtYW5obzogXCI0MFwiLFxuICBjb3I6IFwiQnJhbmNvL0F6dWxcIixcbiAgdXJsOiAgXCJodHRwczovL2RpbGx5c3BvcnRzLnZ0ZXhpbWcuY29tLmJyL2FycXVpdm9zL2lkcy8xNzE5MzktMTAwMC0xMDAwL1RIVU1CXzAwMDNfMzUwMDAxXzY3XzEuanBnP3Y9NjM3OTk0NTUxMDIxODAwMDAwXCIsXG4gIHVybFN1YkltYWdlOiBcImh0dHBzOi8vZGlsbHlzcG9ydHMudnRleGltZy5jb20uYnIvYXJxdWl2b3MvaWRzLzE3MTg3NS0xMDAwLTEwMDAvMzUwMDAxXzY3LTMuanBnP3Y9NjM3OTk0NTQ2ODc3NDMwMDAwXCIsXG4gIGRlc2NyaWNhbzogXCJTbmVhY2tlciBTaWtlLCBjb2xlw6fDo28gJ1NuZWFja2VyczAwJywgY29uZm9ydMOhdmVsIGUgZXN0aWxvc28sIHByYSBxdWVtIG7Do28gcG9kZSBwYXJhciBkZSBjb3JyZXIsIGNvbSB0ZWNub2xvZ2lhIGRlIHBhbG1pbGhhIGV4cGFuc2l2YSBxdWUgcHJlc2VydmEgYSBzYcO6ZGUgZG9zIHNldSBqb2VsaG9cIixcbiAgcHJlw6dvOiAxMzkuOTAsXG4gIGNvbGVjYW86IFwiU25lYWNrZXJzMDBcIixcbiAgaWQ6IFwiMjFcIixcbiAgZmF2OiBmYWxzZSxcbn0sXG57XG4gIHRpcG86IFwiVMOqbmlzXCIsXG4gIG5vbWU6IFwiT3VzXCIsXG4gIHRhbWFuaG86IFwiNDBcIixcbiAgY29yOiBcIlByZXRvL1Jvc2FcIixcbiAgdXJsOiAgXCJodHRwczovL2RpbGx5c3BvcnRzLnZ0ZXhpbWcuY29tLmJyL2FycXVpdm9zL2lkcy8xNzIzNzItMTAwMC0xMDAwL1RIVU1CXzM1MDAwMV80NF9JTUlHUkFOVEUtUFJULVJFRkxFVElWTy1DSElDTEUtRVNTRU5DSUFMLmpwZz92PTYzODAwNDA1MTYzOTUwMDAwMFwiLFxuICB1cmxTdWJJbWFnZTogXCJodHRwczovL2RpbGx5c3BvcnRzLnZ0ZXhpbWcuY29tLmJyL2FycXVpdm9zL2lkcy8xNzE3MjItMTAwMC0xMDAwLzM1MDAwMV80NC0zLmpwZz92PTYzNzk5Mjk3Mjc1NzMzMDAwMFwiLFxuICBkZXNjcmljYW86IFwiU25lYWNrZXIgU2lrZSwgY29sZcOnw6NvICdTbmVhY2tlcnMwMCcsIGNvbmZvcnTDoXZlbCBlIGVzdGlsb3NvLCBwcmEgcXVlbSBuw6NvIHBvZGUgcGFyYXIgZGUgY29ycmVyLCBjb20gdGVjbm9sb2dpYSBkZSBwYWxtaWxoYSBleHBhbnNpdmEgcXVlIHByZXNlcnZhIGEgc2HDumRlIGRvcyBzZXUgam9lbGhvXCIsXG4gIHByZcOnbzogMTM5LjkwLFxuICBjb2xlY2FvOiBcIkVtaWdyYW50ZVwiLFxuICBpZDogXCIyMlwiLFxuICBmYXY6IGZhbHNlLFxufSxcbntcbiAgdGlwbzogXCJUw6puaXNcIixcbiAgbm9tZTogXCJPdXNcIixcbiAgdGFtYW5obzogXCI0MFwiLFxuICBjb3I6IFwiQnJhbmNvXCIsXG4gIHVybDogIFwiaHR0cHM6Ly9kaWxseXNwb3J0cy52dGV4aW1nLmNvbS5ici9hcnF1aXZvcy9pZHMvMTc4NDk0LTEwMDAtMTAwMC9pbWlncmFudGVfYnJhbmNvXzJfb2VfdGh1bWIuanBnP3Y9NjM4MTI4NDYzMDE1ODMwMDAwXCIsXG4gIHVybFN1YkltYWdlOiBcImh0dHBzOi8vZGlsbHlzcG9ydHMudnRleGltZy5jb20uYnIvYXJxdWl2b3MvaWRzLzE3NjEwMC0xMDAwLTEwMDAvMzUwMDAxXzY0LTIuanBnP3Y9NjM4MDcwNTAzMDM2MjMwMDAwXCIsXG4gIGRlc2NyaWNhbzogXCJTbmVhY2tlciBTaWtlLCBjb2xlw6fDo28gJ1NuZWFja2VyczAwJywgY29uZm9ydMOhdmVsIGUgZXN0aWxvc28sIHByYSBxdWVtIG7Do28gcG9kZSBwYXJhciBkZSBjb3JyZXIsIGNvbSB0ZWNub2xvZ2lhIGRlIHBhbG1pbGhhIGV4cGFuc2l2YSBxdWUgcHJlc2VydmEgYSBzYcO6ZGUgZG9zIHNldSBqb2VsaG9cIixcbiAgcHJlw6dvOiAxMzkuOTAsXG4gIGNvbGVjYW86IFwiRW1pZ3JhbnRlXCIsXG4gIGlkOiBcIjIzXCIsXG4gIGZhdjogZmFsc2UsXG59LFxue1xuICB0aXBvOiBcIlTDqm5pc1wiLFxuICBub21lOiBcIk91c1wiLFxuICB0YW1hbmhvOiBcIjQwXCIsXG4gIGNvcjogXCJQcmV0bztDaW56YXNcIixcbiAgdXJsOiAgXCJodHRwczovL2RpbGx5c3BvcnRzLnZ0ZXhpbWcuY29tLmJyL2FycXVpdm9zL2lkcy8xNjY4MDgtMTAwMC0xMDAwLzM1MDAwN18yNS0xLmpwZz92PTYzNzk1NjQzNDk2NDc3MDAwMFwiLFxuICB1cmxTdWJJbWFnZTogXCJodHRwczovL2RpbGx5c3BvcnRzLnZ0ZXhpbWcuY29tLmJyL2FycXVpdm9zL2lkcy8xNjY4MDktMTAwMC0xMDAwLzM1MDAwN18yNS0yLmpwZz92PTYzNzk1NjQzNTAwNTEwMDAwMFwiLFxuICBkZXNjcmljYW86IFwiU25lYWNrZXIgU2lrZSwgY29sZcOnw6NvICdTbmVhY2tlcnMwMCcsIGNvbmZvcnTDoXZlbCBlIGVzdGlsb3NvLCBwcmEgcXVlbSBuw6NvIHBvZGUgcGFyYXIgZGUgY29ycmVyLCBjb20gdGVjbm9sb2dpYSBkZSBwYWxtaWxoYSBleHBhbnNpdmEgcXVlIHByZXNlcnZhIGEgc2HDumRlIGRvcyBzZXUgam9lbGhvXCIsXG4gIHByZcOnbzogMTM5LjkwLFxuICBjb2xlY2FvOiBcIkVtaWdyYW50ZVwiLFxuICBpZDogXCIyNFwiLFxuICBmYXY6IGZhbHNlLFxufSxcbl1cbmNvbnN0IGNhcHMgPSBbe1xuICAgIHRpcG86IFwiYm9uw6lcIixcbiAgICBub21lOiBcIkJvbsOpIFdhbnRlZFwiLFxuICAgIHVybDogIFwiaHR0cHM6Ly93YW50ZWRpbmQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzEyL0JPTkUtUFJFVE8tQUxURVJBRE8tMS05MDB4OTAwLnBuZ1wiLFxuICAgIGRlc2NyaWNhbzogXCJCb27DqSBTaWtlLCBjb2ZvcnTDoXZlbCBlIGVzdGlsb3NvXCIsXG4gICAgcHJlw6dvOiA3NC45MCxcbiAgICBjb2xlY2FvOiBcIkNhcDAwXCIsXG4gICAgY29yOiBcIlByZXRvXCIsXG4gICAgdGFtYW5obzogXCJQXCIsXG4gICAgaWQ6IFwiMjVcIixcbiAgICBmYXY6IGZhbHNlLFxufSxcbntcbiAgICB0aXBvOiBcImJvbsOpXCIsXG4gICAgbm9tZTogXCJCb27DqSBXYW50ZWRcIixcbiAgICB1cmw6ICBcImh0dHBzOi8vd2FudGVkaW5kLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8xMi9CT05FLUJSQU5DTy1BTFRFUkFETy05MDB4OTAwLnBuZ1wiLFxuICAgIGRlc2NyaWNhbzogXCJCb27DqSBTaWtlLCBjb2ZvcnTDoXZlbCBlIGVzdGlsb3NvXCIsXG4gICAgcHJlw6dvOiA3NC45MCxcbiAgICBjb2xlY2FvOiBcIkNhcDAwXCIsXG4gICAgY29yOiBcIkJyYW5jb1wiLFxuICAgIHRhbWFuaG86IFwiUFwiLFxuICAgIGlkOiBcIjI2XCIsXG4gICAgZmF2OiBmYWxzZSxcbn0sXG57XG4gICAgdGlwbzogXCJib27DqVwiLFxuICAgIG5vbWU6IFwiQm9uw6kgV2FudGVkXCIsXG4gICAgdXJsOiAgXCJodHRwczovL3dhbnRlZGluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMTIvQk9ORS1CRUdFLUFMVEVSQURPLTkwMHg5MDAucG5nXCIsXG4gICAgZGVzY3JpY2FvOiBcIkJvbsOpIGZpdmUgcGFuZWxcIixcbiAgICBwcmXDp286IDc0LjkwLFxuICAgIGNvbGVjYW86IFwiQ2FwMDBcIixcbiAgICBjb3I6IFwiQmVnZVwiLFxuICAgIHRhbWFuaG86IFwiUFwiLFxuICAgIGlkOiBcIjI3XCIsXG4gICAgZmF2OiBmYWxzZSxcbn0sXG57XG4gICAgdGlwbzogXCJib27DqVwiLFxuICAgIG5vbWU6IFwiQm9uw6kgV2FudGVkXCIsXG4gICAgdXJsOiAgXCJodHRwczovL3dhbnRlZGluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMTIvRklWRS1CT05FLVBSRVRPLUFMVEVSQURPLTkwMHg5MDAucG5nXCIsXG4gICAgZGVzY3JpY2FvOiBcIkJvbsOpIFNpa2UsIGNvZm9ydMOhdmVsIGUgZXN0aWxvc29cIixcbiAgICBwcmXDp286IDc0LjkwLFxuICAgIGNvbGVjYW86IFwiQ2FwMDBcIixcbiAgICBjb3I6IFwiUHJldG9cIixcbiAgICB0YW1hbmhvOiBcIlBcIixcbiAgICBpZDogXCIyOFwiLFxuICAgIGZhdjogZmFsc2UsXG59LFxue1xuICAgIHRpcG86IFwiYm9uw6lcIixcbiAgICBub21lOiBcIkJvbsOpIFdhbnRlZFwiLFxuICAgIHVybDogIFwiaHR0cHM6Ly93YW50ZWRpbmQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzEyL0ZJVkUtNC05MDB4OTAwLnBuZ1wiLFxuICAgIGRlc2NyaWNhbzogXCJCb27DqSBTaWtlLCBjb2ZvcnTDoXZlbCBlIGVzdGlsb3NvXCIsXG4gICAgcHJlw6dvOiA3NC45MCxcbiAgICBjb2xlY2FvOiBcIkNhcDAwXCIsXG4gICAgY29yOiBcImJyYW5jb1wiLFxuICAgIHRhbWFuaG86IFwiUFwiLFxuICAgIGlkOiBcIjI5XCIsXG4gICAgZmF2OiBmYWxzZSxcbn0sXG57XG4gICAgdGlwbzogXCJib27DqVwiLFxuICAgIG5vbWU6IFwiQm9uw6kgV2FudGVkXCIsXG4gICAgdXJsOiAgXCJodHRwczovL3dhbnRlZGluZC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMTIvRklWRS1CT05FLUFaVUwtQUxURVJBRE8tOTAweDkwMC5wbmdcIixcbiAgICBkZXNjcmljYW86IFwiQm9uw6kgU2lrZSwgY29mb3J0w6F2ZWwgZSBlc3RpbG9zb1wiLFxuICAgIHByZcOnbzogNzQuOTAsXG4gICAgcHJvbW86IDUyLjQzLFxuICAgIGNvbGVjYW86IFwiQ2FwMDBcIixcbiAgICBjb3I6IFwiQXp1bFwiLFxuICAgIHRhbWFuaG86IFwiUFwiLFxuICAgIGlkOiBcIjMwXCIsXG4gICAgZmF2OiBmYWxzZSxcbn0sXG5dXG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICB7XG4gICAgcGF0aDpcIi9cIixcbiAgICBlbGVtZW50OiA8QXBwLz4sXG4gICAgY2hpbGRyZW46W1xuICAgICAge3BhdGg6IFwiSG9tZVwiLCBlbGVtZW50OiA8SG9tZS8+fSxcbiAgICAgIHtwYXRoOiBcIkNhbWlzYXNcIiwgZWxlbWVudDogPENhbWlzYXMgZGF0YT17Y2FtaXNhc30vPn0sXG4gICAgICB7cGF0aDogXCJGb290V2VhclwiLCBlbGVtZW50OiA8Rm9vdFdlYXIgZGF0YT17dGVuaXN9Lz59LFxuICAgICAge3BhdGg6IFwiSGVhZFdlYXJcIiwgZWxlbWVudDogPEhlYWRXZWFyIGRhdGE9e2NhcHN9Lz59LFxuICAgICAge3BhdGg6IFwiQmVybXVkYXNcIiwgZWxlbWVudDogPEJlcm11ZGFzIGRhdGE9e2Jlcm11ZGFzfS8+fSxcbiAgICAgIHtwYXRoOiBcIkZhdm9yaXRlc1wiLCBlbGVtZW50OiA8RmF2b3JpdG9zLz59LFxuICAgIF1cbiAgfVxuXSlcblxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgPENhcnJpbmhvUHJvdmlkZXI+XG4gICAgICAgIDxGYXZvcml0b1Byb3ZpZGVyPlxuICAgICAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9Lz5cbiAgICAgICAgPC9GYXZvcml0b1Byb3ZpZGVyPlxuICAgICAgPC9DYXJyaW5ob1Byb3ZpZGVyPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuKSJdfQ==