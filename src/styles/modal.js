import styled from 'styled-components';

export const ModalWrapperStyle = styled.div`
    background-color: var(--color-modal);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const ModalStyle = styled.div`
    width: 325px;
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--grey-2);
        padding: 14px 20px;

        h2 {
            font-size: 14px;
            font-weight: var(--font-weight-4);
        }

        > button {
            cursor: pointer;
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 16px;
            color: var(--grey-1);
        }

        @media (max-width: 900px) {
            h2 {
                font-size: 11px;
            }
            button {
                font-size: 12px;
            }
        }
    }

    > form {
        background-color: var(--grey-3);
        padding: 22px 22px 32px 22px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    @media (max-width: 900px) {
        width: 92%;
    }
`;

