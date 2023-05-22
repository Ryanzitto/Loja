import styled from "styled-components";
import { useEffect, useState } from "react";
const ProdutoContainer = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 100px;
  @media screen and (max-width: 1250px) {
    margin-left: 0px;
  }
`;

const SubContainer = styled.div`
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitulo = styled.h2`
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid #e2e2e2;
  color: #222222eb;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    animation: animaTexto 1s both;
  }
`;

const Div = styled.div`
  position: relative;
  cursor: none;
  background-position: center;
`;

const ImagemPrincipal = styled.img`
  width: 350px;
  height: 350px;
  margin-top: 4px;
  &:hover {
    box-shadow: 0 0 3px #c2bfbfeb;
  }
`;

const Magnify = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  border: 2px solid white;
  width: 120px;
  height: 120px;
  background-size: 500%;
  background-position: center;
  pointer-events: none;
  border-radius: 50%;
  display: none;
  transform: scale(0);
  animation: scaleUp 500ms ease-in forwards;

  @keyframes scaleUp {
    0% {
      transform: scale(0);
    }
    90% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const ProdContainer = ({ produtoAtual, id }) => {
  const [magnifyStyle, setMagnifyStyle] = useState({
    backgroundImage: `url(${produtoAtual.url})`,
  });
  useEffect(() => {
    setMagnifyStyle({ backgroundImage: `url(${produtoAtual.url})` });
  }, [id]);
  const handleMouseMove = (event) => {
    const { offsetX, offsetY, target } = event.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    const xPercentage = (offsetX / offsetWidth) * 100;
    const yPercentage = (offsetY / offsetHeight) * 100;

    setMagnifyStyle((prev) => ({
      ...prev,
      display: "block",
      top: `${offsetY - 50}px`,
      left: `${offsetX - 65}px`,
      backgroundPosition: `${xPercentage}% ${yPercentage}% `,
    }));
  };

  const handleMouseLeave = (event) => {
    setMagnifyStyle((prev) => ({ ...prev, display: "none" }));
  };
  return (
    <ProdutoContainer>
      <HeaderContainer>
        <SubContainer>
          <SubTitulo>
            {produtoAtual.nome} - {produtoAtual.colecao}
          </SubTitulo>
        </SubContainer>
        <SubContainer>
          <SubTitulo>{produtoAtual.preço.toFixed(2)} R$</SubTitulo>
        </SubContainer>
      </HeaderContainer>

      <Div>
        <ImagemPrincipal
          src={produtoAtual.url}
          draggable="false"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
        <Magnify style={magnifyStyle}></Magnify>
      </Div>
    </ProdutoContainer>
  );
};

export default ProdContainer;
