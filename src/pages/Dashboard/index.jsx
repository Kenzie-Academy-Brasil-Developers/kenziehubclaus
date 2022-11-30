import logo from '../../assets/logo.svg';
import { LinkBtnStyle } from '../../styles/buttons';
import { ContainerStyle, DashboardStyle } from './styles';

export function Dashboard() {
    return (
            <DashboardStyle>
                <ContainerStyle>
                    <header>
                        <img src={logo} alt='Kenzie Hub'/>
                        <LinkBtnStyle variant='tertiary'>Sair</LinkBtnStyle>
                    </header>
                </ContainerStyle>
                <main>
                    <ContainerStyle>
                        <section>
                            <h1>Olá, Fulano de Tal</h1>
                            <h3>Primeiro módulo  (Introdução ao Frontend)</h3>
                        </section>
                    </ContainerStyle>
                </main>
                <ContainerStyle>
                    <h1>Que pena! Estamos em desenvolvimento :(</h1>
                    <h2>Nossa aplicação está em desenvolvimento, em breve teremos novidades</h2>
                </ContainerStyle>
            </DashboardStyle>
    )
};