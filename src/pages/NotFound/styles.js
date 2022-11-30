import styled from 'styled-components';

export const MainStyle = styled.main`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 30px;
    align-items: center;
    margin-bottom: 50px;
    h1 {
        font-size: 40px;
    }

    legend {
        color: var(--grey-1);
    }

    img {
        max-width: 300px;
    }
`;