import { Button } from '../../styles/buttons';
import { Input } from '../Input';
import { Select } from '../Select';
import { ModalStyle, ModalWrapperStyle } from '../../styles/modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { TechContext } from '../../providers/TechContext';
import { formSchema } from './validation';

export function ModalCreate() {
    const {
        createTech,
        load,
        setOpenModalCreateTech
    } = useContext(TechContext);

    

    const { register , handleSubmit , formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });


    

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
                    <h2>Cadastrar Tecnologia</h2>
                    <button onClick={() => setOpenModalCreateTech(false)}>X</button>
                </div>
                <form onSubmit={handleSubmit(createTech)} noValidate>
                    <Input 
                        id='name'
                        labelText='Nome do projeto'
                        placeholder='Digite o nome da tecnologia'
                        type='text'
                        disabled={load}
                        register={register('title')}
                        error={errors.title?.message}
                    />
                    <Select
                        id='status'
                        labelText='Selecionar status'
                        explanation='Escolha seu status'
                        disabled={load}
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
                                },
                            ]
                        }
                    />
                    <Button type='submit' variant='primary' disabled={load}>Cadastrar tecnologia</Button>
                </form>
            </ModalStyle>
        </ModalWrapperStyle>
    )
}