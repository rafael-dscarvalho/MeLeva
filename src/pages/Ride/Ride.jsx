import { useState } from 'react'
import { Footer } from '../../components/Footer/Footer'
import { ProfileImg } from '../Passenger/styles'
import { ButtonForm, FormContainer, HeaderContainer, MainContainer, MenuButton, MenuContainer, MidContainer, RiderData, StyledLink } from '../Ride/styles'
import Perfil from '/perfil.png'



export function Ride() {
    const [rider, setRider] = useState({ name: 'Biruleibe' })

    return (
        <MainContainer>
            <HeaderContainer>
                <div></div>
                <nav>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/passenger'>Passageiro</StyledLink>
                    <StyledLink to='/ride'>Motorista</StyledLink>
                </nav>
                <RiderData>
                    Bem vindo, {rider.name}
                </RiderData>
            </HeaderContainer>

            <MidContainer>
                <MenuContainer>
                    <MenuButton>
                        Documentos
                    </MenuButton>
                    <MenuButton>
                        Veículos
                    </MenuButton>
                    <MenuButton>
                        Caronas
                    </MenuButton>
                </MenuContainer>


                <FormContainer>
                    <ProfileImg src={Perfil} />

                    <label>CNH:</label>
                    <input type="text" id="CNH"></input>

                    <label>Trajeto:</label>
                    <input type="text" id="CNH"></input>

                    <div>
                        <ButtonForm>Editar</ButtonForm>
                        <ButtonForm>Enviar</ButtonForm>
                    </div>


                </FormContainer>


            </MidContainer>
            <Footer />
        </MainContainer>
    )
}