import { useState } from 'react';
import { HeaderDiv, MidDiv, BtnLogin, BtnDiv, BtnCadastrar, Dialog, H2, Input, ButtonCadastrarModal, ButtonFechar, ButtonFecharContainer } from './styles';

export function Header() {
    const [modalOpen, setModalOpen] = useState(false);

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }


    return (
        <HeaderDiv>
            <MidDiv>
                <BtnDiv>
                    <BtnCadastrar onClick={openModal}>Cadastrar</BtnCadastrar>
                </BtnDiv>
                <BtnDiv>
                    <BtnLogin>Login</BtnLogin>
                </BtnDiv>
            </MidDiv>
            {modalOpen && (
                <Dialog open>
                    <ButtonFecharContainer>
                        <ButtonFechar onClick={closeModal}></ButtonFechar>
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