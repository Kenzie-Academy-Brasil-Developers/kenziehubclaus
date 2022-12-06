import { ContInputStyle } from './styles';
import { useState } from 'react';
import { BsEyeFill , BsEyeSlashFill } from 'react-icons/bs';

export function Input({ error, id, labelText , placeholder , type , register , disabled}) {
    const defaultColorBtn = { color: 'gray' };
    const [showPasswd, setShowPasswd] = useState(false);
    const [currType, setCurrType] = useState(type);
    const [currentBtn, setCurrentBtn] = useState(<BsEyeFill style={defaultColorBtn}/>);

    function changeVisibilityPasswd() {
        setShowPasswd(!showPasswd);
        if (showPasswd) {
            setCurrType('text');
            setCurrentBtn(<BsEyeSlashFill style={defaultColorBtn}/>);
        } else {
            setCurrType('password');
            setCurrentBtn(<BsEyeFill style={defaultColorBtn}/>);
        }
    }  

    return (
        <>
        <ContInputStyle htmlFor={id} >
            {labelText}
            <div>
            <input placeholder={placeholder} id={id} disabled={disabled} type={
                type === 'password' ?
                currType :
                type
            } {...register}/>
            {
            type === 'password' ? 
            <span onClick={changeVisibilityPasswd}>{currentBtn}</span> :
            <></>
            }
            </div>
        </ContInputStyle>
        <small>&nbsp;{error}&nbsp;</small>
        </>
    )
}