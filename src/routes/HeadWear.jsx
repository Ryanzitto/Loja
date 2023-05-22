import React from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Footer from "../components/Footer";
import Favoritar from "../components/FavButton";
import Adcionar from "../components/AddButton";
import Especificacoes from "../components/Especificacoes";
import ButtonVisualizar from "../components/Button";
import { useContext } from "react";
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
    margin-left: 50px;
  }
`;
const ContainerProduto = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
    animation: anime 1s both;
    @keyframes anime {
      to {
        background-color: #222222eb;
        color: white;
        border: none;
      }
    }
  }
`;
const HeadWear = ({ data }) => {
  const { defineItem, isOpen, qualItem } = useContext(DetalhesContext);

  return (
    <Containergeral>
      {isOpen ? <Especificacoes item={qualItem} /> : null}
      <Nav>
        <Sidebar />
      </Nav>
      <Container>
        {data.map((item) => {
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

export default HeadWear;
