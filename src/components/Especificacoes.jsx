import { useContext } from 'react'
import { DetalhesContext } from '../context/DetalhesContext';

import styled from 'styled-components'
import Favoritar from "../components/FavButton";
import Adcionar from "../components/AddButton";

const ContainerPai = styled.div`
background-color: #00000090;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
overflow: auto;
overflow-y: hidden;
position: absolute;
flex-direction: column;
z-index: 2;
`

const Main = styled.div`
background-color: #ffffff;
width: 60%;
height: 400px;
border-radius: 15px;
display: flex;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
animation: entrada 1s ease ;

@keyframes entrada {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

@media screen and (max-width: 600px) {
flex-direction: column;
width: 90%;
justify-content: center;
align-items: center;
}

@media screen and (min-width: 601px) and (max-width: 1300px) {
flex-direction: column;
justify-content: center;
align-items: center;
}
`
const Header = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: flex-end;
align-items: center;
border-top-right-radius: 15px;
border-top-left-radius: 15px;
background-color: #ffffff;
`
const Container = styled.div`
background-color: #ffffff;
width: 100%;
height: 600px;
border-bottom-right-radius: 15px;
border-bottom-left-radius: 15px;
display: flex;

@media screen and (max-width: 1300px) {
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
}

`

const Left = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
`

const ImagemProduto = styled.img`
width: 300px;

@media screen and (max-width: 1300px) {
width: 150px;
}
@media screen and (max-width: 800px) {
width: 150px;
}
`
const NomeProduto = styled.p`
font-size: 20px;
font-weight: 500;

`
const Colecao = styled.p`
font-size: 16px;
font-weight: 500;

`
const DescricaoProduto = styled.p`
width: 80%;
margin-top: 30px;
font-weight: 700;
letter-spacing: 0.5px;
font-size: 1.2em;

@media screen and (max-width: 1300px) {
margin-top: 20px;
font-size: 1.0em;
}   

`
const Right = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;

@media screen and (max-width: 1300px) {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
`
const Top = styled.div`
width: 100%;
height: 50%;
display: flex;
justify-content: center;
text-align: center;
`
const Bottom = styled.div`
width: 100%;
height: 50%;
display: flex;
justify-content: center;
flex-direction: column;
`

const Close = styled.img`
width: 25px;
height: 25px;
cursor: pointer;
margin-right: 8px;
margin-top: 6px;
`
const ContainerBotoes = styled.div`
display:flex;
justify-content: flex-end;
align-items: center;
width: 95%;
height: 100px;
margin-right: 20px;
`
const Infos = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
`
const Tamanho = styled.p`
font-size: 16px;
font-weight: 500;
background-color: #141414;
color: white;
padding: 10px;
border-radius: 5px;
`
const Cor = styled.p`
font-size: 16px;
font-weight: 500;
background-color: #141414;
color: white;
padding: 10px;
border-radius: 5px;
`

const Especificacoes = ({item}) => {

    const { toggleStateDetalhes } = useContext(DetalhesContext)

    return (
        <ContainerPai>
            <Main>
                <Header>
                    <Close onClick={toggleStateDetalhes} src='./img/close.png'/>
                </Header>
                    <Container key={item.id}>  
                        <Left>
                            <ImagemProduto src={item.url}/>
                            <NomeProduto>{item.nome}</NomeProduto>
                            <Colecao>{`- ${item.colecao} -`}</Colecao>
                        </Left>
                        <Right>
                            <Top>
                                <DescricaoProduto>{item.descricao}</DescricaoProduto>
                            </Top>
                            <Bottom>
                                <Infos>
                                    <Tamanho>Tamanho: Padrão</Tamanho>
                                    <Cor>Cor: Padrão</Cor>
                                </Infos>
                                <ContainerBotoes>
                                    <Adcionar  item={item}/>
                                    <Favoritar item={item}/>
                                </ContainerBotoes>
                            </Bottom>
                        </Right>
                    </Container>
            </Main>  
        </ContainerPai>

    );
}
 
export default Especificacoes;