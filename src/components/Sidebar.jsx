import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import React from "react";
import styled from "styled-components";

import Carrinho from "./Carrinho";

import { useSelector, useDispatch } from "react-redux";
import { openCart } from "../redux/cart/actions";

const linkStyle = {
  textDecoration: "none",
  color: "black",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Container = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #e2e2e2;
  position: fixed;
  z-index: 1;

  @media only screen and (min-width: 801px) and (max-width: 1000px) {
    width: 100vw;
    height: 20vh;
    flex-direction: row;
    position: relative;
    background-color: transparent;
  }
  @media only screen and (max-width: 800px) {
    width: 100vw;
    height: 0px;
    flex-direction: row;
    border-bottom: none;
    background-color: transparent;
    position: relative;
  }
`;
const LogoContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media only screen and (min-width: 801px) and (max-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 800px) {
    width: 50%;
    display: none;
  }
  @media only screen and (min-width: 1600px) {
    height: 200px;
  }
`;

const ListNav = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 100%;
  }
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 10px;
    height: 100%;
    margin-top: 75px;
    gap: 20px;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 80px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
  @media only screen and (min-width: 1600px) {
    width: 150px;
    height: 120px;
    margin-top: 10px;
  }
`;
const Section = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    width: 100px;
  }
`;
const Icon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-left: 20px;
  display: none;
  @media only screen and (max-width: 1000px) {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
  }
`;
const Texto = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #222222eb;
  letter-spacing: 1px;
  padding: 5px 15px;
  border-radius: 3px;
  &:hover {
    animation: animaTexto3 1s both;
    @keyframes animaTexto3 {
      to {
        background-color: #a840c2a7;
        color: white;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 22px;
  }
`;
const SectionIcons = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  position: relative;

  @media only screen and (max-width: 800px) {
    border: none;
    margin-top: 0px;
    align-items: flex-start;
    justify-content: flex-end;
    margin-right: 20px;
  }
`;

const DivIcone = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 800px) {
  }

  @media only screen and (max-width: 1000px) {
  }
  @media only screen and (min-width: 1500px) {
  }
`;
const Icone = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    margin-top: 100px;
  }
  @media only screen and (max-width: 1000px) {
    width: 35px;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    padding: 15px;
  }
`;
const AlertaContainer = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-right: 40px;
  margin-bottom: 30px;
  background-color: red;
`;
const Alerta = styled.p`
  color: white;
  margin-top: 3px;
`;
const Sidebar = () => {
  const { favorito } = useContext(FavoritosContext);

  const dispatch = useDispatch();

  const { cartIsOpen } = useSelector((rootReducer) => rootReducer.cartReducer);
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const handleClickCart = () => {
    dispatch(openCart());
  };

  return (
    <Container>
      {cartIsOpen ? <Carrinho /> : null}
      <LogoContainer>
        <Link to="/" style={linkStyle}>
          <Logo src="./img/logo.jfif" />
        </Link>
      </LogoContainer>
      <ListNav>
        {/* <Link to="/Perfil" style={linkStyle}>
          <Section>
            <Icon src="./img/account.png" />
            <Texto>Perfil</Texto>
          </Section>
        </Link> */}
        <Link to="/" style={linkStyle}>
          <Section>
            <Icon src="./img/house.png" />
            <Texto>Inicio</Texto>
          </Section>
        </Link>
        <Link to="/Vestuario" style={linkStyle}>
          <Section>
            <Icon src="./img/shirt.png" />
            <Texto>Vestuário</Texto>
          </Section>
        </Link>
        <Link to="/ActionFigure" style={linkStyle}>
          <Section>
            <Icon src="./img/shorts.png" />
            <Texto>Action F.</Texto>
          </Section>
        </Link>
        <Link to="/Acessorios" style={linkStyle}>
          <Section>
            <Icon src="./img/shoes.png" />
            <Texto>Acessórios</Texto>
          </Section>
        </Link>
        {/* <Link to="/HeadWear" style={linkStyle}>
          <Section>
            <Icon src="./img/cap.png" />
            <Texto>Bonés</Texto>
          </Section>
        </Link> */}
      </ListNav>
      <SectionIcons>
        <DivIcone>
          <Icone onClick={handleClickCart} src="./img/add.png" />
          {products.length > 0 ? (
            <AlertaContainer>
              <Alerta>{products.length}</Alerta>
            </AlertaContainer>
          ) : null}
        </DivIcone>
        <DivIcone>
          <Link to="/Favorites" style={linkStyle}>
            <Icone src="./img/heart-empty.png" />
            {favorito.length > 0 ? (
              <AlertaContainer>
                <Alerta>{favorito.length}</Alerta>
              </AlertaContainer>
            ) : null}
          </Link>
        </DivIcone>
      </SectionIcons>
    </Container>
  );
};

export default Sidebar;
