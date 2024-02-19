import styled, { keyframes } from 'styled-components'
import profile from '../../imgs/profile.png'
import botaoFechar from '../../imgs/botao-fechar.png'

const fadeInUp = keyframes`
    0% {
        transform: translateY(40%);
        opacity: 0;
    }
    100% {
        transform: translateY(20%);
        opacity: 1;
    }
`;

export const HeaderDiv = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    
`

export const MidDiv = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`

export const BtnDiv = styled.div`
    height: 100%;
    width: 10%;
    display: flex ;
    align-items: center;
`

export const BtnLogin = styled.button`
    color: #fff;
    background-color: rgba(0,0,0,0);
    background-image: url(${profile});
    background-position: 5px;
    background-repeat: no-repeat;
    background-size: 50px;
    border-width: 0;
    border-radius: 420px;
    cursor: pointer;
    line-height: 1;
    font-size: 16px;
    letter-spacing: .6px;
    padding: 13px 4rem;
    text-decoration: none;
    height: 50px;
    font-family: "Poppins", sans-serif;
`

export const BtnCadastrar = styled.button`
    height: 50px;
    text-align: center;
    background-color: #2641c6;
    font-family: "Poppins", sans-serif;
    color: #fff;
    border-width: 0;
    border-radius: 420px;
    cursor: pointer;
    line-height: 1;
    font-size: 16px;
    letter-spacing: .6px;
    padding: 13px 2rem;
    text-decoration: none;
    transition: background-color 0.5s, color 0.5s, border 0.2s, width 0.2s, height 0.2s;
    &:hover {
        background-color: #3f58d4;
    }
`

//modal cadastrar //

export const Dialog = styled.dialog`
    border: 0px;
    position: fixed;
    left: 0;
    top: 0;
    width: 30%;
    height: 65%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    animation: ${fadeInUp} 1s ease forwards; 
`

export const H2 = styled.h2`
    font-weight: 400;
    font-size: 24px;
    line-height: 1.2;
    color: #393939;
    margin-left: 10px;
    margin-top: 50px;
`

export const Input = styled.input`
    background-color: #fff;
    font-family: "Poppins", sans-serif;
    border-radius: 0;
    color: #393939;
    height: 28px;
    padding: 12px 18px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 16px;
    border: 1px solid #dfdfdf;
    transition: border-color 0.3s ease; 

    &:focus {
        border-color: #2641c6; 
        outline: none;
    }
`

export const ButtonCadastrarModal = styled.button`
    background-color: #2641c6;
    color: #fff;
    height: 48px;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    border-width: 0;
    border-radius: 400px;
    width: 450px;
    cursor: pointer;
    letter-spacing: .6px;
    text-decoration: none;
    position: relative;
    white-space: nowrap;
    margin-left: 65px;
    margin-top: 50px;
    transition: background-color 0.5s, color 0.5s, border 0.2s, width 0.2s, height 0.2s;
    &:hover {
        background-color: #3f58d4;
    }
`

export const ButtonFechar = styled.button`
    width: 20px;
    height: 20px;
    justify-content: flex-end;
    border: none;
    background-image: url(${botaoFechar});
    background-position: 5px;
    background-repeat: no-repeat;
    background-size: 15px;
`

export const ButtonFecharContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

//modal login//

