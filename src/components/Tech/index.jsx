import { CardStyle } from './styles';
import { FaTrash } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';

export function Tech({ title , status, id }) {
    return (
        <CardStyle>
            <h4>{title}</h4>
            <div>
                <legend>{status}</legend>
                <button><RiPencilFill/></button>
                <button><FaTrash/></button>
            </div>
        </CardStyle>
    )
};