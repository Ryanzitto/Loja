import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #000000e8;
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 100px;
  align-self: flex-end;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1500px) {
    margin-top: 150px;
  }
`;

const Logo = styled.img`
  width: 180px;
  height: 130px;
  opacity: 0.4;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    animation: animate 1s ease both;
    @keyframes animate {
      to {
        opacity: 0.9;
      }
    }
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
  @media screen and (min-width: 1600px) {
    width: 220px;
    height: 150px;
  }
`;

const Left = styled.div`
  width: 500px;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

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
`;
const List = styled.ul`
  gap: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 501px) and (max-width: 600px) {
    gap: 2px;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    gap: 25px;
    align-items: center;
  }
`;
const ListItem = styled.a`
  list-style: none;
  letter-spacing: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  color: #ffffff;
  opacity: 0.7;
  margin-left: 10px;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    opacity: 1;
  }
  @media only screen and(min-width: 501px) and (max-width: 600px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 16px;
  }
`;
const Line1 = styled.div`
  height: 50%;
  width: 0.2px;
  background-color: #ffffff28;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src="./img/logo.jfif" />
      </Left>
      <Line1 />
      <Right>
        <List>
          <ListItem href="https://github.com/Ryanzitto" target="_blank">
            GITHUB
          </ListItem>
          <ListItem
            href="https://www.linkedin.com/in/ryan-henrique-1b4075233/"
            target="_blank"
          >
            LINKEDIN
          </ListItem>
          <ListItem
            style={{
              opacity: 0.2,
              textDecoration: "line-through",
              cursor: "not-allowed",
            }}
          >
            PORTIFOLIO
          </ListItem>
        </List>
      </Right>
    </Container>
  );
};

export default Footer;
