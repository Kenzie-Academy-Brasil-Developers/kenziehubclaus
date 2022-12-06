import { useNavigate } from 'react-router-dom';
import imgNotFound from '../../assets/404.png';
import { LinkBtnStyle } from '../../styles/buttons';
import { MainStyle } from './styles';

export function NotFound() {
    const navigate = useNavigate();
    return (
        <MainStyle>
            <h1>Oops! 404</h1>
            <legend>Não pudemos encontrar o que você procura</legend>
            <img src={imgNotFound} alt='Não encontramos sua página'/>
            <LinkBtnStyle onClick={() => navigate(-1)} variant='secondary'>Voltar</LinkBtnStyle>
        </MainStyle>
    )
}