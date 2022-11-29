import styled from 'styled-components';

export const MainStyle = styled.main`
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
`;

export const SelectStyle = styled.label`
    display: flex;
    flex-direction: column;
    gap: 22px;
    font-size: 12px;
    font-weight: var(--font-weight-1);
    color: var(--grey-0);
    align-items: flex-start;

    
    select {
        cursor: pointer;
        width: 100%;
        border: 1px solid transparent;
        background-color: var(--grey-2);
        padding: 10.5px 16px;
        outline: 0;
        color: var(--grey-0);
        border-radius: var(--radius-1);
        transition: 0.5s; 
        font-size: 16px;   
    }

    select:focus {
        outline: 0;
        border-color: var(--grey-0);
    }

    select:not(:focus) {
        color: var(--grey-1);
    }
`;

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    width: 369px;

    @media(max-width: 900px) {
        width: 90%;
    }
`;