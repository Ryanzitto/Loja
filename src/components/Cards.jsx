import styled from "styled-components";

const ContainerGeral = styled.div`
  width: 100vw;
  display: flex;
`;
const Container = styled.div`
  margin-top: 30px;
  height: 150px;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Card = styled.div`
  height: 120px;
  width: 100px;
  border: 1px solid #e2e2e2;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -1px 5px #c8c6c97b;
  cursor: pointer;
  &:hover {
    animation: animate 1s infinite ease alternate;
    @keyframes animate {
      to {
        transform: translateY(10px);
      }
    }
  }
`;
const CardImage = styled.img`
  height: 60px;
  width: 60px;
  margin-top: 20px;
  &:hover {
    animation: animacard 1s both;
    @keyframes animacard {
      to {
      }
    }
  }
`;
const CardFooter = styled.div`
  background-color: #a840c2;
  height: 25px;
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #a840c2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #732c86;
    border: 1px solid #732c86;
  }
`;
const CardName = styled.h1`
  color: white;
  font-size: 12px;
  letter-spacing: 2px;
`;

const Cards = () => {
  return (
    <ContainerGeral>
      <Container>
        <Card>
          <CardImage src="/img/tshirt.png" />
          <CardFooter>
            <CardName>ROUPAS</CardName>
          </CardFooter>
        </Card>
        <Card>
          <CardImage src="/img/shoes2.png" />
          <CardFooter>
            <CardName>CALÇADOS</CardName>
          </CardFooter>
        </Card>
        <Card>
          <CardImage src="/img/eyeglasses.png" />
          <CardFooter>
            <CardName>ACESSÓRIOS</CardName>
          </CardFooter>
        </Card>
        <Card>
          <CardImage src="/img/smartphone.png" />
          <CardFooter>
            <CardName>ELETROS</CardName>
          </CardFooter>
        </Card>
        <Card>
          <CardImage src="/img/sofa.png" />
          <CardFooter>
            <CardName>MÓVEIS</CardName>
          </CardFooter>
        </Card>
        <Card>
          <CardImage src="/img/weightlifting.png" />
          <CardFooter>
            <CardName>FITNESS</CardName>
          </CardFooter>
        </Card>
        <Card>
          <CardImage src="/img/sport-team.png" />
          <CardFooter>
            <CardName>SPORTS</CardName>
          </CardFooter>
        </Card>
        <Card>
          <CardImage src="/img/books.png" />
          <CardFooter>
            <CardName>LIVROS</CardName>
          </CardFooter>
        </Card>
      </Container>
    </ContainerGeral>
  );
};

export default Cards;
