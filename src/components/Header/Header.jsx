import { useState } from 'react';
import { HeaderDiv, MidDiv, BtnLogin, BtnDiv, BtnCadastrar, Dialog } from './styles';

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
                    <h1>Oi, eu sou um modal sem graça! :T</h1>
                    <button onClick={closeModal}>Fechar</button>
                </Dialog>
            )}
        </HeaderDiv>
        
    );
}