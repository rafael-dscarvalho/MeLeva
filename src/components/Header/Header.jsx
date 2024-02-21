import { useState } from 'react';
import { HeaderDiv, MidDiv, BtnLogin, BtnDiv, BtnCadastrar, Dialog, H2, Input, ButtonCadastrarModal, ButtonFechar, ButtonFecharContainer } from './styles';

export function Header() {
    const [modalOpenCadastro, setModalOpenCadastro] = useState(false);

    function openModalCadastro() {
        setModalOpenCadastro(true);
    }

    function closeModalCadastro() {
        setModalOpenCadastro(false);
    }


    return (
        <HeaderDiv>
            <MidDiv>
                <BtnDiv>
                    <BtnCadastrar onClick={openModalCadastro}>Cadastrar</BtnCadastrar>
                </BtnDiv>
                <BtnDiv>
                    <BtnLogin>Login</BtnLogin>
                </BtnDiv>
            </MidDiv>
            {modalOpenCadastro && (
                <Dialog open>
                    <ButtonFecharContainer>
                        <ButtonFechar onClick={closeModalCadastro}></ButtonFechar>
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
        
    );
}