import { useContext } from 'react';
import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import { Tech } from '../../components/Tech';
import { UserContext } from '../../providers/UserContext';
import { api } from '../../services/api';
import { LinkBtnStyle } from '../../styles/buttons';
import { ContainerStyle, DashboardStyle, TechsStyle } from './styles';
import { FaPlus } from 'react-icons/fa';

export function Dashboard() {
    const { currUser } = useContext(UserContext);
    console.log(currUser.techs)
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
                    <TechsStyle>
                        <div>
                            <h2>Tecnologias</h2>
                            <button><FaPlus/></button>
                        </div>
                        <ul>
                            {
                            currUser.techs && currUser.techs.map(({id,title,status}) =>
                            <Tech key={id} title={title} status={status} id={id}/>
                            )
                            }
                        </ul>
                    </TechsStyle>
                </ContainerStyle>
            </DashboardStyle>
    );
};