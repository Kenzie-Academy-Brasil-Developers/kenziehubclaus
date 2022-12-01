import { useEffect, useRef } from 'react';
import logo from '../../assets/logo.svg';
import { ContInput } from '../../components/ContInput'
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

export function Login({ setCurrUser }) {
    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required('O email é obrigatório')
            .email('Não é um email válido'),
        password: yup
            .string()
            .required('A senha é obrigatória')
    });
    const defaultColorBtn = { color: 'var(--grey-1)' };
    const [showPasswd, setShowPasswd] = useState(false);
    const [currentBtn, setCurrentBtn] = useState(<BsEyeFill style={defaultColorBtn}/>);
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    function changeVisibilityPasswd() {
        setShowPasswd(!showPasswd);
        showPasswd ? setCurrentBtn(<BsEyeFill style={defaultColorBtn}/>) : setCurrentBtn(<BsEyeSlashFill style={defaultColorBtn}/>);
    };    

    async function sendApiData(data) {
        try {
            setLoad(true);
            toast.loading('Carregando', {toastId: 'load'});
            const response = await api.post('/sessions', data);
            localStorage.setItem('@Token', response.data.token);
            localStorage.setItem('@UserId', response.data.user.id);
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
                    <div>
                        <ContInput labelText='Email' id='email'>
                            <input disabled={load} placeholder='Digite o seu email' id='email' {...register('email')} type='email'/>
                        </ContInput>
                        <small>&nbsp;{errors.email?.message}&nbsp;</small>
                    </div>
                    <div>
                        <ContInput labelText='Senha'>
                            <input disabled={load} placeholder='Digite a sua senha' id='password' {...register('password')} type=
                            {
                                showPasswd?
                                'text' :
                                'password'
                            }/>
                            <span onClick={changeVisibilityPasswd}>{currentBtn}</span>
                        </ContInput>
                        <small>&nbsp;{errors.password?.message}&nbsp;</small>
                    </div>
                    <Button variant='primary' type='submit' disabled={load}>Entrar</Button>
                    <div>
                        <legend>Ainda não possuiu uma conta</legend>
                        <LinkBtnStyle to='/signup' variant='secondary'>Cadastre-se</LinkBtnStyle>
                    </div>
                </FormStyle>
            
            </MainStyle>
    );
};