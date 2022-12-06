import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonVariant = {
    primary: css`
        background-color: var(--color-primary);
    
    :hover {
        background-color: var(--color-primary-Focus);
    }

    :disabled {
        background-color: var(--color-primary-Negative);
    }

    `,
    secondary: css`
        background-color: var(--grey-1);

    :hover {
        background-color: var(--grey-2);
    }

    `,
    tertiary: css`
        background-color: var(--grey-3);

    :hover {
        background-color: var(--grey-2);
    }
    `
};

export const Button = styled.button`
    display: block;
    cursor: pointer;
    font-family: var(--font-family-default);
    font-size: 16px;
    font-weight: var(--font-weight-2);
    color: var(--white-0);
    padding: 10.5px 22.33px;
    transition: 0.7s;
    border: none;
    line-height: 26px;
    border-radius: var(--radius-1);
    
    :disabled {
        cursor: context-menu;
    }

    ${({variant}) => ButtonVariant[variant]};
`;

export const LinkBtnStyle = styled(Link)`
    text-align: center;
    display: block;
    text-decoration: none;
    cursor: pointer;
    font-family: var(--font-family-default);
    font-size: 16px;
    font-weight: var(--font-weight-2);
    color: var(--white-0);
    padding: 10.5px 22.33px;
    transition: 0.7s;
    border: none;
    line-height: 26px;
    border-radius: var(--radius-1);
    ${({variant}) => ButtonVariant[variant]};
`;
