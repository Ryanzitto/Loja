import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Footer from "../components/Footer";
import Especificacoes from "../components/Especificacoes";
import { DetalhesContext } from "../context/DetalhesContext";
import { Link } from "react-router-dom";
import ButtonDefault from "../components/Button";
import ButtonVisualizar from "../components/Button";
import { set } from "react-hook-form";

const Containergeral = styled.div`
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
  width: 20vw;
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
    margin-left: 30px;
  }
`;
const ContainerProduto = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
  margin-top: 20px;
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
  position: relative;
`;
const ImagemProduto = styled.img`
  background-color: white;
  position: relative;
`;

const Colecao = styled.p`
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
  width: 250px;
  color: #222222eb;
  font-weight: 500;
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

const Header = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
`;
const ContainerBtn = styled.div`
  display: flex;
  height: 100%;
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
  letter-spacing: 1px;
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

const Vestuario = ({ data }) => {
  const { defineItem, isOpen, qualItem } = useContext(DetalhesContext);

  const [produtoFiltrado, setProdutoFiltrado] = useState(data);

  const [tipoRenderizado, setTipoRenderizado] = useState("Todos");

  const handleClickMoletom = () => {
    setProdutoFiltrado(data.filter((item) => item.subTipo === "Moletom"));
    setTipoRenderizado("Moletom");
  };

  const handleClickCamisa = () => {
    setProdutoFiltrado(data.filter((item) => item.subTipo === "Camisa"));
    setTipoRenderizado("Camisa");
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
              style={tipoRenderizado === "Moletom" ? TipoClick : null}
              onClick={handleClickMoletom}
            >
              Moletom
            </Button>
            <Button
              style={tipoRenderizado === "Camisa" ? TipoClick : null}
              onClick={handleClickCamisa}
            >
              Camiseta
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

export default Vestuario;
