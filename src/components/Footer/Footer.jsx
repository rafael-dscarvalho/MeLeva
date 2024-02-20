import { FooterDiv, TextContainer, Tittle, P, IconsContainer, Icon } from './styles'
import facebook from '../../imgs/facebook_icon.png'
import twitter from '../../imgs/twitter_icon.png'
import instagram from '../../imgs/instagram_icon.png'
import linkedin from '../../imgs/linkedin_icon.png'
import youtube from '../../imgs/youtube_icon.png'

export function Footer() {
    return (
        <FooterDiv>
            <TextContainer>
                <Tittle>
                    © 2024 Me Leva Limited.
                </Tittle>
                <P>
                    Somos uma plataforma de compartilhamento de caronas regulares<br /> com intuito de desestressar o trânsito em grandes centros urbanos.
                </P>
            </TextContainer>
            <IconsContainer>
                <Icon src={facebook} />
                <Icon src={twitter} />
                <Icon src={instagram} />
                <Icon src={linkedin} />
                <Icon src={youtube} />
            </IconsContainer>
        </FooterDiv>
    )
}