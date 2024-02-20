import {
    MainContainer, TopContainer, MidContainer, InnerContainer, Logo, TextAndButton, H1, H2, TextContainer, ButtonContainer, Button,
    TravelContainer, PhraseContainer, TipsContainer, HappyContainer, CircleContainer, CircleContainer2, Img, TopText, BottomText, InnerTipContainer,
    Icon, TipText, Container, P, ImgIcon
} from './styles'
import { Header } from '../../components/Header/Header.jsx'
import { Footer } from '../../components/Footer/Footer.jsx'
import circle from '../../imgs/circle.png'
import circle2 from '../../imgs/circle2.png'
import locationPin from '../../imgs/location-pin.png'
import leafPin from '../../imgs/leaf-pin.png'
import savingsPin from '../../imgs/savings-pin.png'
import smilePin from '../../imgs/smile-pin.png'

export function Home() {
    return (
        <MainContainer>
            <TopContainer>
                <Header />
                <InnerContainer>
                    <Logo>
                        <H1>CarShare</H1>
                    </Logo>
                    <TextAndButton>
                        <TextContainer>
                            <H2>Junte-se a outras pessoas que estão<br /> salvando dinheiro e o planeta compartilhando<br /> caronas</H2>
                        </TextContainer>
                        <ButtonContainer>
                            <Button>Ofereça uma carona</Button>
                        </ButtonContainer>
                    </TextAndButton>
                </InnerContainer>
                <CircleContainer>
                    <Img src={circle}></Img>
                </CircleContainer>
            </TopContainer>
            <MidContainer>
                <TravelContainer>
                    Carona
                </TravelContainer>
                <PhraseContainer>
                    <TopText>
                        JUNTE-SE A REVOLUÇÃO DAS CARONAS.
                    </TopText>
                    <BottomText>
                        É a maneira fácil e divertida de reduzir os custos com condução.
                    </BottomText>
                </PhraseContainer>
                <TipsContainer>
                    <InnerTipContainer>
                        <Container>
                            <Icon>
                                <ImgIcon src={locationPin} />
                            </Icon>
                            <TipText>
                                <P><strong>Cadastre-se gratuitamente</strong> e comece a compartilhar caronas</P>
                            </TipText>
                        </Container>
                    </InnerTipContainer>
                    <InnerTipContainer>
                        <Container>
                            <Icon>
                                <ImgIcon src={leafPin} />
                            </Icon>
                            <TipText>
                                <P>Faça parte dessa revolução e ajude a reduzir as <strong>emissões de CO2</strong></P>
                            </TipText>
                        </Container>
                    </InnerTipContainer>
                </TipsContainer>
                <TipsContainer>
                    <InnerTipContainer>
                        <Container>
                            <Icon>
                                <ImgIcon src={savingsPin} />
                            </Icon>
                            <TipText>
                                <P><strong>Economize!</strong> Divida seus custos com alguém que compartilha do seu trajeto</P>
                            </TipText>
                        </Container>
                    </InnerTipContainer>
                    <InnerTipContainer>
                        <Container>
                            <Icon>
                                <ImgIcon src={smilePin} />
                            </Icon>
                            <TipText>
                                <P><strong>Reduza o stress</strong> de dirigir ou utilizar transporte público</P>
                            </TipText>
                        </Container>
                    </InnerTipContainer>
                </TipsContainer>
                <HappyContainer>
                    Feliz
                </HappyContainer>
                <CircleContainer2>
                    <Img src={circle2}></Img>
                </CircleContainer2>
            </MidContainer>
            <Footer />
        </MainContainer>
    )
}