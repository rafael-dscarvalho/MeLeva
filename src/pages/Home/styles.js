import styled from 'styled-components'
import background from '../../imgs/home_background.jpg'

export const MainContainer = styled.div`
    margin: 0;
    height: 100vh;
`

export const TopContainer = styled.div`
    height: 100vh;
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
    /* width: 23%; */
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
    height: 100vh;
    width: 100%;
    background-color: #00dcc0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    gap: 1em;
`

export const TravelContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 11rem;
    letter-spacing: -5px;
    color: white;
    font-weight: bold;
`

export const PhraseContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const TipsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 1em 0;
    width: 70%;
`
export const InnerTipContainer = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const Container = styled.div`
    background-color: #2641c6;
    border-radius: 50px;
    color: #fff;
    width: 80%;
    max-width: 80%;
    height: 6em;
    display: flex;
    align-items: center;
    padding: 0 1em 0 0;
`

export const Icon = styled.div`
    height: 70%;
    aspect-ratio: 1/1;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`

export const P = styled.p`      
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
`

export const ImgIcon = styled.img`      
    width: 50%; 
    height: 50%;
`

export const HappyContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 200px;
    letter-spacing: -5px;
    color: white;
    font-weight: bold;
`

export const CircleContainer = styled.div`
    right: 0;
    bottom: -10rem;
    z-index: 1;
    position: absolute;
`

export const CircleContainer2 = styled.div`
    bottom: -5rem;
    left: 0;
    position: absolute;
`

export const Img = styled.img`
    width: 10rem;
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