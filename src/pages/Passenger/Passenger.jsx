import { ButtonContact, ButtonFilter, Card, Cards, CardsContainer, Filter, FiltersContainer, FormSearch, H1, HeaderContainer, InputSearch, InputSubmit, MainContainer, MidContainer, PassengerData, ProfileData, ProfileImg, SpanData, SpanFilter, SpanTitle, StyledLink } from "./styles"
import { Footer } from '../../components/Footer/Footer'
import { useState } from "react"
import Perfil from '/perfil.png'

export function Passenger() {
    const [passenger, setPassenger] = useState({ name: 'Biruleibe' })

    async function handleSearch(event) {
        event.preventDefault()
    }

    return (
        <MainContainer>
            <HeaderContainer>
                <div></div>
                <nav>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/passenger'>Passageiro</StyledLink>
                    <StyledLink to='/ride'>Motorista</StyledLink>
                </nav>
                <PassengerData>
                    Bem vindo, {passenger.name}
                </PassengerData>
            </HeaderContainer>
            <MidContainer>
                <FiltersContainer>
                    <H1>Filtros</H1>
                    <Filter>
                        <SpanFilter>
                            Veículo
                        </SpanFilter>
                        <ButtonFilter>
                            Carro
                        </ButtonFilter>
                        <ButtonFilter>
                            Moto
                        </ButtonFilter>
                    </Filter>
                    <Filter>
                        <SpanFilter>
                            Distância do motorista
                        </SpanFilter>
                        <ButtonFilter>
                            {"< 1km"}
                        </ButtonFilter>
                        <ButtonFilter>
                            {"< 2km"}
                        </ButtonFilter>
                        <ButtonFilter>
                            {"< 3km"}
                        </ButtonFilter>
                        <ButtonFilter>
                            {"< 4km"}
                        </ButtonFilter>
                        <ButtonFilter>
                            {"< 5km"}
                        </ButtonFilter>
                    </Filter>
                    <Filter>
                        <SpanFilter>
                            Dias da Semana
                        </SpanFilter>
                        <ButtonFilter>
                            Segunda-Feira
                        </ButtonFilter>
                        <ButtonFilter>
                            Terça-Feira
                        </ButtonFilter>
                        <ButtonFilter>
                            Quarta-Feira
                        </ButtonFilter>
                        <ButtonFilter>
                            Quinta-Feira
                        </ButtonFilter>
                        <ButtonFilter>
                            Sexta-Feira
                        </ButtonFilter>
                        <ButtonFilter>
                            Sábado
                        </ButtonFilter>
                        <ButtonFilter>
                            Domingo
                        </ButtonFilter>
                    </Filter>
                </FiltersContainer>
                <CardsContainer>
                    <H1>Motoristas</H1>
                    <FormSearch onSubmit={handleSearch}>
                        <InputSearch placeholder="Origem" />
                        <InputSearch placeholder="Destino" />
                        <InputSubmit value='Pesquisar' />
                    </FormSearch>
                    <Cards>
                        <Card>
                            <ProfileImg src={Perfil} />
                            <ProfileData>
                                <div>
                                    <SpanTitle>Nome</SpanTitle>
                                    <SpanData>Biruleibe</SpanData>
                                </div>
                                <div>
                                    <SpanTitle>Valor</SpanTitle>
                                    <SpanData>R$ 15</SpanData>
                                </div>
                            </ProfileData>
                            <ProfileData>
                                <div>
                                    <SpanTitle>Saída</SpanTitle>
                                    <SpanData>Rodovia Baldicero Filomeno</SpanData>
                                </div>
                                <div>
                                    <SpanTitle>Destino</SpanTitle>
                                    <SpanData>Centro</SpanData>
                                </div>
                            </ProfileData>
                            <ButtonContact>
                                Entrar em Contato
                            </ButtonContact>
                        </Card>
                        <Card>
                            <ProfileImg src={Perfil} />
                            <ProfileData>
                                <div>
                                    <SpanTitle>Nome</SpanTitle>
                                    <SpanData>Biruleibe</SpanData>
                                </div>
                                <div>
                                    <SpanTitle>Valor</SpanTitle>
                                    <SpanData>R$ 15</SpanData>
                                </div>
                            </ProfileData>
                            <ProfileData>
                                <div>
                                    <SpanTitle>Saída</SpanTitle>
                                    <SpanData>Rodovia Baldicero Filomeno</SpanData>
                                </div>
                                <div>
                                    <SpanTitle>Destino</SpanTitle>
                                    <SpanData>Centro</SpanData>
                                </div>
                            </ProfileData>
                            <ButtonContact>
                                Entrar em Contato
                            </ButtonContact>
                        </Card>
                        <Card>
                            <ProfileImg src={Perfil} />
                            <ProfileData>
                                <div>
                                    <SpanTitle>Nome</SpanTitle>
                                    <SpanData>Biruleibe</SpanData>
                                </div>
                                <div>
                                    <SpanTitle>Valor</SpanTitle>
                                    <SpanData>R$ 15</SpanData>
                                </div>
                            </ProfileData>
                            <ProfileData>
                                <div>
                                    <SpanTitle>Saída</SpanTitle>
                                    <SpanData>Rodovia Baldicero Filomeno</SpanData>
                                </div>
                                <div>
                                    <SpanTitle>Destino</SpanTitle>
                                    <SpanData>Centro</SpanData>
                                </div>
                            </ProfileData>
                            <ButtonContact>
                                Entrar em Contato
                            </ButtonContact>
                        </Card>
                        <Card>
                            <ProfileImg src={Perfil} />
                            <ProfileData>
                                <div>
                                    <SpanTitle>Nome</SpanTitle>
                                    <SpanData>Biruleibe</SpanData>
                                </div>
                                <div>
                                    <SpanTitle>Valor</SpanTitle>
                                    <SpanData>R$ 15</SpanData>
                                </div>
                            </ProfileData>
                            <ProfileData>
                                <div>
                                    <SpanTitle>Saída</SpanTitle>
                                    <SpanData>Rodovia Baldicero Filomeno</SpanData>
                                </div>
                                <div>
                                    <SpanTitle>Destino</SpanTitle>
                                    <SpanData>Centro</SpanData>
                                </div>
                            </ProfileData>
                            <ButtonContact>
                                Entrar em Contato
                            </ButtonContact>
                        </Card>
                    </Cards>
                </CardsContainer>
            </MidContainer>
            <Footer />
        </MainContainer>
    )
}