import React from "react";
import styled from 'styled-components'

const Container = styled.div`
background-color: #000000e8;
height: 300px;
width: 100%;
display: flex;
align-items: center;
margin-top: 20px;
align-self: flex-end;

@media screen and ( max-width: 500px) {
  flex-direction: column;
}
`

const Logo = styled.img`
width: 180px;
height: 130px;
opacity: 0.4;
border-radius: 10px;
cursor: pointer;

&:hover{
  animation: animate 1s ease both;
  @keyframes animate {
    to{
      opacity: 0.9;
    }
  }
}

@media screen and ( max-width: 500px) {
display: none;
}
@media screen and ( min-width: 1600px) {
width: 220px;
height: 150px;
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

@media screen and ( max-width: 500px) {
display: none;
}
`

const Right = styled.div`
flex: 1;
width: 100%;
height: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row;

@media screen and (max-width: 600px) {
  font-size: 30px;
  flex-direction: column;
}
`
const List = styled.ul`
gap: 20px;
display: flex;
flex-direction: column;

@media screen and (max-width: 600px) {
gap: 2px;
align-items: center;
}
`
const List2 = styled.ul`
gap: 10px;
display: flex;
flex-direction: column;

@media screen and (max-width: 600px) {
gap: 2px;
align-items: center;
}
`
const ListItem = styled.li`
list-style: none;
letter-spacing: 8px;
margin-bottom: 10px;
cursor: pointer;
color: #ffffff;
opacity: 0.7;
margin-left: 10px;
font-size: 14px;
&:hover{
    opacity: 1;
}
@media only screen and (max-width: 600px) {
   font-size: 10px;
}
`
const Line1 = styled.div`
height: 50%;
width: 0.2px;
background-color: #ffffff28;

@media screen and (max-width: 600px) {
display: none;
}
`

const Line2 = styled.div`
height: 50%;
width: 0.2px;
background-color: #ffffff28;

@media screen and (max-width: 600px) {
  width: 30%;
  height: 0.2px;
}
`
const ListItem2 = styled.li`
list-style: none;
letter-spacing: 5px;
margin-bottom: 10px;
cursor: pointer;
color: #ffffff;
opacity: 0.7;
margin-left: 10px;
font-size: 10px;
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
            <Line1/>
            <Right>
              <List>
                <ListItem>GITHUB</ListItem>
                <ListItem>LINKEDIN</ListItem>
                <ListItem>PORTIFOLIO</ListItem>
              </List>
            <Line2/>
              <List2>
                <ListItem2>WHO WE ARE</ListItem2>
                <ListItem2>CONTACT</ListItem2>
                <ListItem2>SIKE LIMITED</ListItem2>
                <ListItem2>JUST DO THAT</ListItem2>
              </List2>
            </Right>       
        </Container>
    );
}
 
export default Footer;