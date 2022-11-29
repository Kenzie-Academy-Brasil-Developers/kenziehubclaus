import logo from '../../assets/logo.svg';
import { FormStyle } from '../../styles/form';
import { MainStyle, SelectStyle, HeaderStyle } from './styles';
import { Input } from '../../components/Input';
import { Button, LinkBtnStyle } from '../../styles/buttons'

export function SignUp() {
    function handleSubmit(event) {
        event.preventDefault();
    };

    return (
        <MainStyle>
            <HeaderStyle>
                <img src={logo} alt='Kenzie Hub'/>
                <LinkBtnStyle to='/login' variant='tertiary'>Voltar</LinkBtnStyle>
            </HeaderStyle>
            <FormStyle onSubmit={handleSubmit}>
                <h1>Crie sua conta</h1>
                <h2>Rápido e grátis, vamos nessa</h2>
                <Input labelText='Nome' placeholder='Digite aqui seu nome' id='name' type='text'/>
                <Input labelText='Email' placeholder='Digite aqui seu email' id='email' type='email'/>
                <Input labelText='Senha' placeholder='Digite aqui sua senha' id='password' type='password'/>
                <Input labelText='Confirmar senha' placeholder='Digite novamente a senha' id='passwordConfirm' type='password'/>
                <Input labelText='Bio' placeholder='Fale sobre você' id='bio' type='text'/>
                <Input labelText='Contanto' placeholder='Opção de contato' id='contact' type='tel'/>
                <SelectStyle>
                    Selecionar módulo
                    <select>
                        <option value='' style={{display:'none'}}>Escolher módulo</option>
                        <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro módulo</option>
                        <option value='Segundo módulo (Frontend Avançado)'>Segundo módulo</option>
                        <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro módulo</option>
                        <option value='Quarto módulo (Backend Avançado)'>Quarto módulo</option>
                    </select>
                </SelectStyle>
                <Button variant='primary' disabled={true}>Cadastrar</Button>
            </FormStyle>
        </MainStyle>
    )
};