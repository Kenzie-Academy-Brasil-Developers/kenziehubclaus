import styled from 'styled-components';

export const MainStyle = styled.main`
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
`;

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    width: 369px;

    @media(max-width: 900px) {
        width: 90%;
    }
`;