import logo from '../../assets/logo.svg';
import { FormStyle } from '../../styles/form';
import { MainStyle, HeaderStyle } from './styles';
import { Input } from '../../components/Input';
import { Button, LinkBtnStyle } from '../../styles/buttons'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Select } from '../../components/Select';
import { formSchema } from './validation';


export function SignUp() {
    const [inputsValues, setInputValues] = useState({});
    const [disableForm, setDisableForm] = useState(true);
    const [load, setLoad] = useState(false);
    const navigate = useNavigate();
    
    async function createUser(data) {
        try { 
            setLoad(true);
            toast.loading('Carregando', {toastId: 'load'});
            const response =  await api.post('/users', data);
            toast.dismiss('load');
            if (response.status === 201) {
                toast.success('Usuário criado com sucesso', {toastId: 'success'});
                setTimeout(() => navigate('/login'), 4000);
            }
        } catch(error) {
            toast.dismiss('load');
            if (error.response.data.message === 'Email already exists') {
                toast.error('Esse email já existe, tente outro', {toastId: 'error'});
            } else {
                toast.error('Ops! Algo deu errado', {toastId: 'error'});
            }
        } finally {
            setLoad(false);
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    function setInputEmpty(value, type) {
        const currInput = {...inputsValues};
        currInput[type] = value;
        const inputList = Object.keys(currInput);
        const dataInputs = inputList.filter((key) => currInput[key] === '');
        if (inputList.length === 6 && dataInputs.length === 0) {
            setDisableForm(false);
        } else {
            setDisableForm(true);
        }
        setInputValues(currInput);
    }

    return (
        <MainStyle>
            <HeaderStyle>
                <img src={logo} alt='Kenzie Hub'/>
                <LinkBtnStyle to='/login' variant='tertiary'>Voltar</LinkBtnStyle>
            </HeaderStyle>
            <FormStyle onSubmit={handleSubmit(createUser)} noValidate>
                <h1>Crie sua conta</h1>
                <h2>Rápido e grátis, vamos nessa</h2>

                <Input 
                    error={errors.name?.message} 
                    labelText='Nome' 
                    type='text' 
                    id='name' 
                    placeholder='Digite aqui seu nome' 
                    disabled={load} 
                    onChange={(e) => setInputEmpty(e.target.value, 'name')} 
                    register={register('name')}
                />

                <Input 
                    error={errors.email?.message} 
                    labelText='Email' 
                    type='email' 
                    id='email' 
                    placeholder='Digite aqui seu email' 
                    disabled={load} 
                    onChange={(e) => setInputEmpty(e.target.value, 'email')} 
                    register={register('email')}
                />

                <Input 
                    error={errors.password?.message} 
                    labelText='Senha' 
                    type='password' 
                    id='password' 
                    placeholder='Digite a sua senha' 
                    disabled={load} 
                    onChange={(e) => setInputEmpty(e.target.value, 'password')} 
                    register={register('password')}
                />

                <Input 
                    error={errors.passwordConfirm?.message} 
                    labelText='Confirmar senha' 
                    type='password' 
                    id='passwordConfirm' 
                    placeholder='Digite novamente a senha' 
                    disabled={load} 
                    onChange={(e) => setInputEmpty(e.target.value, 'passwordConfirm')} 
                    register={register('passwordConfirm')}
                />

                <Input 
                    error={errors.bio?.message} 
                    labelText='Bio' 
                    type='text' 
                    id='bio' 
                    placeholder='Fale sobre você' 
                    disabled={load} 
                    onChange={(e) => setInputEmpty(e.target.value, 'bio')} 
                    register={register('bio')}
                />

                <Input
                    error={errors.contact?.message}
                    labelText='Contato'
                    type='tel'
                    id='contact'
                    placeholder='Opção de contato'
                    disabled={load} 
                    onChange={(e) => setInputEmpty(e.target.value, 'contact')}
                    register={register('contact')}
                />
                
                <Select
                    error={errors.course_module?.message}
                    labelText='Selecionar módulo'
                    explanation='Escolher módulo'
                    id='selectModule'
                    disabled={load} 
                    onChange={(e) => setInputEmpty(e.target.value, 'select')}
                    register={register('course_module')}
                    arrayOptions={
                        [
                            {
                                value: 'Primeiro módulo (Introdução ao Frontend)',
                                text: 'Primeiro módulo'
                            },
                            {
                                value: 'Segundo módulo (Frontend Avançado)',
                                text: 'Segundo módulo'
                            },
                            {
                                value: 'Terceiro módulo (Introdução ao Backend)',
                                text: 'Terceiro módulo'
                            },
                            {
                                value: 'Quarto módulo (Backend Avançado)',
                                text: 'Quarto módulo'
                            }
                        ]
                    }
                />

                <Button variant='primary' type='submit' disabled={disableForm || load}>Cadastrar</Button>
            </FormStyle>
        </MainStyle>
    )
}