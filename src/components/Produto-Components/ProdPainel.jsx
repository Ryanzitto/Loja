import styled from "styled-components";
import Favoritar from "../FavButton";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart, openCart } from "../../redux/cart/actions";

const PainelContainer = styled.div`
  width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  @media screen and (max-width: 1250px) {
    margin-left: 0px;
  }
`;
const HeaderPainel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e2e2e2;
  height: 75px;
  border-radius: 3px;
`;
const PreçoProduto = styled.h3`
  font-size: 28px;
  color: #a840c2;
  padding: 2px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

const BodyPainel = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  margin-top: 20px;
  gap: 20px;
`;
const Section = styled.div``;

const Select = styled.select`
  width: 100px;
  height: 30px;
  appearance: none;
  border: 1px solid #222222eb;
  background-color: white;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #222222eb;
  border-radius: 2px;
  letter-spacing: 1px;
  &:focus {
    outline: none;
  }
`;
const Option = styled.option`
  background-color: white;
`;
const TamanhoContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Tamanho = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 2px;
  border: 1px solid #222222eb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #222222eb;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background-color: #a840c2;
    color: white;
    border: 1px solid #a840c2;
  }
`;

const SectionRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ButtonAdcionar = styled.button`
  width: 150px;
  height: 50px;
  background-color: #222222eb;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.8px;
  color: white;
  border: 1px solid #222222eb;
  border-radius: 2px;
  animation: animationBtnBlackOut 1s both;
  @keyframes animationBtnBlackOut {
    from {
      background-color: #a840c2;
      border: none;
      border-top-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    to {
      background-color: #222222eb;
    }
  }
  &:hover {
    animation: animationBtnBlack 1s both;
    @keyframes animationBtnBlack {
      from {
        background-color: #222222eb;
      }
      to {
        background-color: #a840c2;
        border: none;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
`;

const ContainerFavorite = styled.div`
  display: flex;
  height: 30px;
  background-color: pink;
  position: relative;
`;

const SectionCEP = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

const InputCEP = styled.input`
  width: 120px;
  height: 43px;
  border: 1px solid #222222eb;
  font-size: 20px;
  letter-spacing: 1px;
  text-align: center;
  border-radius: 2px;
  &:focus {
    outline: none;
  }
`;

const ButtonCEP = styled.button`
  width: 150px;
  height: 50px;
  background-color: #222222eb;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.8px;
  color: white;
  border: 1px solid #222222eb;
  border-radius: 2px;
  animation: animationBtnBlackOut 1s both;

  &:hover {
    animation: animationBtnBlack 1s both;
  }
`;

const FooterPainel = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  margin-top: 20px;
  gap: 3px;
`;

const tamanhoClicked = {
  backgroundColor: "#a840c2",
  color: "white",
  width: "37px",
  height: "37px",
  border: "transparent",
};

const Paragraph = styled.p`
  font-weight: 500;
  color: #222222eb;
  letter-spacing: 0.5px;
`;

const ProdPainel = ({ produtoAtual }) => {
  const [tamanhoSelecionado, settamanhoSelecionado] = useState(null);

  const [mensagemErro, setMensagemErro] = useState(null);

  const dispatch = useDispatch();

  const teste = (e) => {
    (e) => e.target.value;
    console.log(e);
  };

  const handleClick = () => {
    if (produtoAtual.tamanhosDisp && tamanhoSelecionado != null) {
      setMensagemErro("");
      produtoAtual.variacao = {
        tamanho: tamanhoSelecionado,
        cor: null,
      };
      dispatch(addProductToCart(produtoAtual));
      dispatch(openCart());
    } else {
      setMensagemErro("Escolha um tamanho!");
    }
  };

  // if (tamanhoSelecionado != null) {
  //   setMensagemErro(null);
  //   produtoAtual.variacao = {
  //     tamanho: tamanhoSelecionado,
  //   };
  //   dispatch(addProductToCart(produtoAtual));
  // } else {
  //   setMensagemErro("É obrigatorio selecionar tamanho.");
  // }
  console.log(produtoAtual);

  const handleClickActionFigure = () => {
    produtoAtual.variacao = {
      tamanho: null,
      cor: null,
    };
    dispatch(addProductToCart(produtoAtual));
  };
  return (
    <PainelContainer>
      <HeaderPainel>
        <PreçoProduto>{produtoAtual.preço.toFixed(2)} R$</PreçoProduto>
      </HeaderPainel>
      <BodyPainel>
        <Section>
          <TamanhoContainer>
            {produtoAtual.tamanhosDisp?.map((item) => (
              <Tamanho
                key={item}
                style={tamanhoSelecionado === item ? tamanhoClicked : null}
                onClick={() => {
                  settamanhoSelecionado(item);
                }}
              >
                {item}
              </Tamanho>
            ))}
          </TamanhoContainer>
        </Section>
        <SectionRow style={{ marginRight: "40px" }}>
          {produtoAtual.tipo === "Vestuario" ? (
            <ButtonAdcionar onClick={handleClick}>ADCIONAR</ButtonAdcionar>
          ) : null}
          {produtoAtual.tipo === "Action Figure" ? (
            <ButtonAdcionar onClick={handleClickActionFigure}>
              ADCIONAR
            </ButtonAdcionar>
          ) : null}

          <ContainerFavorite>
            <Favoritar item={produtoAtual} />
          </ContainerFavorite>
        </SectionRow>
        <p style={{ marginTop: "10px", color: "red" }}>{mensagemErro}</p>
        <SectionCEP style={{ marginTop: "-20px" }}>
          <InputCEP placeholder="00000-000"></InputCEP>
          <ButtonCEP style={{ height: "45px" }}>CALCULAR</ButtonCEP>
        </SectionCEP>
      </BodyPainel>
      {tamanhoSelecionado != null ? (
        <FooterPainel>
          {tamanhoSelecionado != null && (
            <Paragraph> Cor Selecionada: {tamanhoSelecionado}</Paragraph>
          )}
        </FooterPainel>
      ) : null}
    </PainelContainer>
  );
};

export default ProdPainel;
