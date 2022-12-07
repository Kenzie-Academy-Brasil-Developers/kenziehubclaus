import { useEffect } from 'react';
import { useContext } from 'react';
import { createContext , useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { UserContext } from './UserContext';

export const TechContext = createContext({});

export function TechProvider({children}) {
    const [load, setLoad] = useState(false);
    const [currTech, setCurrTech] = useState(undefined);
    const [changesOnList, setChangesOnList] = useState(null);
    const [openModalCreateTech, setOpenModalCreateTech] = useState(false);
    const [openModalDeleteTech, setOpenModalDeleteTech] = useState(false);
    const [openModalEditTech, setOpenModalEditTech] = useState(false);
    const [isSomeModalOpen, setIsSomeModalOpen] = useState(false);
    const { setCurrUser } = useContext(UserContext);

    async function createTech(data) {
        setLoad(true);
        const token = localStorage.getItem('@Token');
        try {
            toast.loading('Carregando...', { toastId: 'load' });
            const response = await api.post('/users/techs', data, {
                headers: {
                'Authorization': `Bearer ${token}`
                }
            });
            toast.dismiss('load');
            toast.success('Tecnologia adicionada com sucesso');
            setChangesOnList(Math.random());
            setTimeout(() => {
                setOpenModalCreateTech(false);
                setIsSomeModalOpen(false);
            }, 3500);
        } catch(error) {
            if (error.response.data.message === 'User Already have this technology created you can only update it') {
                toast.error('Erro! você já tem essa tecnologia tente atualizá-la');
            } else {
                toast.error('Ops! ocorreu um erro, tente novamente');
            }
        } finally {
            toast.dismiss('load');
            setTimeout(() => setLoad(false), 3500);
        }
    }

    async function deleteTech(){
        setLoad(true);
        const token = localStorage.getItem('@Token');
        try {
            toast.loading('Carregando...', { toastId: 'load' });
            const response = await api.delete(`/users/techs/${currTech.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.dismiss('load');
            toast.warning('Tecnologia deletada com sucesso');
            setChangesOnList(Math.random());
            setTimeout(() => {
                setOpenModalDeleteTech(false);
                setIsSomeModalOpen(false);
            }, 2500);
        } catch (error) {
            toast.error('Ops! ocorreu um erro, tente novamente');
        } finally {
            toast.dismiss('load');
            setTimeout(() => setLoad(false), 2500);
        }
    }

    async function updateTech(data) {
        setLoad(true);
        const token = localStorage.getItem('@Token');
        try {
            toast.loading('Carregando...', { toastId: 'load' });
            const response = await api.put(`/users/techs/${currTech.id}`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.dismiss('load');
            toast.info('Tecnologia atualizada com sucesso');
            setChangesOnList(Math.random());
            setTimeout(() => {
                setOpenModalEditTech(false);
                setIsSomeModalOpen(false);
            }, 3500);
        } catch (error) {
            console.error(error);
            toast.error('Ops! ocorreu um erro, tente novamente');
        } finally {
            toast.dismiss('load');
            setTimeout(() => setLoad(false), 3500);
        }
    }

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
                console.error(error);
            } finally {
            }
        }

        getUserInfoApi();

    }, [changesOnList]);


    return (
        <TechContext.Provider value={{
            load,
            setLoad,
            createTech,
            changesOnList,
            setChangesOnList,
            openModalCreateTech,
            setOpenModalCreateTech,
            openModalDeleteTech, 
            setOpenModalDeleteTech,
            openModalEditTech, 
            setOpenModalEditTech,
            currTech, 
            setCurrTech,
            deleteTech,
            updateTech,
            isSomeModalOpen,
            setIsSomeModalOpen
        }}>
            {children}
        </TechContext.Provider>
    )
}