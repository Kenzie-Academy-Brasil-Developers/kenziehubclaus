import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { LinkBtnStyle } from '../../styles/buttons';
import { ContainerStyle, DashboardStyle } from './styles';

export function Dashboard({ currUser }) {
    // useEffect(() => {
    //     async function getUserInfoApi() {
    //         try {
    //             const response = await api.get('/profile', {
    //                 headers: {
    //                     'Authorization': `Bearer ${localStorage.getItem('@Token')}`
    //                 }
    //             });
    //             const currentUser = {
    //                 name: response.data.name,
    //                 module: response.data.course_module
    //             }
    //             setUserDate(currentUser);
    //             console.log(response);
    //         } catch(error) {
    
    //         } finally {
    
    //         }
    //     }
    //     getUserInfoApi();
        
    // }, []);

    console.log(currUser)
    
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
                    <h1>Que pena! Estamos em desenvolvimento :(</h1>
                    <h2>Nossa aplicação está em desenvolvimento, em breve teremos novidades</h2>
                </ContainerStyle>
            </DashboardStyle>
    );
};