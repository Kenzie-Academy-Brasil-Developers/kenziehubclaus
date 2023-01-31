import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import { Tech } from '../../components/Tech';
import { LinkBtnStyle } from '../../styles/buttons';
import { ContainerStyle, DashboardStyle, LoadingStyle, TechsStyle } from './styles';
import { FaPlus } from 'react-icons/fa';
import { ModalCreate } from '../../components/ModalCreate';
import { ModalDelete } from '../../components/ModalDelete';
import { ModalEdit } from '../../components/ModalEdit';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, verifyUser, updateUser } from '../../store/modules/user/actions';
import { createUserThunk, updateUserThunk } from '../../store/modules/user/thunk';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

export function Dashboard() {
    const dispatch = useDispatch();
    const currUser = useSelector(({user}) => user.currUser);
    const [load, setLoad] = useState(false);
    const [currTech, setCurrTech] = useState(undefined);
    const [changesOnList, setChangesOnList] = useState(null);
    const [openModalCreateTech, setOpenModalCreateTech] = useState(false);
    const [openModalDeleteTech, setOpenModalDeleteTech] = useState(false);
    const [openModalEditTech, setOpenModalEditTech] = useState(false);
    const [isSomeModalOpen, setIsSomeModalOpen] = useState(false);
    
    useEffect(() => {getUserInfoApi()}, [changesOnList]);

    async function createTech(data) {
        setLoad(true);
        const token = localStorage.getItem('@Token');
        try {
            toast.loading('Carregando...', { toastId: 'load' });
            await api.post('/users/techs', data, {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            });
            toast.dismiss('load');
            toast.success('Tecnologia adicionada com sucesso');
            setChangesOnList(Math.random());
            setOpenModalCreateTech(false);
            setIsSomeModalOpen(false);
        } catch(error) {
            if (error.response.data.message === 'User Already have this technology created you can only update it') {
                toast.error('Erro! você já tem essa tecnologia tente atualizá-la');
            } else {
                toast.error('Ops! ocorreu um erro, tente novamente');
            }
        } finally {
            toast.dismiss('load');
            setLoad(false);
        }
    }

    async function deleteTech(){
        setLoad(true);
        const token = localStorage.getItem('@Token');
        try {
            toast.loading('Carregando...', { toastId: 'load' });
            await api.delete(`/users/techs/${currTech.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.dismiss('load');
            toast.warning('Tecnologia deletada com sucesso');
            setChangesOnList(Math.random());
            setOpenModalDeleteTech(false);
            setIsSomeModalOpen(false);
        } catch (error) {
            toast.error('Ops! ocorreu um erro, tente novamente');
        } finally {
            toast.dismiss('load');
            setLoad(false);
        }
    }

    async function updateTech(data) {
        setLoad(true);
        const token = localStorage.getItem('@Token');
        try {
            toast.loading('Carregando...', { toastId: 'load' });
            await api.put(`/users/techs/${currTech.id}`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.dismiss('load');
            toast.info('Tecnologia atualizada com sucesso');
            setChangesOnList(Math.random());
            setTimeout(() => setOpenModalEditTech(false), 2000);
            setIsSomeModalOpen(false);
        } catch (error) {
            console.error(error);
            toast.error('Ops! ocorreu um erro, tente novamente');
        } finally {
            toast.dismiss('load');
            setLoad(false);
        }
    }

    async function getUserInfoApi() {
        const token = localStorage.getItem('@Token');
        try {
            const response = await api.get('/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            dispatch(updateUserThunk(response.data))
        } catch(error) {
            console.error(error);
        } finally {
        }
    }

    function showModalAddTech() {
        setOpenModalCreateTech(true);
        setIsSomeModalOpen(true);
    }

    function logout() {
        localStorage.clear(); 
        dispatch(setAuth(false));
    }
    
    document.body.style.overflowY = isSomeModalOpen ? 'hidden' : 'unset';  

    return (
                <DashboardStyle>
                    <button onClick={() => dispatch(verifyUser())}>
                        Verificar
                    </button>
                    <ContainerStyle>
                        <header>
                            <img src={logo} alt='Kenzie Hub'/>
                            <LinkBtnStyle variant='tertiary' onClick={() => logout()} to='/login'>Sair</LinkBtnStyle>
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
                                <button onClick={() => showModalAddTech()}><FaPlus/></button>
                            </div>
                            <ul>
                                {
                                currUser.techs && currUser.techs.map(el =>
                                <Tech 
                                    key={el.id} 
                                    title={el.title} 
                                    status={el.status} 
                                    id={el.id} 
                                    allTechInfo={el} 
                                    setCurrTech={setCurrTech}
                                    setOpenModalDeleteTech={setOpenModalDeleteTech}
                                    setOpenModalEditTech={setOpenModalEditTech}
                                    setIsSomeModalOpen={setIsSomeModalOpen} 
                                />
                                )
                                }
                            </ul>
                            
                            
                        </TechsStyle>
                    </ContainerStyle>
                    {openModalCreateTech && <ModalCreate 
                                                load={load}
                                                setIsSomeModalOpen={setIsSomeModalOpen}
                                                createTech={createTech}
                                                setOpenModalCreateTech={setOpenModalCreateTech}
                                            />}
                    {openModalDeleteTech && <ModalDelete
                                                load={load}
                                                setIsSomeModalOpen={setIsSomeModalOpen}
                                                currTech={currTech}
                                                deleteTech={deleteTech}
                                                setOpenModalDeleteTech={setOpenModalDeleteTech}
                                            />}
                    {openModalEditTech && <ModalEdit
                                                load={load}
                                                setIsSomeModalOpen={setIsSomeModalOpen}
                                                currTech={currTech}
                                                setOpenModalEditTech={setOpenModalEditTech}
                                                updateTech={updateTech}
                                          />}
                </DashboardStyle>
    )
}