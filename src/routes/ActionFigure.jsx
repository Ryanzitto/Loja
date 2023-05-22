import React from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Footer from "../components/Footer";
import ButtonVisualizar from "../components/Button";
import Especificacoes from "../components/Especificacoes";

import { useState, useContext } from "react";
import { DetalhesContext } from "../context/DetalhesContext";
import { Link } from "react-router-dom";

const Containergeral = styled.div`
  display: flex;
  width: 100vw;
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
    border-radius: 5px;
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Nav = styled.div`
  width: 18vw;
  height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    width: 100vw;
  }
  @media only screen and (min-width: 1000px) {
    margin-left: 52px;
  }
`;
const ContainerProduto = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: animaProduto 2s ease;
  @keyframes animaProduto {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Produto = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const ImagemProduto = styled.img`
  cursor: pointer;
`;
const Colecao = styled.p`
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
  width: 300px;
`;
const PreçoProduto = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 5px;
  color: #a840c2;
  padding: 2px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
const ContainerBotoes = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 120px;
  height: 20px;
  gap: 10px;
`;

const Vizualizar = styled.button`
  width: 100px;
  height: 30px;
  border: 1.5px solid#222222eb;
  background-color: #ffffffec;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 30px;
  letter-spacing: 0.5px;
  color: #0f0f0feb;
  &:hover {
    animation: anime 1s both ease;
  }
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
`;
const ContainerBtn = styled.div`
  display: flex;
  height: 100%;
  width: 300px;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 100px;
  height: 25px;
  border: 1.5px solid #222222eb;
  color: #222222eb;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1.5px;
  &:hover {
    animation: animacaoHover 500ms ease both;
    @keyframes animacaoHover {
      to {
        border: 1.5px solid #a840c2;
        color: #a840c2;
      }
    }
  }
`;
const TipoClick = {
  backgroundColor: "#a840c2",
  border: "1.5px solid #a840c2",
  color: "white",
};
const ActionFigure = ({ data }) => {
  const { defineItem, isOpen, qualItem } = useContext(DetalhesContext);

  const [produtoFiltrado, setProdutoFiltrado] = useState(data);

  const [tipoRenderizado, setTipoRenderizado] = useState("Todos");

  const handleClickHeroi = () => {
    setProdutoFiltrado(data.filter((item) => item.subTipo === "Heroi"));
    setTipoRenderizado("Heroi");
  };

  const handleClickAnime = () => {
    setProdutoFiltrado(data.filter((item) => item.subTipo === "Anime"));
    setTipoRenderizado("Anime");
  };
  const handleClickTodos = () => {
    setProdutoFiltrado(data);
    setTipoRenderizado("Todos");
  };

  return (
    <Containergeral>
      {isOpen ? <Especificacoes item={qualItem} /> : null}
      <Nav>
        <Sidebar />
      </Nav>
      <Container>
        <Header>
          <ContainerBtn>
            <Button
              style={tipoRenderizado === "Anime" ? TipoClick : null}
              onClick={handleClickAnime}
            >
              Anime
            </Button>
            <Button
              style={tipoRenderizado === "Heroi" ? TipoClick : null}
              onClick={handleClickHeroi}
            >
              Marvel/DC
            </Button>
          </ContainerBtn>
        </Header>
        {produtoFiltrado.map((item) => {
          return (
            <ContainerProduto key={item.id}>
              <Produto>
                <ImagemProduto src={item.url} />
              </Produto>
              <Colecao>{item.colecao}</Colecao>
              <PreçoProduto>{item.preço.toFixed(2)} R$</PreçoProduto>
              <Link to={`/Produto/${item.id}`}>
                <ButtonVisualizar />
              </Link>
            </ContainerProduto>
          );
        })}
        <Footer />
      </Container>
    </Containergeral>
  );
};

export default ActionFigure;
