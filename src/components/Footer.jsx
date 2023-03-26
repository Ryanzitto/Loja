import React from "react";
import styled from 'styled-components'

const Container = styled.div`
background-color: #0e0e0ef0;
height: 300px;
width: 100%;
display: flex;
align-items: center;
margin-top: 50px;
`

const Logo = styled.img`
width: 130px;
height: 95px;
border-radius: 10px;
margin-left: 100px;
margin-top: 15px;
cursor: pointer;
@media only screen and (max-width: 800px) {
   margin-left: 0px;
   margin-top: 0px;
}
@media only screen and (max-width: 600px) {
   width: 100px;
   height: 75px;
   margin-left: 0px;
   margin-top: 0px;
}
`

const Left = styled.div`
width:500px;
height: 100%;
flex:1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Icon = styled.img`
width: 25px;
height: 25px;
cursor: pointer;
filter: grayscale(0.8);

&:hover{
    filter: grayscale(0);
}
@media only screen and (max-width: 600px) {
   width: 20px;
   height: 20px;
}
`
const Right = styled.div`
flex: 1;
width: 100%;
height: 100%;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
`
const Titulo = styled.h1`
font-size: 75px;
color: transparent;
-webkit-text-stroke: 1px white;
-webkit-text-stroke-color: #ff6600;
opacity: 0.4;
position: relative;
cursor: pointer;

::after{
  content: "CONTATO";
  position: absolute;
  top: 0;
  left: 0;
  color: #ff6600;
  width: 0;
  overflow: hidden;
  white-space: nowrap;
}
&:hover{
  -webkit-text-stroke: 1px #ff6600;
  opacity: 1;
  ::after{
    animation: moveText 1s linear both;
    @keyframes moveText{
      to{
        width: 100%;     
      }
    }
  }
}
@media only screen and (max-width: 600px) {
   font-size: 30px;
  }
`
const List = styled.ul`
`
const ListItem = styled.li`
list-style: none;
letter-spacing: 10px;
margin-bottom: 10px;
cursor: pointer;
color: #ff6600;
opacity: 0.4;
margin-left: 10px;
&:hover{
    opacity: 1;
}
@media only screen and (max-width: 600px) {
   font-size: 10px;
  }
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo src="./img/logo.jfif"/>
            </Left>   
            <Right>
            <Titulo>CONTATO</Titulo>
            <List>
                <ListItem>GITHUB</ListItem>
                <ListItem>LINKEDIN</ListItem>
                <ListItem>INSTAGRAM</ListItem>
            </List>
            </Right>       
        </Container>
    );
}
 
export default Footer;