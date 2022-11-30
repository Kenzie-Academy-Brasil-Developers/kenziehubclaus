import logo from '../../assets/logo.svg';
import { FormStyle } from '../../styles/form';
import { MainStyle, SelectStyle, HeaderStyle } from './styles';
import { ContInput } from '../../components/ContInput';
import { Button, LinkBtnStyle } from '../../styles/buttons'
import { BsEyeFill , BsEyeSlashFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';

export function SignUp() {
    const defaultColorBtn = { color: 'var(--grey-1)' };
    const btnEye = <BsEyeFill style={defaultColorBtn}/>
    const [showPasswd1, setShowPasswd1] = useState(false);
    const [currentBtn1, setCurrentBtn1] = useState(btnEye);
    const [showPasswd2, setShowPasswd2] = useState(false);
    const [currentBtn2, setCurrentBtn2] = useState(btnEye);
    const [currUserData, setCurrUserData] = useState(null); 
    const [inputsValues, setInputValues] = useState({});
    const [disableForm, setDisableForm] = useState(true);
    const formSchema = yup.object().shape({
        name: yup.string().required('O nome é obrigatório'),
        email: yup.string().required('Você precisa digitar o email').email('Digite um email válido'),
        password: yup.string().required('Você precisa digitar a senha').min(8, 'Sua senha precisa de no mínimo 8 caracteres').matches(/[0-9]*[a-z]*[A-Z]*[!"#$%&'()*+,-./:;?@[\\\]_`{|}~]/g, "A senha não atende a todos os requisitos"),
        passwordConfirm: yup.string().required('Você precisa confirmar a senha').oneOf([yup.ref('password')], 'As senhas precisam ser iguais'),
        bio: yup.string().required('Você precisa digitar uma bio'),
        contact: yup.string().required('Você precisa digitar um telefone de contato'),
        course_module: yup.string().required('Você precisa escolher um módulo de curso')
    });

    useEffect(() => {
        if (!currUserData) {return};
        async function createUser() {
            try {
                const response = await api.post('/users', currUserData);
                console.log(response)
            } catch(error) {
                console.log(error.response.data.message)
                console.log('deu ruim')
            } finally {
                console.log('acabou')
            }
        }
        createUser();
    }, [currUserData]);

    function changeVisibilityPasswd1() {
        setShowPasswd1(!showPasswd1);
        showPasswd1 ? setCurrentBtn1(<BsEyeFill style={defaultColorBtn}/>) : setCurrentBtn1(<BsEyeSlashFill style={defaultColorBtn}/>);
    };

    function changeVisibilityPasswd2() {
        setShowPasswd2(!showPasswd2);
        showPasswd2 ? setCurrentBtn2(<BsEyeFill style={defaultColorBtn}/>) : setCurrentBtn2(<BsEyeSlashFill style={defaultColorBtn}/>);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    function onSub(data) {
        setCurrUserData(data);
        console.log(data);
    };

    function setInputEmpty(value, type) {
        const currInput = {...inputsValues};
        currInput[type] = value;
        const inputList = Object.keys(currInput)
        const dataInputs = inputList.filter((key) => currInput[key] === '');
        if (inputList.length === 7 && dataInputs.length === 0) {
            setDisableForm(false);
        } else {
            setDisableForm(true);
        };
        setInputValues(currInput);
    };

    return (
        <MainStyle>
            <HeaderStyle>
                <img src={logo} alt='Kenzie Hub'/>
                <LinkBtnStyle to='/login' variant='tertiary'>Voltar</LinkBtnStyle>
            </HeaderStyle>
            <FormStyle onSubmit={handleSubmit(onSub)}>
                <h1>Crie sua conta</h1>
                <h2>Rápido e grátis, vamos nessa</h2>
                <ContInput labelText='Nome' id='name'>
                    <input placeholder='Digite aqui seu nome' id='name' type='text' {...register('name')} onChange={(e) => setInputEmpty(e.target.value, 'name')} />
                </ContInput>
                {errors.name?.message}
                <ContInput labelText='Email' id='email'>
                    <input placeholder='Digite aqui seu email' id='email' type='email' {...register('email')} onChange={(e) => setInputEmpty(e.target.value, 'email')}/>
                </ContInput> 
                {errors.email?.message}
                <ContInput labelText='Senha' id='password'>
                        <input placeholder='Digite a sua senha' id='password' {...register('password')} onChange={(e) => setInputEmpty(e.target.value, 'password')} type=
                        {
                            showPasswd1?
                            'text' :
                            'password'
                        }/>
                        <span onClick={changeVisibilityPasswd1}>{currentBtn1}</span>
                </ContInput> 
                {errors.password?.message}
                <ContInput labelText='Confirmar senha'  id='passwordConfirm'>
                        <input placeholder='Digite novamente a senha' id='passwordConfirm' {...register('passwordConfirm')} onChange={(e) => setInputEmpty(e.target.value, 'passwordConfirm')} type=
                        {
                            showPasswd2?
                            'text' :
                            'password'
                        }/>
                        <span onClick={changeVisibilityPasswd2}>{currentBtn2}</span>
                </ContInput> 
                {errors.passwordConfirm?.message}
                <ContInput labelText='Bio' id='bio'>
                    <input placeholder='Fale sobre você' id='bio' type='text' {...register('bio')} onChange={(e) => setInputEmpty(e.target.value, 'bio')}/>
                </ContInput>
                {errors.bio?.message}
                <ContInput labelText='Contato' id='contact'>
                    <input placeholder='Opção de contato' id='contact' type='tel' {...register('contact')} onChange={(e) => setInputEmpty(e.target.value, 'contact')}/>
                </ContInput>
                {errors.contact?.message}
                <SelectStyle>
                    Selecionar módulo
                    <select {...register('course_module')} onChange={(e) => setInputEmpty(e.target.value, 'select')}>
                        <option value='' style={{display:'none'}}>Escolher módulo</option>
                        <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro módulo</option>
                        <option value='Segundo módulo (Frontend Avançado)'>Segundo módulo</option>
                        <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro módulo</option>
                        <option value='Quarto módulo (Backend Avançado)'>Quarto módulo</option>
                    </select>
                </SelectStyle>
                {errors.course_module?.message}
                <Button variant='primary' type='submit' disabled={disableForm}>Cadastrar</Button>
            </FormStyle>
        </MainStyle>
    )
};