import { useRef } from 'react';
import { useState } from 'react';
import { ErrorStyle, SelectStyle } from './styles';

export function Select({ 
        error, 
        id, 
        labelText, 
        register, 
        disabled, 
        arrayOptions, 
        explanation 
    }) {
        
    const [showExplanation] = useState(true);
    const sel = useRef(null);

    return (
        <div>
            <SelectStyle selectDisabled={disabled}>
                {labelText}
                <select disabled={disabled} ref={sel} {...register} id={id}>
                    {showExplanation && (explanation && <option key={Math.random()} value='' style={{display:'none'}}>{explanation}</option>) }
                    {arrayOptions.map(({value,text}) => 
                        <option key={Math.random()} value={value}>{text}</option>
                    )}
                </select>
            </SelectStyle>
            <ErrorStyle>&nbsp;{error}&nbsp;</ErrorStyle>
        </div>
    )
}
