import React, { useState } from 'react';
import styled from 'styled-components'


const Container = styled.div`
width: 100vw;
height: 500px;
background-color: black;
display: flex;
justify-content: flex-end;
margin-left: 170px;
@media only screen and (max-width: 1000px) {
    width: 500px;
    margin-left: 100px;
  }
@media only screen and (min-width: 1550px) {
    height: 600px;
  }

`
const ContainerBanner = styled.div`
width: 100vw;
height: 500px;
display: flex;
position: relative;
@media only screen and (max-width: 600px) {
    width: 650px;
}
`
const ImagemBanner = styled.img`
height: 500px;
filter: grayscale(1);

@media only screen and (min-width: 1400px) {
  width: 1320px;
  }
@media only screen and (min-width: 1550px) {
    width: 1600px;
    height: 600px;
}
`
const Conteudo = styled.div`
position: absolute;
width: 500px;
height: 300px;
display: flex;
justify-content: center;
flex-direction: column;
margin-left: 150px;

@media only screen and (max-width: 1000px) {
    margin-left: 200px;
  }
`
const Titulo = styled.h1`
font-size: 60px;
color: white;

`
const Botao = styled.button`
width: 200px;
padding: 10px;
font-size: 20px;
background-color: white;
border: none;
color: #555555;
font-weight: 600;
cursor: pointer;

&:hover{
    background-color: #e9e9e9;
}
`

const BannerOutLet = () => {
    return (
        <>
        <Container>
            <ContainerBanner>
                <ImagemBanner src="https://wantedind.com/wp-content/uploads/2023/01/BANNER-OUTLET-WANTED-JANEIRO-1-1400x583.jpg"/>
                <Conteudo>
                    <Titulo>OUTLET SIKE</Titulo>
                    <Botao>ACESSAR OUTLET</Botao>
                </Conteudo>
            </ContainerBanner>
        </Container>
        </>
    );
}
 
export default BannerOutLet;