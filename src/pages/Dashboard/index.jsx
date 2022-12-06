import { useContext } from 'react';
import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import { Tech } from '../../components/Tech';
import { UserContext } from '../../providers/UserContext';
import { api } from '../../services/api';
import { LinkBtnStyle } from '../../styles/buttons';
import { ContainerStyle, DashboardStyle, TechsStyle } from './styles';
import { FaPlus } from 'react-icons/fa';
import { ModalCreate } from '../../components/ModalCreate';
import { TechContext } from '../../providers/TechContext';
import { ModalDelete } from '../../components/ModalDelete';
import { ModalEdit } from '../../components/ModalEdit';

export function Dashboard() {
    const { currUser , setCurrUser } = useContext(UserContext);
    
    const { 
        changesOnList,
        openModalCreateTech,
        setOpenModalCreateTech,
        openModalDeleteTech,
        openModalEditTech
    } = useContext(TechContext);

    let optionScroll = openModalCreateTech ? 'hidden' : 'unset';  
    document.body.style.overflowY = optionScroll;

    useEffect(() => {
        async function getUserInfoApi() {
            const token = localStorage.getItem('@Token');
            try {
                const response = await api.get('/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setCurrUser(response.data);
            } catch(error) {
                console.log(error);
            } finally {
            }
        }

        getUserInfoApi();

    }, [changesOnList]);

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
                                <button onClick={() => setOpenModalCreateTech(true)}><FaPlus/></button>
                            </div>
                            <ul>
                                {
                                currUser.techs && currUser.techs.map(el =>
                                <Tech key={el.id} title={el.title} status={el.status} id={el.id} allTechInfo={el}/>
                                )
                                }
                            </ul>
                            
                            
                        </TechsStyle>
                    </ContainerStyle>
                    {openModalCreateTech && <ModalCreate/>}
                    {openModalDeleteTech && <ModalDelete/>}
                    {openModalEditTech && <ModalEdit/>}
                </DashboardStyle>
    );
};