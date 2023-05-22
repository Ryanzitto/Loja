import styled from "styled-components";

const ContainerGeral = styled.div`
  height: 400px;
  display: flex;
  align-items: end;
  justify-content: end;
`;
const ContainerBanner = styled.div`
  display: flex;
  align-items: end;
  width: 80vw;
  height: 320px;
  background: linear-gradient(to right, #a840c2, 30%, #711c86);
  justify-content: space-around;
`;
const ContainerImg = styled.div`
  display: flex;
  align-items: end;
  width: 30%;
  position: relative;
  height: 100%;
`;
const ImagePng = styled.img`
  width: 250px;
  height: 375px;
  position: absolute;
  animation: animaEntradaImg 2s ease;
  padding-left: 100px;
  filter: grayscale(0.9);
  @keyframes animaEntradaImg {
    from {
      margin-left: -200px;
    }
    to {
    }
  }
`;
const TextoContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Titulo = styled.h1`
  color: white;
  font-size: 50px;
  letter-spacing: 2px;
  margin-top: 50px;
  animation: animaTextoBanner 2s ease;
  @keyframes animaTextoBanner {
    from {
      margin-left: 300px;
    }
    to {
      margin-left: 0;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`;
const Texto = styled.p`
  margin-top: 20px;
  color: white;
  font-size: 30px;
  letter-spacing: 1px;
  width: 450px;
  font-weight: 600;
  animation: animaTextoBanner 2s ease;
  &:hover {
    opacity: 0.8;
  }
`;

const Banner = () => {
  return (
    <ContainerGeral>
      <ContainerBanner>
        <ContainerImg>
          <ImagePng src="/img/img-pessoa.png" />
        </ContainerImg>
        <TextoContainer>
          <Titulo>Fácil assim!</Titulo>
          <Texto>
            Parcele em até 6X sem juros no cartão! com poucos cliques a compra é
            confirmada e enviada pra você.
          </Texto>
        </TextoContainer>
      </ContainerBanner>
    </ContainerGeral>
  );
};

export default Banner;
