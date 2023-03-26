import React from "react";
import Sidebar from "../components/Sidebar";
import styled from 'styled-components'
import Carousel from "../components/Carousel";
import Tags from "../components/Tags";
import Footer from "../components/Footer";
import MaisVendidos from "../components/MaisVendidos"
import BannerOutLet from "../components/BannerOutLet";
import Outlet from "../components/Outlet";
const ContainerGeral = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
overflow-x: hidden;
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
  flex-direction: column;
  }
`
const Nav = styled.div`
width: 20vw;
height:100vh;

@media only screen and (max-width: 1000px) {
  width: 0;
  height: 0;
  }
`
const Body = styled.div`
width: 80vw;
height: 2500px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
@media only screen and (max-width: 1000px) {
  width: 100vw;
  }
@media only screen and (min-width: 1550px) {
  height: 3050px;
  }
`
const FooterContainer = styled.div`
width: 100%;
`

const Home = () => {

  const imagensCarrosel = [
    "https://wantedind.com/wp-content/uploads/2023/03/BANNER-2-1.png",
    "https://wantedind.com/wp-content/uploads/2023/03/BANNER-DROP-SECRETO-1.png",
    "https://wantedind.com/wp-content/uploads/2023/03/BANNER-4-1.png",
    "https://wantedind.com/wp-content/uploads/2023/03/BANNER-5-1.png",
    "https://wantedind.com/wp-content/uploads/2023/03/BANNER-1-1-1.png",
    "https://wantedind.com/wp-content/uploads/2023/02/LANÇAMENTO-CORRERIA-2.png",
  ]

    return (
            <ContainerGeral>
              <Nav>
                  <Sidebar/>
              </Nav>
              <Body>
                  <Carousel images={imagensCarrosel}/>
                  <Tags/>
                  <MaisVendidos/>
                  <Tags/>
                  <BannerOutLet/>     
                  <Outlet/>
                  <FooterContainer>
                      <Footer/>
                  </FooterContainer>
                 
              </Body>
            </ContainerGeral>          
    );
}
 
export default Home;