import { useContext, useEffect, useRef } from 'react';
import logo from '../../assets/logo.svg';
import { Input } from '../../components/Input'
import { Button, LinkBtnStyle } from '../../styles/buttons'
import { FormStyle } from '../../styles/form';
import { MainStyle } from './styles';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BsEyeFill , BsEyeSlashFill } from 'react-icons/bs';
import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../../providers/UserContext';

export function Login() {
    const { setCurrUser , load , setLoad , saveToken , saveUserId } = useContext(UserContext);
    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required('O email é obrigatório')
            .email('Não é um email válido'),
        password: yup
            .string()
            .required('A senha é obrigatória')
    });
    const navigate = useNavigate();

    async function sendApiData(data) {
        try {
            setLoad(true);
            toast.loading('Carregando', {toastId: 'load'});
            const response = await api.post('/sessions', data);
            saveToken(response.data.token);
            saveUserId(response.data.user.id);
            setCurrUser(response.data.user);
            toast.dismiss('load');
            if (response.status === 200) {
                toast.success('Login feito com sucesso', {toastId: 'success'});
                setTimeout(() => navigate('/home'), 4000);
            };
        } catch(error) {
            toast.dismiss('load');
            if (error.response.status === 401) {
                toast.error('Email ou senha incorretos', {toastId: 'error'});
            };
        } finally {
            setLoad(false);
        };
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    return (
            <MainStyle>
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
                <img src={logo} alt='Logo'/>
                <FormStyle onSubmit={handleSubmit(sendApiData)} noValidate>
                    <h1>Login</h1>
                    <Input 
                        error={errors.email?.message} 
                        placeholder='Digite o seu email' 
                        labelText='Email' 
                        type='email' 
                        id='email' 
                        disabled={load} 
                        register={register('email')}
                    />
                    <Input 
                        error={errors.password?.message} 
                        placeholder='Digite a sua senha'
                        labelText='Senha' 
                        type='password' 
                        id='password' 
                        disabled={load} 
                        register={register('password')}
                    />
                    <Button variant='primary' type='submit' disabled={load}>Entrar</Button>
                    <div>
                        <legend>Ainda não possuiu uma conta</legend>
                        <LinkBtnStyle to='/signup' variant='secondary'>Cadastre-se</LinkBtnStyle>
                    </div>
                </FormStyle>
            
            </MainStyle>
    );
};