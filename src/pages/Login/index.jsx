import logo from '../../assets/logo.svg';
import { Input } from '../../components/Input'
import { Button, LinkBtnStyle } from '../../styles/buttons'
import { FormStyle } from '../../styles/form';
import { MainStyle } from './styles';

export function Login() {
    function handleSubmit(event) {
        event.preventDefault();
    };

    return (
        <MainStyle>
            <img src={logo} alt='Logo'/>
            <FormStyle onSubmit={handleSubmit}>
                <h1>Login</h1>
                <Input labelText='Email' placeholder='Digite o seu email' id='email' type='email'/>
                <Input labelText='Senha' placeholder='Digite a sua senha' id='password' type='password'/>
                <Button variant='primary'>Entrar</Button>
                <div>
                    <legend>Ainda não possuiu uma conta</legend>
                    <LinkBtnStyle to='/signup' variant='secondary'>Cadastre-se</LinkBtnStyle>
                </div>
            </FormStyle>
            
        </MainStyle>
    );
};