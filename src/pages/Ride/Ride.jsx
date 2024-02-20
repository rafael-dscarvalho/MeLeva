import { Footer } from '../../components/Footer/Footer'
import { ProfileImg } from '../Passenger/styles'
import { ButtonForm, FormContainer, HeaderContainer, MainContainer, MenuButton, MenuContainer, MidContainer, StyledLink } from '../Ride/styles'
import Perfil from '/perfil.png'



export function Ride() {

    return (
        <MainContainer>
            <HeaderContainer>
                <StyledLink to='/' >Home</StyledLink>
                <StyledLink to=''>Motorista</StyledLink>
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