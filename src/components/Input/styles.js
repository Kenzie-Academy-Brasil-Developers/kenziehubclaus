import styled from 'styled-components';

export const ContInputStyle = styled.label`
    display: flex;
    flex-direction: column;
    gap: 22px;
    font-size: 12px;
    font-weight: var(--font-weight-1);
    color: var(--grey-0);
    align-items: flex-start;
    margin-bottom: 26px;

    input, input::placeholder {
        font-size: 16px;
        font-weight: var(--font-weight-1);
    }

    input {
        color: var(--grey-0);
        border: 1px solid transparent;
        background-color: var(--grey-2);
        outline: none;
        padding: 10.5px 16px;
        border-radius: var(--radius-1);
        transition: 0.5s;
    }

    input::placeholder {
        color: var(--grey-1);
    }

    input:focus {
        border-color: var(--grey-0);
    }
`;