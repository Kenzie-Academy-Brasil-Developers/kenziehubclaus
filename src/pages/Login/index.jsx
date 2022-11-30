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

export function Login() {
    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required('O email é obrigatório')
            .email('Não é um email válido'),
        password: yup
            .string()
            .required('A senha é obrigatória')
    })
    const defaultColorBtn = { color: 'var(--grey-1)' };
    const [showPasswd, setShowPasswd] = useState(false);
    const [currentBtn, setCurrentBtn] = useState(<BsEyeFill style={defaultColorBtn}/>);
    const [currUser, setCurrUser] = useState(null);

    function changeVisibilityPasswd() {
        setShowPasswd(!showPasswd);
        showPasswd ? setCurrentBtn(<BsEyeFill style={defaultColorBtn}/>) : setCurrentBtn(<BsEyeSlashFill style={defaultColorBtn}/>);
    };

    useEffect(() => {
        if (!currUser) {return};
        console.log('passei')
        async function sendApiData() {
            try {
                const response = await api.post('/sessions', currUser)
                console.log(response)
            } catch(error) {
                if (error.response.status === 401) {
                    console.log('Email ou senha incorretos')
                }
            } finally {
                console.log('terminou')
            }
        }
        sendApiData()
    }, [currUser]);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    function onSub(data) {
        setCurrUser(data);
        console.log(data);
        
    };

    

    return (
            <MainStyle>
                <img src={logo} alt='Logo'/>
                <FormStyle onSubmit={handleSubmit(onSub)} noValidate>
                    <h1>Login</h1>
                    <div>
                        <ContInput labelText='Email' id='email'>
                            <input placeholder='Digite o seu email' id='email' {...register('email')} type='email'/>
                        </ContInput>
                        <small>&nbsp;{errors.email?.message}&nbsp;</small>
                    </div>
                    <div>
                        <ContInput labelText='Senha'>
                            <input placeholder='Digite a sua senha' id='password' {...register('password')} type=
                            {
                                showPasswd?
                                'text' :
                                'password'
                            }/>
                            <span onClick={changeVisibilityPasswd}>{currentBtn}</span>
                        </ContInput>
                        <small>&nbsp;{errors.password?.message}&nbsp;</small>
                    </div>
                    <Button variant='primary' type='submit'>Entrar</Button>
                    <div>
                        <legend>Ainda não possuiu uma conta</legend>
                        <LinkBtnStyle to='/signup' variant='secondary'>Cadastre-se</LinkBtnStyle>
                    </div>
                </FormStyle>
            
            </MainStyle>
    );
};