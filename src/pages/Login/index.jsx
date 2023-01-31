import { useContext } from 'react';
import logo from '../../assets/logo.svg';
import { Input } from '../../components/Input'
import { Button, LinkBtnStyle } from '../../styles/buttons'
import { FormStyle } from '../../styles/form';
import { MainStyle } from './styles';
import { formSchema } from './validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, setAuth, verifyUser } from '../../store/modules/user/actions';
import { saveToken, saveUserId } from '../../functions';

export function Login() {
    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();
    const canLogin = useSelector(({user}) => user.isAuth);
    const navigate = useNavigate();
    console.log(`🔴Poder ${canLogin}`)
    if (canLogin) {
        navigate('/home');
    }

    
    async function sendApiData(data) {
        try {
            setLoad(true);
            toast.loading('Carregando', {toastId: 'load'});
            const response = await api.post('/sessions', data);
            saveToken(response.data.token);
            saveUserId(response.data.user.id);
            dispatch(createUser(response.data));
            toast.dismiss('load');
            if (response.status === 200) {
                toast.success('Login feito com sucesso', {toastId: 'success'});
                setTimeout(() => navigate('/home'), 2000);
            }
            dispatch(setAuth(true));
        } catch(error) {
            toast.dismiss('load');
            if (error.response.status === 401) {
                toast.error('Email ou senha incorretos', {toastId: 'error'});
            }
        } finally {
            setLoad(false);
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    return (
            <MainStyle>
                <button onClick={() => dispatch(verifyUser())}>
                    Verificar
                </button>
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
    )
}