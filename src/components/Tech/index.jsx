import { CardStyle } from './styles';
import { FaTrash } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';
import { TechContext } from '../../providers/TechContext';
import { useContext } from 'react';

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
        <CardStyle>
            <h4>{title}</h4>
            <div>
                <legend>{status}</legend>
                <button onClick={() => updateThisTech(allTechInfo)}><RiPencilFill/></button>
                <button onClick={() => deleteThisTech(allTechInfo)}><FaTrash/></button>
            </div>
        </CardStyle>
    )
}