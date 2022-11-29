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

export function Login() {
    const formSchema = yup.object().shape({
        email: yup.string().required('Email obrigatório').email('Não é um email válido'),
        password: yup.string().required('A senha é obrigatória')
    })
    const defaultColorBtn = { color: 'var(--grey-1)' };
    const [showPasswd, setShowPasswd] = useState(false);
    const [currentBtn, setCurrentBtn] = useState(<BsEyeFill style={defaultColorBtn}/>);

    function changeVisibilityPasswd() {
        setShowPasswd(!showPasswd);
        showPasswd ? setCurrentBtn(<BsEyeFill style={defaultColorBtn}/>) : setCurrentBtn(<BsEyeSlashFill style={defaultColorBtn}/>);
    };

    // useEffect(() => {
    //     async function
    // }, []);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    function onSub(data) {
        console.log(data);
    };

    

    return (
            <MainStyle>
                <img src={logo} alt='Logo'/>
                <FormStyle onSubmit={handleSubmit(onSub)}>
                    <h1>Login</h1>
                    <ContInput labelText='Email' id='email'>
                        <input placeholder='Digite o seu email' id='email' {...register('email')} type='email'/>
                    </ContInput>
                    {errors.email?.message}
                    <ContInput labelText='Senha'>
                        <input placeholder='Digite a sua senha' id='password' {...register('password')} type=
                        {
                            showPasswd?
                            'text' :
                            'password'
                        }/>
                        <span onClick={changeVisibilityPasswd}>{currentBtn}</span>
                    </ContInput>
                    {errors.password?.message}
                    <Button variant='primary'>Entrar</Button>
                    <div>
                        <legend>Ainda não possuiu uma conta</legend>
                        <LinkBtnStyle to='/signup' variant='secondary'>Cadastre-se</LinkBtnStyle>
                    </div>
                </FormStyle>
            
            </MainStyle>
    );
};