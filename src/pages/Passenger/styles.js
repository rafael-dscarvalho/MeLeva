import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MainContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;

    >nav {
        display: flex;
        gap: .5em;
    }
`

export const PassengerData = styled.div`
    font-size: 14px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 16px;
`

export const MidContainer = styled.section`
    display: flex;
    padding: 2%;
    width: 96%;
`

export const FiltersContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 1em;
`

export const H1 = styled.span`
    font-size: 1.5em;
`

export const Filter = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5em;
`

export const SpanFilter = styled.span`
    font-size: 1em;
    color: #555;
`

export const ButtonFilter = styled.button`
    background: none;
    border: 0;
    font-size: .8em;
    width: fit-content;
    margin-left: 1em;
    cursor: pointer;
    color: #888;
`

export const CardsContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 70%;
    gap: 1em;
`

export const Cards = styled.section`
    display: grid;
    grid-template-columns: auto auto;
    gap: 1em;
`

export const Card = styled.div`
    position: relative;
    display: grid;
    padding: 1em;
    gap: 1em;
    font-size: 14px;
    grid-template-columns: auto auto;
    border: 2px solid #aaa;
    border-radius: 10px;
`

export const ProfileImg = styled.img`
    width: 20%;
`

export const ProfileData = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 2em;

    >div {
        display: flex;
        flex-direction: column;
    }
`

export const ButtonContact = styled.button`
    border: 0;
    border-radius: 5px;
    padding: .5em 1em;
    background: #00dcc0;
`

export const SpanTitle = styled.span`
    font-weight: bold;
`

export const SpanData = styled.span`
    
`