import { ContInputStyle } from "./styles";

export function Input({ id , placeholder , labelText , type }) {
    return (
        <ContInputStyle htmlFor={id}>
            {labelText}
            <input id={id} placeholder={placeholder} type={type}/>
        </ContInputStyle>
    )
};