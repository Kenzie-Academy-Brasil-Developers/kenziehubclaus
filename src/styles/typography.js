import { css } from 'styled-components';

export const typography = css`
    h1,h2,h3,h4,h5,h6,span,label,small,legend {
        font-family: var(--font-family-default);
    }

    h1 {
        color: var(--grey-0);
        font-size: 18px;
        font-weight: var(--font-weight-4);
    }
`;