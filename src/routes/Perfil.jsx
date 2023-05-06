import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { useSelector} from 'react-redux'

const ContainerPai = styled.div`
width: 100vw;
height: 100vh;
display: flex;
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
@media screen and (max-width: 1000px){
flex-direction: column;
}
`
const ContainerGeral = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: flex-end;
@media screen and (max-width: 1000px){
width: 100vw;
}
`
const SidebarContainer = styled.div`
width: 20vw;
height:100vh;
position: relative;

@media screen and (min-width: 801px) and (max-width: 1000px){
width: 100vw;
height: 20vh;
}
@media screen and (max-width: 800px){
height: 0;
}
`

const Header = styled.div`
width: 100%;
height: 200px;
background-color: #111111f1;
display: flex;
align-items: center;
justify-content: center;;
`

const TituloContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 650px;
`
const HeaderTitulo = styled.h1`
font-size: 70px;
color: white;
@media screen and (max-width: 500px) {
font-size: 40px;
}
`
const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
const Historico = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 20px;
`
const HeaderHistorico = styled.div`
width: 100%;
height: 20%;
display: flex;
justify-content: center;
align-items: center;
`
const SubTitulo = styled.h2`
background-color: #131313f0;
font-size: 30px;
color: white;
padding: 10px;
letter-spacing: 2px;
`
const HistoricoBody = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const ItemContainer = styled.div`
width: 50%;
height: 100px;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 10px;
border-bottom: 1px solid black;

@media screen and (min-width: 600px) and (max-width: 900px){
width: 80%
}
@media screen and (max-width: 599px){
width: 80%;
height: 200px;
flex-direction: column;
}
`
const Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
const Right = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
@media screen and (max-width: 599px){
flex-direction: column;
}

`
const NomeProduto = styled.p`
font-size: 14px;
font-weight: 600;
`
const Colecao = styled.p`
font-size: 12px;
font-weight: 600;
`
const Info = styled.p`
font-size: 12px;
font-weight: 600;
`
const ImagemContainer = styled.div`
`
const ImagemItem = styled.img`
width: 75px;
height: 75px;
`

const PreçoContainer = styled.div`
`
const Preço = styled.h3`
font-size: 16px;
`
const Mensagem = styled.h3`
text-align: center;
margin-top: 300px;
`

const Perfil = () => {

    const { historic } = useSelector(rootReducer => rootReducer.cartReducer)

    return (
        <ContainerPai>
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>    
            <ContainerGeral>           
                <Header>
                    <TituloContainer>
                        <HeaderTitulo>PROFILE</HeaderTitulo>
                    </TituloContainer>              
                </Header>
                <Container> 
                    <Historico>
                        {historic.length >= 1 ?
                        <HeaderHistorico>
                            <SubTitulo>HISTÓRICO  DE  COMPRAS</SubTitulo>
                        </HeaderHistorico>: <><Mensagem>Seu histórico de compras está vazio, navegue pelo site e compre alguns de nossos produtos</Mensagem></>}
                        <HistoricoBody>
                            {historic.map((arrayFilho) => {
                                return arrayFilho.map((item) => {
                                    return(
                                        <ItemContainer key={item.id}>
                                            <Left>
                                                <ImagemContainer>
                                                    <ImagemItem src={item.url}/>
                                                </ImagemContainer>
                                            </Left>
                                            <Right>
                                                <NomeProduto>{item.nome}</NomeProduto>
                                                <Colecao>{item.colecao}</Colecao>
                                                <Info>-{item.quantity}-</Info>
                                                <PreçoContainer>
                                                    <Preço>{(item.preço).toFixed(2)} R$/UN.</Preço>
                                                </PreçoContainer>
                                            </Right>
                                        </ItemContainer>
                                    )})
                            })}
                        </HistoricoBody>
                    </Historico>
                </Container> 
            </ContainerGeral> 
        </ContainerPai>
    );
}
 
export default Perfil;