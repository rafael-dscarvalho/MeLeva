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
    justify-content: center;
    align-items: center;
    height: 10vh;
    gap: 2em;

    >nav {
        display: flex;
        gap: .5em;
    }
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

export const MenuContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 1em;
`

export const MenuButton = styled.button`
    background: none;
    border: 0;
    font-size: 1.5em;
    width: fit-content;
    margin-left: .1em;
    cursor: pointer;
    color: #888;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 1em;
`

export const ButtonForm = styled.button`
    background: none;
    border: 0;
    font-size: 1em;
    width: fit-content;
    margin-left: 1em;
    cursor: pointer;
    background: #00dcc0;
`