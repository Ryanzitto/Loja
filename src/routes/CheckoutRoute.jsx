import styled from "styled-components";

import { useContext, useState, useEffect, useRef } from "react";
import { CarrinhoContext } from '../context/CarrinhoContext';
import Sidebar from "../components/Sidebar";

const Gambiarra = styled.div`
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
`
const ContainerGeral = styled.div`
width: 100vw;
display: flex;
justify-content: flex-end;
flex-direction: column;
align-items: flex-end;
`

const Nav = styled.div`
width: 20vw;
height:100vh;
position: relative;
`

const Header = styled.div`
width: 90%;
height: 200px;
background-color: #111111f1;
display: flex;
align-items: center;
justify-content: flex-start;
`
const HeaderTitulo = styled.h1`
font-size: 70px;
color: white;
margin-left: 150px;

`

const Logo = styled.img`
width: 100px;
height: 70px;
margin-left: 260px;
border-radius: 10px;
`
const Container = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: center;
`
const Faturamento = styled.div`
width: 33%;
height: 100%;
margin-top: 30px;
`
const FormContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 350px;
`
const Input = styled.input`
width: 200px;
height: 30px;
margin-top: 10px;
padding-left: 20px;
border: 2px solid #474747ea;
border-radius: 5px;

&:focus{
    outline: none;
}
`
const Revisao = styled.div`
width: 34%;
height: 100%;
margin-top: 30px;
`
const Pagamento = styled.div`
width: 33%;
height: 100%;
margin-top: 30px;
`
const SectionHeader = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 20px;
`
const Titulo = styled.h1`
background-color: #111111f1;
color: white;
text-align: center;
padding: 10px;
font-size: 16px;
width: 150px;
`
const ItemContainer = styled.div`
width: 100%;
height: 150px;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 10px;
border-bottom: 1px solid black;
`
const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

`
const Mid = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`
const NomeProduto = styled.p`
font-size: 14px;
`
const Colecao = styled.p`
font-size: 12px;
margin-bottom: 10px;
`
const Info = styled.p`
font-size: 10px;
margin-bottom: 10px;
`
const ImagemContainer = styled.div`
width: 80px;
height: 80px;
`
const ImagemItem = styled.img`
width: 100px;
height: 100px;
`

const PreçoContainer = styled.div`
`
const Preço = styled.h3`
font-size: 16px;
`
const Descartar = styled.img`
width: 15px;
cursor: pointer;
`

const PagamentoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const LabelContainer = styled.div`
display: flex;
flex-direction: column;
`
const Label = styled.label`
font-size: 14px;
margin-top: 20px;
`
const InputNumeroDoCartao = styled.input`
width: 200px;
height: 30px;
padding-left: 20px;
border: 2px solid #1d1d1dea;
border-radius: 5px;
&:focus{
    outline: none;
}
`
const InputNomeDoCartao = styled.input`
width: 200px;
height: 30px;
padding-left: 20px;
border: 2px solid #1d1d1dea;
border-radius: 5px;
&:focus{
    outline: none;
}
`
const Vencimento = styled.input`
width: 70px;
height: 30px;
padding-left: 20px;
border: 2px solid #1d1d1dea;
border-radius: 5px;
&:focus{
    outline: none;
}
`
const CVV = styled.input`
width: 70px;
height: 30px;
padding-left: 20px;
border: 2px solid #1d1d1dea;
border-radius: 5px;
&:focus{
    outline: none;
}
`
const LabelContainerRow = styled.div`
display: flex;
flex-direction: row;
gap: 30px;
`
const LabelContainerColumn = styled.div`
display: flex;
flex-direction: column;
`
const Footer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 80px;
`
const FooterFat = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 10px;
`
const Termos = styled.p`
font-size: 10px;
width: 50%;
text-align: center;

