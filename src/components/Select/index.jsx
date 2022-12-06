import { ErrorStyle, SelectStyle } from "./styles";

export function Select({ error, id, labelText , register , onChange , disabled , arrayOptions , explanation }) {
    return (
        <div>
            <SelectStyle>
                {labelText}
                <select disabled={disabled} {...register} id={id}>
                    { explanation && <option key={Math.random()} value='' style={{display:'none'}}>{explanation}</option> }
                    {arrayOptions.map(({value,text}) => 
                        <option key={Math.random()} value={value}>{text}</option>
                    )}
                </select>
            </SelectStyle>
            <ErrorStyle>&nbsp;{error}&nbsp;</ErrorStyle>
        </div>
    );
};
