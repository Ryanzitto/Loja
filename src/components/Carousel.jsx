import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 8px;
`;
const MensagemCadastroContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #111111eb;
  position: absolute;
  z-index: 1;
  align-self: flex-start;
  margin-left: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ContainerMensagem = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ContainerCadastroLogin = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;
const CadastroBtn = styled.p`
  font-size: 12px;
  color: white;
  cursor: pointer;
  letter-spacing: 2px;
  &:hover {
    opacity: 0.6;
  }
`;
const LoginBtn = styled.p`
  font-size: 12px;
  color: white;
  cursor: pointer;
  margin-right: 50px;
  letter-spacing: 2px;
  &:hover {
    opacity: 0.6;
  }
`;
const Barra = styled.p`
  font-size: 12px;
  color: white;
  cursor: pointer;
`;
const Mensagem = styled.p`
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  margin-left: 30px;
  animation: animaMensagem 3s infinite ease alternate;

  @keyframes animaMensagem {
    to {
      transform: translateX(150px);
    }
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50px;
`;
const ButtonAnterior = styled.img`
  position: absolute;
  cursor: pointer;
  opacity: 0.4;
  margin-left: 950px;

  &:hover {
    opacity: 0.9;
  }

  @media only screen and (max-width: 1250px) {
    margin-left: 800px;
  }

  @media only screen and (max-width: 1050px) {
    margin-left: 600px;
  }
  @media only screen and (max-width: 800px) {
    margin-top: 300px;
    margin-left: 100px;
  }
  @media only screen and (min-width: 1750px) {
    margin-left: 1300px;
  }
`;
const ButtonProximo = styled.img`
  position: absolute;
  transform: rotate(0.5turn);
  cursor: pointer;
  opacity: 0.4;
  margin-right: 950px;

  &:hover {
    opacity: 0.9;
  }
  @media only screen and (max-width: 1250px) {
    margin-right: 800px;
  }

  @media only screen and (max-width: 1050px) {
    margin-right: 600px;
  }
  @media only screen and (max-width: 800px) {
    margin-top: 300px;
    margin-right: 100px;
  }
  @media only screen and (min-width: 1750px) {
    margin-right: 1300px;
  }
`;
const Image = styled.img`
  height: 450px;
  width: 1250px;
  filter: grayscale(0.5);

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 1550px) {
    height: 550px;
    width: 1550px;
  }
  @media only screen and (min-width: 1850px) {
    height: 550px;
    width: 1750px;
  }
`;
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex =
        currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <Container>
      <ImageContainer>
        <MensagemCadastroContainer>
          <ContainerMensagem>
            <Mensagem>Cadastre-se e ganhe um cupom de 15% OFF</Mensagem>
          </ContainerMensagem>
          <ContainerCadastroLogin>
            <Link
              to="/Register"
              style={{ display: "flex", textDecoration: "none", gap: "15px" }}
            >
              <CadastroBtn> Cadastre-se</CadastroBtn>
              <Barra>-</Barra>
              <LoginBtn>Login</LoginBtn>
            </Link>
          </ContainerCadastroLogin>
        </MensagemCadastroContainer>
        <Image src={images[currentIndex]} alt="carousel" />
        <ButtonAnterior src="./img/sym.png" onClick={previousSlide} />
        <ButtonProximo src="./img/sym.png" onClick={nextSlide} />
      </ImageContainer>
    </Container>
  );
};

export default Carousel;
