import { SelectStyle } from "./styles";

export function Select({ error, id, labelText , register , onChange , disabled , arrayOptions , explanation }) {
    return (
        <div>
            <SelectStyle>
                {labelText}
                <select disabled={disabled} {...register} onChange={() => onChange()} id={id}>
                    <option key={Math.random()} value='' style={{display:'none'}}>{explanation}</option>
                    {arrayOptions.map(({value,text}) => 
                        <option key={Math.random()} value={value}>{text}</option>
                    )}
                </select>
            </SelectStyle>
            <small>&nbsp;{error}&nbsp;</small>
        </div>
    );
};