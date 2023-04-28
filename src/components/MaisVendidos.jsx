import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ContainerDeus= styled.div`
width: 80vw;
display: flex;
position: relative;

@media screen  and (max-width: 1000px) {
width: 90%;
}
`

const ContainerGeral= styled.div`
width: 100%;
height: 350px;
display: flex;
justify-content: center;
flex-wrap: wrap;
padding-top:20px;
flex-direction: column;
align-items: center;
margin-top: 40px;
padding-bottom: 40px;
@media only screen and (max-width: 1000px) {
    width: 100vw
}
  @media only screen and (min-width: 1550px) {
    width: 100%;
    height: 400px;
}
`
const Container= styled.div`
width: 90%;
height: 100%;
display: flex;
overflow:auto; 
border-top: 1px solid #e2e2e2;
position: relative;
justify-content: center;
margin-right: 40px;
z-index: 0;

::-webkit-scrollbar {
  height: 5px;
  background-color: #aaa; 
}
::-webkit-scrollbar-thumb {
   size: 3px;
  background: #000;
  border-radius: 3px;

}

@media only screen and (max-width: 1000px) {
    width: 90vw;
    justify-content: flex-start;
}
@media only screen and (min-width: 1500px) {
    gap: 50px;
}
`

const ContainerProduto = styled.div`
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 10px;
width: 250px;
`

const Produto = styled.div`
width: 150px;
height: 150px;
display: flex;
flex-direction: column;
margin-top: 30px;
@media only screen and (max-width: 1000px) {
    width: 150px;
    height: 150px;
    margin-top: 0;
}
`
const ImagemProduto = styled.img`
cursor: pointer;
background-color: white;
position: relative;
`

const Colecao = styled.p`
font-size: 12px;
text-align: center;
opacity: 0.5;
width: 300px;
`
const PreçoProduto = styled.h1`
font-size: 20px;
text-align: center;
`
const ContainerBotoes = styled.div`
display:flex;
justify-content: center;
width: 120px;
height: 30px;
`

const Div = styled.div`
width:200px;
display: flex;
position: relative;
justify-content: center;
align-items: center;
margin-bottom: -25px;
`

const Titulo = styled.h1`
    font-size: 20px;
    background-color: white;
    position: absolute;
    margin-top: -48px;
    padding-left: 10px;
    padding-right: 10px;
    color: #141414e1;
    z-index: 1;
`
const Ver = styled.button`
width: 80px;
height: 30px;
border: none;
border-radius: 5px;
background-color: #ffffffec;
font-size: 14px;
cursor: pointer;
font-weight: 500;
text-decoration: underline;
`
const linkStyle = {
    width: '80px'
}

const MaisVendidos = ({data}) => {

    const [isClicked, setIsClicked] = useState(false)

    const [qualItem, setQualItem] = useState()
    
    return (
        <ContainerDeus>
            <ContainerGeral>
                <Div>
                    <Titulo>MAIS VENDIDOS</Titulo> 
                </Div>  
                    <Container>      
                        {data.map((item)=>{
                            return(          
                            <ContainerProduto  key={item.id}>
                                <Produto>
                                    <ImagemProduto src={item.url}/>
                                </Produto>
                                <Colecao>{item.colecao}</Colecao>
                                <PreçoProduto>{item.preço.toFixed(2)} R$</PreçoProduto>
                                <ContainerBotoes>
                                    <Link style={linkStyle} to="/FootWear">
                                        <Ver>Ver item</Ver>
                                    </Link>                              
                                </ContainerBotoes>
                            </ContainerProduto>
                            )})}
                    </Container> 
            </ContainerGeral>  
        </ContainerDeus>
    );
}
 
export default MaisVendidos;