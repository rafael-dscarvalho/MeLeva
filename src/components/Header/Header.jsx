import { useState } from 'react'
import { HeaderDiv, MidDiv, BtnLogin, BtnDiv, BtnCadastrar, Dialog, H2, Input, ButtonCadastrarModal, ButtonFechar, ButtonFecharContainer } from './styles'

export function Header() {
<<<<<<< HEAD
    const [modalOpenCadastro, setModalOpenCadastro] = useState(false);

    function openModalCadastro() {
        setModalOpenCadastro(true);
    }

    function closeModalCadastro() {
        setModalOpenCadastro(false);
    }

=======
    const [modalRegister, setModalRegister] = useState(false)
>>>>>>> 51048585d2debf7fe0c90d6e4ad8593e8a611864

    return (
        <HeaderDiv>
            <MidDiv>
                <BtnDiv>
<<<<<<< HEAD
                    <BtnCadastrar onClick={openModalCadastro}>Cadastrar</BtnCadastrar>
=======
                    <BtnCadastrar onClick={() => setModalRegister(!modalRegister)}>Cadastrar</BtnCadastrar>
>>>>>>> 51048585d2debf7fe0c90d6e4ad8593e8a611864
                </BtnDiv>
                <BtnDiv>
                    <BtnLogin>Login</BtnLogin>
                </BtnDiv>
            </MidDiv>
<<<<<<< HEAD
            {modalOpenCadastro && (
                <Dialog open>
                    <ButtonFecharContainer>
                        <ButtonFechar onClick={closeModalCadastro}></ButtonFechar>
=======
            {modalRegister && (
                <Dialog open>
                    <ButtonFecharContainer>
                        <ButtonFechar onClick={() => setModalRegister(!modalRegister)}></ButtonFechar>
>>>>>>> 51048585d2debf7fe0c90d6e4ad8593e8a611864
                    </ButtonFecharContainer>
                    <H2>Seja MeLeva</H2>
                    <Input type="email" placeholder='Email'></Input>
                    <Input placeholder='Nome'></Input>
                    <Input placeholder='Sobrenome'></Input>
                    <Input type="password" placeholder='Senha'></Input>
                    <ButtonCadastrarModal>Cadastrar</ButtonCadastrarModal>
                </Dialog>
            )}
        </HeaderDiv>
    )
}