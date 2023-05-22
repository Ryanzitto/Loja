import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registraUsuario } from "../redux/user/actions";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

const ContainerPai = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const ContainerGeral = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`;
const SidebarContainer = styled.div`
  width: 20vw;
  height: 100vh;
  position: relative;

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    width: 100vw;
    height: 20vh;
  }
  @media screen and (max-width: 800px) {
    height: 0;
  }
`;

const Container = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  margin-left: 50px;
  border-radius: 20px;
  background-color: #2b2c2c;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Titulo = styled.h1`
  font-size: 20px;
  color: #a840c2;
  opacity: 0.7;
  letter-spacing: 1px;
`;

const ImagemLogin = styled.img`
  width: 400px;
  opacity: 0.7;
`;

const Right = styled.div`
  width: 40%;
  height: 99%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 2px solid #242424;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
const FormContainer = styled.form`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Label = styled.label`
  font-size: 14px;
  align-self: start;
  margin-left: 80px;
  margin-bottom: 5px;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 230px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #f1f1f1;
  font-size: 14px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;
const Confirma = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid #a840c2;
  background-color: white;
  color: #a840c2;
  font-weight: 500;
  margin-top: 15px;
  &:hover {
    animation: anime 1s both;
    @keyframes anime {
      to {
        background-color: #0f0f0feb;
        color: white;
        border: none;
      }
    }
  }
`;

const FooterForm = styled.div`
  display: flex;
  gap: 5px;
`;

const Mensagem = styled.p`
  font-size: 14px;
`;
const LoginLink = styled.p`
  cursor: pointer;
  font-weight: 500;
  text-decoration: underline;
  font-size: 14px;
`;

const Span = styled.span`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`;

const createDataFormSchema = z.object({
  nome: z
    .string()
    .nonempty("O campo 'nome' é obrigatório")
    .min(10, "O nome deve conter ao menos 10 caracteres"),

  email: z
    .string()
    .nonempty("O campo acima é obrigatório")
    .min(10, "O nome deve ter no mínimo 10 caracteres")
    .email("Formato de e-mail inválido."),

  senha: z.string().min(8, "A senha deve conter no mínimo 8 caracteres"),

  senha2: z
    .string()
    .min(8, "A senha deve estar identica a senha fornecida acima"),
});

const TelaCadastro = () => {
  const [erroMsg, setErroMsg] = useState("");

  const [currentForm, setCurrentForm] = useState("Cadastro");

  const { user } = useSelector((rootReducer) => rootReducer.userReducer);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createDataFormSchema),
  });

  const createDataEntrega = (data) => {
    if (data.senha === data.senha2) {
      setErroMsg("");
      dispatch(registraUsuario(data));
      window.alert(
        "Seu cadastro foi realizado com sucesso, use seus dados fornecidos para fazer login"
      );
      setCurrentForm("Login");
    } else {
      setErroMsg("Senhas não coincidem!");
    }
  };

  return (
    <ContainerPai>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <ContainerGeral>
        <Container>
          <Left>
            <Titulo>Junte-se a nós.</Titulo>
            <ImagemLogin src="../img/login-img.png" />
          </Left>
          <Right>
            {currentForm === "Cadastro" ? (
              <>
                <Titulo>Cadastre-se!</Titulo>
                <FormContainer onSubmit={handleSubmit(createDataEntrega)}>
                  <Label>Nome:</Label>
                  <Input
                    type="text"
                    placeholder="Digite o seu nome"
                    {...register("nome")}
                  />
                  {errors.nome && <Span>{errors.nome.message}</Span>}
                  <Label>Email:</Label>
                  <Input
                    type="email"
                    placeholder="Exemplo@email.com"
                    {...register("email")}
                  />
                  {errors.email && <Span>{errors.email.message}</Span>}
                  <Label>Senha:</Label>
                  <Input
                    type="password"
                    placeholder="Escolha uma senha"
                    {...register("senha")}
                  />
                  {errors.senha && <Span>{errors.senha.message}</Span>}
                  <Label>Confirme a senha:</Label>
                  <Input
                    type="password"
                    placeholder="Confirme a senha"
                    {...register("senha2")}
                  />
                  {errors.senha2 && <Span>{errors.senha2.message}</Span>}
                  <span
                    style={{ color: "red", fontSize: "14px", marginTop: "5px" }}
                  >
                    {erroMsg}
                  </span>
                  <Confirma onClick={handleSubmit(createDataEntrega)}>
                    Confirmar
                  </Confirma>
                </FormContainer>
                <FooterForm>
                  <Mensagem>já possui uma conta? faça</Mensagem>
                  <LoginLink
                    onClick={() => {
                      setCurrentForm("Login");
                    }}
                  >
                    Login
                  </LoginLink>
                </FooterForm>
              </>
            ) : null}
            {currentForm === "Login" ? (
              <>
                <Titulo>Faça Login!</Titulo>
                <FormContainer style={{ height: "250px" }}>
                  <Label>Email:</Label>
                  <Input type="email" placeholder="Seu email" />
                  <Label>Senha:</Label>
                  <Input type="password" placeholder="Sua senha" />
                  <Confirma>Confirmar</Confirma>
                </FormContainer>
                <FooterForm>
                  <Mensagem>ainda não possui uma conta?</Mensagem>
                  <LoginLink
                    onClick={() => {
                      setCurrentForm("Cadastro");
                    }}
                  >
                    Cadastre-se
                  </LoginLink>
                </FooterForm>
              </>
            ) : null}
          </Right>
        </Container>
      </ContainerGeral>
    </ContainerPai>
  );
};

export default TelaCadastro;
