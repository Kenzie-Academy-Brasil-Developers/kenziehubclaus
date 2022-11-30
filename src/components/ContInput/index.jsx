import { ContInputStyle } from './styles';

export function ContInput({ id, labelText , children }) {
    return (
        <ContInputStyle htmlFor={id} >
            {labelText}
            <div>
                {children}
            </div>
        </ContInputStyle>
    );
};