`
const Finaliza = styled.button`
width: 200px;
height: 50px;
margin-top: 20px;
border: none;
background-color: #47f147;
color: white;
font-size: 18px;
font-weight: 700;
letter-spacing: 1px;
border-radius: 5px;
cursor: pointer;
&:hover{
    background-color: #2ec92ee8;
}
`
const ConfirmaFat = styled.button`
width: 200px;
height: 50px;
margin-top: 10px;
border: none;
background-color: #47f147;
color: white;
font-size: 18px;
font-weight: 700;
letter-spacing: 1px;
border-radius: 5px;
cursor: pointer;
&:hover{
    background-color: #2ec92ee8;
}
`

const Total = styled.h2`
margin-top: 20px;
margin-bottom: 20px;
text-align: center;
`

const Mensagem = styled.p`
font-size: 12px;
text-align: center;
width: 50%;
`

const MensagemCartao = styled.p`
font-size: 16px;
text-align: center;
width: 50%;
margin-bottom: 50px;
`
const Alterar = styled.button`
width: 100px;
height: 30px;
border: none;
background-color: #131313;
color: white;
margin-top: 15px;
border-radius: 5px;
cursor: pointer;
`
const ContainerPosVenda = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

`
const MensagemPosVenda = styled.h1`
font-size: 20px;
margin-left: 250px;
`
const Checkout = () => {

    const [email, setEmail]= useState(null)
    const [valid, setValid]= useState(null)
    const [nome, setNome]= useState(null)
    const [cep, setCep]= useState(0)
    const [telefone, setTelefone]= useState(null)
    const [total, setTotal] = useState(0)

    const [mensagem, setMensagem] = useState("")
    const [mensagemCartao, setMensagemCartao] = useState("")

    const {sacola, setSacola} = useContext(CarrinhoContext)

    const [dadosDeEntrega, setDadosDeEntrega] = useState({}) 
    const [dadosPagamento, setDadosPagamento] = useState({}) 

    const [dataIsSaved, setDataIsSaved] = useState(false) 

    const [numerocartao, setNumeroCartao] = useState(null)

    const [nomeTitular, setNomeTitular] = useState(null)

    const [vencimento, setVencimento] = useState(null)

    const [codigoCVV, setCodigoCVV]= useState(null)

    const [compraConfirmada, setCompraConfirmada] = useState(false)





    useEffect(() => {
		setTotal(sacola.reduce((total, obj) => total + obj.preço, 0))
	}, [sacola])

        const validaEmail = (event) =>{
        setEmail(event.target.value)
        const emailValue = email
        // Regex pattern para validar endereços de e-mail
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setValid(pattern.test(emailValue))
      }

    const confirmaDestino = () => {
        if(nome === null || cep === null || telefone === null){
            setMensagem('Preencha os campos para continuar!')
            return
        }
        else if(valid === false){
            setMensagem('O email inserido não é válido.')
            return
        }
        else if( nome.length < 10){
            setMensagem('Os dados inseridos no campo "NOME" são inválidos')
            return
        }
        else if(cep.length < 8){
            setMensagem('Os dados inseridos no campo "CEP" são inválidos')
            return
        }
        else if(telefone.length < 8){
            setMensagem('Os dados inseridos no campo "TELEFONE" são inválidos')
            return
        }
        else if(valid && nome.length >= 10 && cep.length >= 8 && telefone.length >= 8 ){
            setMensagem('Dados de entrega foram salvos!')
            setDadosDeEntrega(dadosDeEntrega.email = email)
            setDadosDeEntrega(dadosDeEntrega.nome = nome)
            setDadosDeEntrega(dadosDeEntrega.cep = cep)
            setDadosDeEntrega(dadosDeEntrega.telefone = telefone)
            setDataIsSaved(true)
        }         
        return;
    }

    const resetaInfosEntrega = () => {
        setDataIsSaved(!dataIsSaved)
        setDadosDeEntrega({})
        setValid(null)
        setEmail(null)
        setNome(null)
        setCep(null)
        setTelefone(null)
        setMensagem('')
    }

    const confirmaCompra = () => {
    if(dataIsSaved){
        if(nomeTitular === null || numerocartao === null || codigoCVV === null || vencimento === null){
            setMensagemCartao('Preencha os campos primeiro!')
        }
        else if(numerocartao.length < 16 ){
            setMensagemCartao('O número do cartão deve conter exatamente 16 digitos.')
        }
        else if(nomeTitular. length < 10){
            setMensagemCartao('O nome deve estar exatamento como consta no cartão')
        }
        else if(vencimento. length != 5){
            setMensagemCartao('a data de vencimento deve conter "mês" "/" "ano"')
        }
        else if(codigoCVV. length != 3){
            setMensagemCartao('O CVV deve conter exatamente 3 caracteres')
        }
        else{ setMensagemCartao('Seus dados foram válidados com sucesso!')


              setDadosPagamento(dadosPagamento.numerocartao = numerocartao)
              setDadosPagamento(dadosPagamento.nomeTitular = nomeTitular)
              setDadosPagamento(dadosPagamento.vencimento = vencimento)
              setDadosPagamento(dadosPagamento.codigoCVV = codigoCVV)
              setCompraConfirmada(true)
              setSacola([])
              console.log(dadosPagamento)
        }
    }else{
        setMensagemCartao('Confirme os dados de entrega antes de prosseguir!')
        }
    }
    return (
        <Gambiarra>
        <Sidebar/>
        <ContainerGeral>           
            <Header>
                <Logo src="./img/logo.jfif"/>
                <HeaderTitulo>CHECKOUT</HeaderTitulo>
            </Header>
        
            {compraConfirmada === true ?     
                <ContainerPosVenda>
                    <MensagemPosVenda>Seu pedido foi recebido e logo nós realizaremos a entrega, obrigado por comprar conosco! :D</MensagemPosVenda>
                </ContainerPosVenda> : 
            <Container>
            {dataIsSaved === false ?
                <Faturamento>
                    <SectionHeader>
                        <Titulo>FATURAMENTO</Titulo>
                    </SectionHeader>
                    <FormContainer>                     
                        <Input type="email" onChange={validaEmail} placeholder="Endereço de e-mail"/>
                        {valid === true ? <span style={{ color: 'green', fontSize: '10px' }}>email válido</span> : null}
                        {valid === false ? <span style={{ color: 'red', fontSize: '10px' }}>email inválido</span> : null}
                        <Input type="name" onChange={(event)=>{setNome(event.target.value), console.log(nome)}} placeholder="Nome completo"/>
                        <Input onChange={(event)=>{setCep(event.target.value), console.log(cep)}} placeholder="CEP(endereço de entrega)"/>
                        <Input onChange={(event)=>{setTelefone(event.target.value), console.log(telefone)}} placeholder="Telefone para contato"/>
                    </FormContainer>
                    <FooterFat>
                        <Mensagem>{mensagem}</Mensagem>
                        <ConfirmaFat onClick={confirmaDestino}>Confirmar</ConfirmaFat>
                    </FooterFat>
                </Faturamento>
            : 
            <Faturamento>
                <SectionHeader>
                    <Titulo>DADOS PREENCHIDOS</Titulo>
                </SectionHeader>
                <Body>
                    <Mensagem>Os dados de entrega foram preenchidos e salvos. se desejar alterar clique no botão abaixo</Mensagem>
                    <Alterar onClick={resetaInfosEntrega}>Alterar</Alterar>
                </Body>
            </Faturamento>
            }    
                <Revisao>
                    <SectionHeader>
                        <Titulo>REVISÃO</Titulo>
                    </SectionHeader>
                    {sacola.map((item) =>{
                        return(
                        <ItemContainer key={item.id}>
                            <Left>
                                <ImagemContainer>
                                    <ImagemItem src={item.url}/>
                                </ImagemContainer>
                                {/* <QuantidadeContainer>
                                    <Decremento>-</Decremento>
                                    <Display/>
                                    <Incremento>+</Incremento>
                                </QuantidadeContainer> */}
                            </Left>
                            <Mid>
                                <NomeProduto>{item.nome}</NomeProduto>
                                <Colecao>{item.colecao}</Colecao>
                                <Info>{item.cor} -{item.tamanho}-</Info>
                                <PreçoContainer>
                                    <Preço>{item.preço.toFixed(2)}R$</Preço>
                                </PreçoContainer>
                            </Mid>
                            <Descartar onClick={() => {setSacola(sacola.filter((indice) => indice !== item))}} src="./img/trash.png"/>
                        </ItemContainer>
                    )})}
                    {sacola.length > 0 ? <Total>{total.toFixed(2)} R$</Total> : null}                    
                </Revisao>
                <Pagamento>
                    <SectionHeader>
                        <Titulo>PAGAMENTO</Titulo>
                    </SectionHeader>
                    <PagamentoContainer>
                        <LabelContainer>
                            <Label htmlFor="numero">Digite o número do seu cartão*</Label>
                            <InputNumeroDoCartao onChange={(event) =>{setNumeroCartao(event.target.value)}} placeholder="0000 0000 0000 0000" name="numero"/>
                        </LabelContainer>
                        <LabelContainer>
                            <Label htmlFor="nome">Digite o nome do titular do cartão*</Label>
                            <InputNomeDoCartao onChange={(event) =>{setNomeTitular(event.target.value)}} placeholder="Ex: Che guevara" name="nome"/>
                        </LabelContainer>
                        <LabelContainerRow>
                            <LabelContainerColumn>
                                <Label htmlFor="vencimento">Vencimento*</Label>
                                <Vencimento onChange={(event) =>{setVencimento(event.target.value)}} placeholder="mm/aa" name="vencimento"/>
                            </LabelContainerColumn>
                            <LabelContainerColumn>
                                <Label htmlFor="CVV">CVV*</Label>
                                <CVV onChange={(event) =>{setCodigoCVV(event.target.value)}} placeholder="123" name="CVV"/>
                            </LabelContainerColumn>
                        </LabelContainerRow>
                    </PagamentoContainer>                  
                    <Footer>
                        <MensagemCartao>{mensagemCartao}</MensagemCartao>
                        <Termos>Ao continuar, você concorda com os nossos Termos e Condições</Termos>
                        <Finaliza onClick={confirmaCompra}>Finalizar Compra</Finaliza>
                    </Footer>
                </Pagamento>
            </Container>
            }
        </ContainerGeral>
        </Gambiarra>
    );
}
 
export default Checkout;