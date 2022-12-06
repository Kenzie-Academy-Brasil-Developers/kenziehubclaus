import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { TechContext } from "../../providers/TechContext";
import { Button } from "../../styles/buttons";
import { ModalStyle, ModalWrapperStyle } from "../../styles/modal";
import { Select } from "../Select";
import { formSchema } from "./validation";

export function ModalEdit() {

    const { 
        load,
        setOpenModalEditTech,
        updateTech

    } = useContext(TechContext);

    //colocar o form
    const { register, handleSubmit , formState: {errors} } = useForm({
        resolver: yupResolver(formSchema)
    })

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
                    <h2>Atualizar Tecnologia</h2>
                    <button onClick={() => setOpenModalEditTech(false)}>X</button>
                </div>
                <form onSubmit={handleSubmit(updateTech)} noValidate>
                    <Select
                        id='status'
                        labelText='Status'
                        disabled={load}
                        explanation='Escolha uma opção de status'
                        register={register('status')}
                        error={errors.status?.message}
                        arrayOptions={
                            [
                                {
                                    value: 'Iniciante',
                                    text: 'Iniciante'
                                },
                                {
                                    value: 'Intermediário',
                                    text: 'Intermediário'
                                },
                                {
                                    value: 'Avançado',
                                    text: 'Avançado'
                                }
                            ]
                        }
                    />
                    <Button type='submit' variant='primary'>Salvar alterações</Button> 
                </form>
            </ModalStyle>
        </ModalWrapperStyle>
    )
}