import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.8px;
  color: #0f0f0feb;
  border: 1px solid #222222eb;
  animation: in 1s both;
  border-radius: 2px;

  @keyframes in {
    from {
      background-color: #a840c2;
      border: none;
      color: white;
      border-top-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    to {
      background-color: #ffffff;
      border: none;
      color: #222222eb;
      border: 1px solid #222222eb;
    }
  }
  &:hover {
    animation: AnimationBtn 1s both;
    @keyframes AnimationBtn {
      to {
        background-color: #a840c2;
        border: none;
        color: white;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
`;

const ButtonVisualizar = () => {
  return (
    <>
      <Button>Viualizar</Button>
    </>
  );
};

export default ButtonVisualizar;
