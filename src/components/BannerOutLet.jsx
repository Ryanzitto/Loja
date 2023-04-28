import styled from 'styled-components'

const Container = styled.div`
width: 100vw;
height: 500px;
display: flex;
justify-content: flex-end;

@media only screen and (min-width: 1550px) {
}
`
const ContainerBanner = styled.div`
width: 100vw;
height: 500px;
display: flex;
position: relative;
justify-content: center;

@media only screen and (max-width: 600px) {
    width: 650px;
}
@media only screen and (min-width: 1800px) {
    width: 100%;
}
`
const ImagemBanner = styled.img`
height: 500px;
filter: grayscale(1);

@media only screen and (min-width: 1800px) {
    width: 100%;
    border-radius: 20px;
}

@media only screen and (min-width: 1400px) {
   width: 1220px;
}
@media only screen and (min-width: 1550px) {
    width: 1500px;
    height: 600px;
}
`
const Conteudo = styled.div`
position: absolute;
width: 1000px;
height: 100%;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
gap: 10px;

@media only screen and (max-width: 500px) {}
`
const Titulo = styled.h1`
font-size: 60px;
color: white;
margin-left: 50px;
letter-spacing: 2px;
padding: 10px;
background-color: #1b1b1bed;

@media only screen and (min-width: 501px) and (max-width: 1100px) {
    margin-left: 320px;
}
@media only screen and (min-width: 0px) and (max-width: 500px) {
    font-size: 30px;
    margin-left: 450px;
}
`

const SubTitulo = styled.p`
font-size: 20px;
font-weight: 600;
color: white;
margin-left: 50px;
letter-spacing: 2px;
width: 400px;
background-color: #1b1b1bed;
padding: 15px;

@media only screen and (max-width: 1100px) {
    margin-left: 320px;
}
@media only screen and (min-width: 0px) and (max-width: 500px) {
    font-size: 16px;
    width: 300px;
    margin-left: 450px;
}
`

const BannerOutLet = () => {
    return (
        <Container>
            <ContainerBanner>
                <ImagemBanner src="https://wantedind.com/wp-content/uploads/2023/01/BANNER-OUTLET-WANTED-JANEIRO-1-1400x583.jpg"/>
                <Conteudo>
                    <Titulo>SIKE</Titulo>
                    <SubTitulo>A SIKE APOIA A CULTURA DE RUA E A TECNOLOGIA, PARA QUE VOCÊ DESFRUTE DO MELHOR DOS DOIS MUNDOS.</SubTitulo>
                </Conteudo>
            </ContainerBanner>
        </Container>
    );
}
 
export default BannerOutLet;