import styled from 'styled-components'
import profile from '../../imgs/profile.png'

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

export const Dialog = styled.dialog`
    border: 0px;
    position: fixed;
    z-index: 1;
  left: 0;
  top: 0;
  width: 30%;
  height: 70%;
  overflow: auto;
  left: 50%;
  top: 50%;
`
