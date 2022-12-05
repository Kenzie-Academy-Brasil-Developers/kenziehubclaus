import { useContext } from 'react';
import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import { UserContext } from '../../providers/UserContext';
import { api } from '../../services/api';
import { LinkBtnStyle } from '../../styles/buttons';
import { ContainerStyle, DashboardStyle } from './styles';

export function Dashboard() {
    const { currUser } = useContext(UserContext);
    console.log(currUser)
    console.log(currUser.techs)
    console.log(currUser.works)
    return (
            <DashboardStyle>
                <ContainerStyle>
                    <header>
                        <img src={logo} alt='Kenzie Hub'/>
                        <LinkBtnStyle variant='tertiary' onClick={() => localStorage.clear()} to='/login'>Sair</LinkBtnStyle>
                    </header>
                </ContainerStyle>
                <main>
                    <ContainerStyle>
                        <section>
                            <h1>Olá, {currUser.name}</h1>
                            <h3>{currUser.course_module}</h3>
                        </section>
                    </ContainerStyle>
                </main>
                <ContainerStyle>
                    
                </ContainerStyle>
            </DashboardStyle>
    );
};