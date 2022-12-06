import { css } from 'styled-components';

export const Animations = css`
    @keyframes roll {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;