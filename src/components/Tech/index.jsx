import { CardStyle } from './styles';
import { FaTrash } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';

export function Tech({ 
        title, 
        status, 
        id,
        allTechInfo, 
        setCurrTech,
        setOpenModalDeleteTech,
        setOpenModalEditTech,
        setIsSomeModalOpen  
    }) {

    function deleteThisTech(thisTech) {
        setCurrTech(thisTech);
        setOpenModalDeleteTech(true);
        setIsSomeModalOpen(true);
    }

    function updateThisTech(thisTech) {
        setCurrTech(thisTech);
        setOpenModalEditTech(true);
        setIsSomeModalOpen(true);
    }

    return (
        <CardStyle id={id}>
            <h4>{title}</h4>
            <div>
                <legend>{status}</legend>
                <button onClick={() => updateThisTech(allTechInfo)}><RiPencilFill/></button>
                <button onClick={() => deleteThisTech(allTechInfo)}><FaTrash/></button>
            </div>
        </CardStyle>
    )
}