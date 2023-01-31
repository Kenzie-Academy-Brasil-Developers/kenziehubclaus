import { Button } from '../../styles/buttons';
import { Input } from '../Input';
import { Select } from '../Select';
import { ModalStyle, ModalWrapperStyle } from '../../styles/modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer } from 'react-toastify';
import { formSchema } from './validation';

export function ModalCreate({
        createTech,
        load,
        setOpenModalCreateTech,
        setIsSomeModalOpen
    }) {


    const { register , handleSubmit , formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    function closeModal() {
        setOpenModalCreateTech(false);
        setIsSomeModalOpen(false);
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
                    <button onClick={() => closeModal()}>X</button>
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
                                }
                            ]
                        }
                    />
                    <Button type='submit' variant='primary' disabled={load}>Cadastrar tecnologia</Button>
                </form>
            </ModalStyle>
        </ModalWrapperStyle>
    )
}