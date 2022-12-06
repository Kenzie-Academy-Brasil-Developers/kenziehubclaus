import { useContext } from 'react';
import logo from '../../assets/logo.svg';
import { Tech } from '../../components/Tech';
import { LinkBtnStyle } from '../../styles/buttons';
import { ContainerStyle, DashboardStyle, LoadingStyle, TechsStyle } from './styles';
import { FaPlus } from 'react-icons/fa';
import { ModalCreate } from '../../components/ModalCreate';
import { TechContext } from '../../providers/TechContext';
import { ModalDelete } from '../../components/ModalDelete';
import { ModalEdit } from '../../components/ModalEdit';
import { UserContext } from '../../providers/UserContext';
import { AiOutlineLoading } from 'react-icons/ai';

export function Dashboard() {
    const { currUser , loadingPage } = useContext(UserContext);
    const { 
        openModalCreateTech,
        setOpenModalCreateTech,
        openModalDeleteTech,
        openModalEditTech,
    } = useContext(TechContext);

    if (loadingPage) {
        document.body.style.overflowX = 'hidden';
        return <><LoadingStyle><AiOutlineLoading/></LoadingStyle></>
    }

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
    )
}