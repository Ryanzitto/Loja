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
margin-top: 20px;

@media only screen and (max-width: 800px) and (min-width: 600px){
    justify-content: center;
    gap: 60px;
}
`
const Item = styled.div`
width: 330px;
height: 180px;
background-image: url("");
background-size: 400px;
position: relative;
filter: grayscale(1);
cursor: pointer;
border-radius: 10px;

&:hover{
    animation: animationCard 1s ease both;
}

@keyframes animationCard {
    100%{
        filter: grayscale(0);
        scale: 1.05;
    }
}
@media only screen and (max-width: 800px) and (min-width: 0px){
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

@media only screen and (min-width: 801px) and (max-width: 1300px) {
    width: 250px;
    height: 170px;
}

@media only screen and (min-width: 1550px) {
    height: 250px;
    width: 400px;
    background-size: cover;
}
@media only screen and (min-width: 1800px) {
    height: 250px;
    width: 450px;
    background-size: cover;
}
`
const Titulo = styled.h1`
font-size: 20px;
position: absolute;
color: #ffffff;
margin-left: 25px;
margin-top: 20px;

@media only screen and (max-width: 800px) and (min-width: 400px){
margin-top: 60px;
}
@media only screen and (min-width: 1550px){
font-size: 30px;
}
`

const Tags = () => {
    return (
        <Container>
            <ContainerItems>
                <Link to="/Camisas">
                    <Item style={{backgroundImage: 'url("https://wantedind.com/wp-content/uploads/2023/01/BANNER-CLASSIC-1400x700.jpg")'}}>
                        <Titulo>CAMISETAS</Titulo>
                    </Item> 
                </Link>
                <Link to="/Bermudas">
                    <Item style={{backgroundImage: 'url("https://wantedind.com/wp-content/uploads/2023/01/BANNER-1-1-800x800.png")', backgroundPositionY: '300px'}}>
                        <Titulo>BERMUDAS</Titulo>
                    </Item> 
                </Link>        
                <Link to="/HeadWear">
                    <Item style={{backgroundImage: 'url("https://wantedind.com/wp-content/uploads/2023/01/IMG_3421-800x800.jpg")', backgroundPositionY: '-120px'}}>
                        <Titulo>HEADWEAR</Titulo>
                    </Item> 
                </Link> 
            </ContainerItems>
        </Container>
    );
}
 
export default Tags;