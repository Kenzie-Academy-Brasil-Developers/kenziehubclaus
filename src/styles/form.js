import styled from 'styled-components';

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 42px 22px;
    background-color: var(--grey-3);
    width: 325px;
    text-align: center;

    legend, h2 {
        color: var(--grey-1);     
        font-size: 12px;
    }

    legend {
        margin-bottom: 26px;
        font-weight: var(--font-weight-3);
    }

    h2 {
        font-weight: var(--font-weight-1);
    }

    @media(max-width: 900px) {
        width: 85%;
    }
`;