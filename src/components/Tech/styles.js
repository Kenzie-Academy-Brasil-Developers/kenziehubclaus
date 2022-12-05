import styled from 'styled-components';

export const CardStyle = styled.li`
    border-radius: var(--radius-1);
    padding: 13px 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-4);
    transition: 0.5s;

    button {
        cursor: pointer;
        background-color: transparent;
        border: 0;
        outline: 0;
        color: rgba(255, 255, 255, 0.8);
        margin: 0;
    }

    h4 {
        color: var(--white-0);
        font-weight: var(--font-weight-4);
        line-height: 22px;
        font-size: 14px;
    }

    legend {
        color: var(--grey-1);
        font-weight: var(--font-weight-1);
        line-height: 22px;
        line-height: 12px;
    }

    div {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    :hover {
        background-color: var(--grey-2);
        legend {
            color: var(--grey-0);
        }
    }
`;