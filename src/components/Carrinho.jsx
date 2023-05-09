import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  closeCart,
  increaseProductQuantity,
  removeProductFromCart,
  decreaseProductQuantity,
} from "../redux/cart/actions";

const ContainerGeral = styled.div`
  width: 20vw;
  min-height: 100%;
  background-color: #ffffff;
  border-right: 1px solid #e2e2e2;
  display: flex;
  animation: animacaoDeEntrada 0.5s ease;
  flex-direction: column;
  z-index: 1;

  @keyframes animacaoDeEntrada {
    from {
      margin-right: 500px;
    }
    to {
      margin-right: 0px;
    }
  }

  @media only screen and (min-width: 1000px) and (max-width: 1250px) {
    width: 400px;
  }

  @media only screen and (min-width: 800px) and (max-width: 999px) {
    width: 400px;
    height: 500px;
    margin-top: 270px;
    position: absolute;
  }
  @media only screen and (max-width: 799px) {
    width: 400px;
    height: 500px;
    margin-top: 500px;
    position: absolute;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
`;
const BtnClose = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
`;
const Body = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
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
`;
const TopBody = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 799px) {
    margin-left: 0px;
  }
`;
const Titulo = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #5a5a5a;
`;
const Estado = styled.p`
  font-size: 16px;
  text-align: center;
  color: #5a5a5a;
`;

const ItemContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  border-top: 1px solid #e2e2e2;
  margin-top: 5px;
  gap: 5px;
`;
const ImagemContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
const ImagemProduto = styled.img`
  width: 100px;
  height: 100px;
  gap: 10px;

  @media only screen and (min-width: 1000px) and (max-width: 1250px) {
    margin-left: 100px;
  }
  @media only screen and(max-width: 999px) {
    margin-left: 0;
  }
`;
const Infos = styled.div`
  width: 50%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 10px;
  gap: 2px;

  @media only screen and (max-width: 1250px) {
    width: 200px;
    margin-left: 20px;
  }
`;
const Nome = styled.h1`
  font-size: 14px;
`;
const Colecao = styled.p`
  color: #0f0f0f;
  font-weight: 600;
  font-size: 12px;
`;
const QuantidadeContainer = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const Decremento = styled.p`
  width: 10px;
  font-size: 30px;
  cursor: pointer;
`;
const Incremento = styled.p`
  width: 10px;
  font-size: 20px;
  cursor: pointer;
`;
const Quantidade = styled.p`
  font-size: 18px;
`;
const Preço = styled.p`
  color: #eb2929;
  font-weight: 600;
  font-size: 14px;
`;
const IconeDescarte = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin-top: 80px;
  margin-right: 10px;

  @media only screen and (max-width: 1400px) {
    margin-left: 20px;
  }
`;
const SubtotalContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e2e2e2;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 999px) {
    padding-bottom: 20px;
  }

  @media only screen and (min-width: 1000px) and (max-width: 1250px) {
    margin-left: 50px;
    padding-bottom: 20px;
  }
`;
const Subtotal = styled.h1`
  font-size: 20px;
  color: black;
  cursor: pointer;
  padding-top: 5px;
`;
const Finalizar = styled.button`
  width: 120px;
  height: 40px;
  cursor: pointer;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
`;
const Carrinho = () => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const dispatch = useDispatch();

  const handleClickCart = () => {
    dispatch(closeCart());
  };

  return (
    <ContainerGeral>
      <Header>
        <BtnClose onClick={handleClickCart} src="./img/close.png" />
      </Header>
      <Body>
        {products.length < 1 ? (
          <TopBody>
            <Titulo>Carrinho</Titulo>
            <Estado>Nenhum item ainda, vá comprar!</Estado>
          </TopBody>
        ) : null}
        {products.map((indice) => {
          return (
            <ItemContainer key={indice.id}>
              <ImagemContainer>
                <ImagemProduto src={indice.url} />
              </ImagemContainer>
              <Infos>
                <Nome>{indice.nome}</Nome>
                <Colecao>{indice.colecao}</Colecao>
                <QuantidadeContainer>
                  <Decremento
                    onClick={() => {
                      dispatch(decreaseProductQuantity(indice.id));
                    }}
                  >
                    -
                  </Decremento>
                  <Quantidade>{indice.quantity}</Quantidade>
                  <Incremento
                    onClick={() => {
                      dispatch(increaseProductQuantity(indice.id));
                    }}
                  >
                    +
                  </Incremento>
                </QuantidadeContainer>
                <Preço>{`${indice.preço.toFixed(2)} R$`}</Preço>
              </Infos>
              <IconeDescarte
                onClick={() => {
                  dispatch(removeProductFromCart(indice.id));
                }}
                src="./img/trash.png"
              />
            </ItemContainer>
          );
        })}
      </Body>
      {products.length > 0 ? (
        <SubtotalContainer>
          <Link to="/Checkout">
            <Finalizar
              onClick={() => {
                toggleCheckoutEstado();
              }}
            >
              Finalizar Compra
            </Finalizar>
          </Link>
        </SubtotalContainer>
      ) : null}
    </ContainerGeral>
  );
};

export default Carrinho;
