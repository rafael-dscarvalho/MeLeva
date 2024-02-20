import styled from 'styled-components'
import background from '../../imgs/home_background.jpg'

export const MainContainer = styled.div`
    margin: 0;
    height: 100vh;
`

export const TopContainer = styled.div`
    height: 95vh;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(${background});
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
`

export const InnerContainer = styled.div`
    height: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Logo = styled.div`
    height: 40%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const H1 = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 70px;
    margin-top: 150px;
`

export const TextAndButton = styled.div`
    height: 50%;
    width: 80%;
    margin-top: 50px;
`

export const TextContainer = styled.div`
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const ButtonContainer = styled.div`
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const H2 = styled.h2`
    color: white;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    line-height: 1.2;
`

export const Button = styled.button`
    color: #3c3b3b;
    background-color: #00dcc0;
    font-weight: 700;
    width: 23%;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 54px;
    font-size: 20px;
    border-width: 0;
    border-radius: 420px;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
`

export const MidContainer = styled.div`
    height: 100%;
    background-color: #00dcc0;
`

export const TravelContainer = styled.div`
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    font-size: 200px;
    letter-spacing: -5px;
    color: white;
    font-weight: bold;
    translate: none;
    rotate: none;
    scale: none;
    transform: translate(0px, 0px);
`

export const PhraseContainer = styled.div`
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const TipsContainer = styled.div`
    height: 20%;
    margin-left: 15%;
    margin-right: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const InnerTipContainer = styled.div`
    width: 50%;
    height: 80%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -50px;
    
`

export const Container = styled.div`
    background-color: #2641c6;
    border-radius: 50px;
    color: #fff;
    width: 80%;
    height: 70%;
    display: flex;
    align-items: center;
`

export const Icon = styled.div`
    height: 80px;
    width: 80px;
    background-color: #fff;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
    border-color: #00dcc0;
    margin-left: -5px;
    align-items: center;
    display: flex;
    justify-content: center;
`

export const TipText = styled.div`  
    height: 100%;
    width: 70%;
    display: flex;
    align-items: flex-start;
    margin-left: 20px;
`

export const P = styled.p`      
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
  
    
`

export const ImgIcon = styled.img`      
    width: 50px; 
    height: 50px;
`

export const HappyContainer = styled.div`
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 200px;
    letter-spacing: -5px;
    color: white;
    font-weight: bold;
`

export const CircleContainer = styled.div`
    right: 0.1px;
    bottom: -250px;
    z-index: 1;
    position: absolute;
`

export const CircleContainer2 = styled.div`
    bottom: -1100px;
    left: -1px;
    position: absolute;
`

export const Img = styled.img`
    width: 250px;
    height: auto;
`

export const TopText = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #3c3b3b;
    margin: 0;
`

export const BottomText = styled.h2`
    font-weight: 700;
    font-size: 32px;
    color: #3c3b3b;
    margin: 0;
`