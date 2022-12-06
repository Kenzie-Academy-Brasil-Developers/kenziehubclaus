import { createContext , useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});

export function TechProvider({children}) {
    const [load, setLoad] = useState(false);
    const [changesOnList, setChangesOnList] = useState(null);
    const [openModalCreateTech, setOpenModalCreateTech] = useState(false);
    const [openModalDeleteTech, setOpenModalDeleteTech] = useState(false);
    const [currTech, setCurrTech] = useState(undefined);

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
            setTimeout(() => setOpenModalCreateTech(false), 3500);
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
            setTimeout(() => setOpenModalDeleteTech(false), 2500);
            console.log(response)
        } catch (error) {
            toast.error('Ops! ocorreu um erro, tente novamente');
        } finally {
            toast.dismiss('load');
            setTimeout(() => setLoad(false), 2500);
        }
    }

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
            currTech, 
            setCurrTech,
            deleteTech
        }}>
            {children}
        </TechContext.Provider>
    )
}