import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { TechContext } from "../../providers/TechContext";
import { api } from "../../services/api";
import { Button } from "../../styles/buttons";
import { ModalStyle, ModalWrapperStyle } from "../../styles/modal";
import { Input } from "../Input";
import { Select } from "../Select";

export function ModalDelete() {

    const { 
        changesOnList,
        openModalDeleteTech,
        setOpenModalDeleteTech,
        currTech,
        load,
        deleteTech
    } = useContext(TechContext);
        
    const { handleSubmit } = useForm();

    

    return (
        <ModalWrapperStyle>
            <ToastContainer
            toastStyle={{ backgroundColor: 'var(--grey-2)' }}
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            theme='dark'
            limit={2}
            />
            <ModalStyle>
                <div>
                    <h2>Deletar Tecnologia</h2>
                    <button onClick={() => setOpenModalDeleteTech(false)}>X</button>
                </div>
                <form onSubmit={handleSubmit(deleteTech)}>
                    <Input 
                        id='name'
                        labelText='Nome do projeto'
                        disabled={'true'}
                        value={currTech.title}
                    />
                    <Select
                        id='status'
                        labelText='Status'
                        disabled={'true'}
                        arrayOptions={
                            [
                                {
                                    value: currTech.status,
                                    text: currTech.status
                                }
                            ]
                        }
                    />
                    <Button type='submit' variant='secondary' disabled={load}>Excluir</Button>
                </form>
            </ModalStyle>
        </ModalWrapperStyle>
    )
}