import styled from "styled-components";
import { useState } from "react";

const FavoritarIcon = styled.img`
width:20px;
height: 20px;
padding:3px;
cursor: pointer;
position: absolute;
margin-left: 50px;
`

const Favoritar = () => {

    const [click, setClick] = useState(false)

    const toggle = () => {
        setClick(!click)
    }

    return (
        <>
        <FavoritarIcon onClick={toggle} src={click ? './img/heart-full.png' : './img/heart-empty.png'}/>
        </>
    );
}
 
export default Favoritar;