import logo from '../../assets/logo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../styles/buttons'

export function Login() {
    return (
        <div>
            <img src={logo} alt='Logo'/>
            <h1>Kenzie Hub</h1>
            <Button variant='primary' disabled={false}>Teste</Button>
            <Button variant='primary' disabled={true}>Teste</Button>
            <Button variant='secondary' disabled={false}>Teste</Button>
            <Button variant='secondary' disabled={true}>Teste</Button>
            <Button variant='tertiary' disabled={true}>Teste</Button>
            <Input placeholder={'teste'} id='0' labelText='Senha'/>
        </div>
    )
};