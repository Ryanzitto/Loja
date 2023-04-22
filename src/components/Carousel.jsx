
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
overflow-x: hidden;
overflow-y: hidden;
display: flex;
justify-content: center;
flex-direction: column;
margin-left: 8px;
`
const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
border-radius: 50px;
`
const ButtonAnterior = styled.img`
position: absolute;
cursor: pointer;
opacity: 0.4;
margin-left: 950px;

&:hover{
  opacity: 0.9
}

@media only screen and (max-width: 1250px) {
  margin-left: 800px;
}

@media only screen and (max-width: 1050px) {
  margin-left: 600px;
}
@media only screen and (max-width: 800px) {
  margin-top: 300px;
  margin-left: 100px;
}
`
const ButtonProximo = styled.img`
position: absolute;
transform: rotate(0.5turn);
cursor: pointer;
opacity: 0.4;
margin-right: 950px;

&:hover{
  opacity: 0.9
}
@media only screen and (max-width: 1250px) {
  margin-right: 800px;
}

@media only screen and (max-width: 1050px) {
  margin-right: 600px;
}
@media only screen and (max-width: 800px) {
  margin-top: 300px;
  margin-right: 100px;
}
`
const Image = styled.img`
height: 450px;
width: 1250px;
filter: grayscale(0.5);

@media only screen and (max-width: 1000px) {
  flex-direction: column;
}  
@media only screen and (min-width: 1550px) {
  height: 550px;
  width: 1550px;
}
@media only screen and (min-width: 1850px) {
  height: 550px;
  width: 1750px;
}
`
const Carousel = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);
  

  return (
    <Container>
        <ImageContainer>
            <Image src={images[currentIndex]} alt="carousel"/>
            <ButtonAnterior src="./img/sym.png" onClick={previousSlide}/>
            <ButtonProximo  src="./img/sym.png" onClick={nextSlide}/>
        </ImageContainer>
    </Container>
  );
};

export default Carousel;