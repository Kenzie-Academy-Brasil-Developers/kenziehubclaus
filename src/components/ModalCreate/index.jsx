import { useState } from 'react';
import { Button } from '../../styles/buttons';
import { Input } from '../Input';
import { Select } from '../Select';
import { ModalStyle, ModalWrapperStyle } from '../../styles/modal';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';

export function ModalCreate({ isModalOpen }) {
    const [load, setLoad] = useState(false);

    const formSchema = yup.object().shape({
        title: yup.string().required('O título é obrigatório'),
        status: yup.string().required('O status é obrigatório')
    });

    const { register , handleSubmit , formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

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
            if (response.status === 201) {
                toast.dismiss('load');
                toast.success('Tecnologia adicionada com sucesso');
            }
        } catch(error) {
            console.log(error)
            toast.error('Ops! ocorreu um erro, tente novamente');
        } finally {
            toast.dismiss('load');
            setLoad(false);
        }
    }

    

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
                    <button onClick={() => isModalOpen(false)}>X</button>
                </div>
                <form onSubmit={handleSubmit(createTech)} noValidate>
                    <Input 
                        id='name'
                        labelText='Nome'
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
                    <Button type='submit' variant='primary'>Cadastrar tecnologia</Button>
                </form>
            </ModalStyle>
        </ModalWrapperStyle>
    )
}