
import React, { useState , useEffect} from "react";
import styled from 'styled-components'

import { useContext } from 'react'
import { CarrinhoContext } from '../context/CarrinhoContext';

const ContainerGeral = styled.div`
width: 20vw;
min-height: 700px;
max-height: 700px;
background-color: #ffffff;
border-right: 1px solid #e2e2e2;
display: flex;
animation: animacaoDeEntrada 0.5s ease;
flex-direction: column;
overflow:auto; 
overflow-x: hidden;  

@keyframes animacaoDeEntrada {
    from{
        margin-right: 500px
    } 
    to{
        margin-right: 0px
    }
}
::-webkit-scrollbar {
    width: 5px;
  height: 8px;
  background-color: #aaa; 
}
::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 5px;;
}

@media only screen and (max-width: 1000px) {
    position: absolute;
    z-index: 1;
    margin-top: -85px;
    min-height: 1100px;
    max-height: 1100px;
    width: 40vw;
  }
@media only screen and (min-width: 1500px) {
    min-height: 1800px;
    max-height: 1800px;
  }
`
const Header = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: flex-end;
`
const BtnClose = styled.img`
width: 35px;
height: 35px;
margin-right: 10px;
margin-top: 10px;
cursor: pointer;
`
const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const TopBody = styled.div`
width:100%;
height: 100px;
display:flex;
flex-direction: column;
align-items: center;
`
const Titulo = styled.h1`
font-size: 30px;
text-align: center;
color: #5a5a5a;
`
const Estado = styled.p`
font-size: 16px;
text-align: center;
color: #5a5a5a;
` 

const ItemContainer= styled.div`
width: 85%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid #e2e2e2;
border-top: 1px solid #e2e2e2;
margin-top: 20px;
gap: 20px;
`
const ImagemProduto= styled.img`
width: 75px;
height: 75px;
`
const Infos = styled.p`
width: 150px;
`
const Nome = styled.h1`
font-size: 12px;
`
const Preço = styled.p`
color: red;
font-weight: 600;
font-size: 13px;
`
const IconeDescarte = styled.img`
width: 15px;
height: 15px;
margin-top: 60px;
cursor: pointer;
`
const SubtotalContainer = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
border-bottom: 1px solid #e2e2e2;
border-top: 1px solid #e2e2e2;
text-align: center;
align-items: center;
display: flex;
flex-direction: column;
margin-top: 20px;
margin-bottom: 50px;
`
const Subtotal = styled.h1`
font-size: 30px;
color: black;
cursor: pointer;

`
const Finalizar = styled.button`
width: 120px;
height: 50px;
cursor: pointer;
background-color: red;
color: white;
border: none;
border-radius: 5px;
font-size: 14px;
font-weight: 600;
`
const Carrinho = () => {

    const [preco, setPreco] = useState(0)
    const {carrinhoEstado, toggleCarrinhoEstado} = useContext(CarrinhoContext)

    const {sacola, setSacola} = useContext(CarrinhoContext)

    useEffect(() => {
		setPreco(sacola.reduce((total, obj) => total + obj.preço, 0))
	}, [sacola])
    
    return ( 
        <div>
            <ContainerGeral>
                <Header>
                    <BtnClose onClick={() => {toggleCarrinhoEstado()}}
                    src="./img/close.png"/>
                </Header>
                <Body>
                {sacola.length < 1 ? (
                    <TopBody>
                        <Titulo>Carrinho</Titulo>
                        <Estado>Nenhum item ainda, vá comprar!</Estado>
                    </TopBody> ) : null}
                {sacola.map((indice) => { 
                    console.log(indice)
                return (
                        <ItemContainer>
                            <ImagemProduto src={indice.url} />
                            <Infos>
                                <Nome>{`${indice.nome} - ${indice.cor} , ${indice.tamanho}`}</Nome>
                                <Preço>{`${indice.preço.toFixed(2)} R$`}</Preço>
                            </Infos>
                            <IconeDescarte 
                            onClick={() => {setSacola(sacola.filter((item) => JSON.stringify(item) !== JSON.stringify(indice)))}}
                            src="./img/trash.png"/>
                        </ItemContainer>
                    );
                })}
                { sacola.length > 0 ?            
                <SubtotalContainer>
                    <Subtotal>{`${preco.toFixed(2)} R$`}</Subtotal>
                <Finalizar onChange={()=>{
                    
                }}>Finalizar Compra</Finalizar>

                </SubtotalContainer> : null}
            </Body>
            </ContainerGeral>
        </div>
    );
}
 

export default Carrinho;