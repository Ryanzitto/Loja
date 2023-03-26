import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
width: 100%;
height: 250px;
display: flex;
flex-direction: row;
@media only screen and (min-width: 1550px) {
    height: 400px;
  }
`
const ContainerItems = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-left: 15px;
`
const Item1 = styled.div`
width: 320px;
height: 180px;
background-image: url("https://wantedind.com/wp-content/uploads/2023/01/BANNER-CLASSIC-1400x700.jpg");
background-size: 400px;
position: relative;
filter: grayscale(1);
cursor: pointer;

&:hover{
    animation: animationCard 1s ease both;
}

@keyframes animationCard {

    100%{
        filter: grayscale(0);
        scale: 1.05;
    }
}
@media only screen and (max-width: 1250px) {
    width: 280px;
    height: 150px;
  }
  @media only screen and (min-width: 1550px) {
  height: 250px;
  width: 400px;
  background-size: cover;
}
`
const Titulo1 = styled.h1`
font-size: 20px;
position: absolute;
color: white;
margin-left: 25px;
margin-top: 20px;
`

const Item2 = styled.div`
width: 320px;
height: 180px;
background-image: url("https://wantedind.com/wp-content/uploads/2023/01/BANNER-1-1-800x800.png");
background-size: 400px;
background-position-y: 300px;
position: relative;
filter: grayscale(1);
cursor: pointer;

&:hover{
    animation: animationCard 1s ease both;
}

@keyframes animationCard {

    100%{
        filter: grayscale(0);
        scale: 1.05;
    }
}

@media only screen and (max-width: 1250px) {
    width: 280px;
    height: 150px;
  }
  @media only screen and (min-width: 1550px) {
  height: 250px;
  width: 400px;
  background-size: cover;
}
`
const Titulo2 = styled.h1`
font-size: 20px;
position: absolute;
color: white;
margin-left: 25px;
margin-top: 20px;
`
const Item3 = styled.div`
width: 320px;
height: 180px;
background-image: url("https://wantedind.com/wp-content/uploads/2023/01/IMG_3421-800x800.jpg");
background-size: 400px;
background-position-y: -120px;
position: relative;
filter: grayscale(1);
cursor: pointer;

&:hover{
    animation: animationCard 1s ease both;
}

@keyframes animationCard {

    100%{
        filter: grayscale(0);
        scale: 1.05;
    }
}
@media only screen and (max-width: 1250px) {
    width: 280px;
    height: 150px;
  }

  @media only screen and (min-width: 1550px) {
  height: 250px;
  width: 400px;
}
`
const Titulo3 = styled.h1`
font-size: 20px;
position: absolute;
color: #ffffff;
margin-left: 25px;
margin-top: 20px;
`

const Tags = () => {
    return (
        <>
            <Container>
                <ContainerItems>
                    <Link to="/Camisas">
                        <Item1>
                            <Titulo1>CAMISETAS</Titulo1>
                        </Item1> 
                    </Link>
                    <Link to="/Bermudas">
                        <Item2>
                            <Titulo2>BERMUDAS</Titulo2>
                        </Item2> 
                    </Link>        
                    <Link to="/HeadWear">
                        <Item3>
                            <Titulo3>HEADWEAR</Titulo3>
                        </Item3> 
                    </Link>
                 
                </ContainerItems>
            </Container>
        </>
    );
}
 
export default Tags;