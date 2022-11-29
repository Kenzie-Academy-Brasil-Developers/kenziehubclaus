import { useState } from 'react';
import { ContInputStyle } from './styles';
import { BsEyeFill , BsEyeSlashFill } from 'react-icons/bs';

export function Input({ id , placeholder , labelText , type }) {
    const defaultColorBtn = { color: 'var(--grey-1)' };
    const [showPasswd, setShowPasswd] = useState(false);
    const [currentBtn, setCurrentBtn] = useState(<BsEyeFill style={defaultColorBtn}/>)

    function changeVisibilityPasswd() {
        setShowPasswd(!showPasswd);
        showPasswd ? setCurrentBtn(<BsEyeFill style={defaultColorBtn}/>) : setCurrentBtn(<BsEyeSlashFill style={defaultColorBtn}/>);
    };

    return (
        <ContInputStyle htmlFor={id}>
            {labelText}
            <div>
                <input id={id} placeholder={placeholder} type=
                {
                    showPasswd?
                    'text' :
                    type
                }/>
                
                { 
                type === 'password' ?
                <button onClick={changeVisibilityPasswd}>{currentBtn}</button>  :
                null
                }

                    
            </div>
        </ContInputStyle>
    )
};