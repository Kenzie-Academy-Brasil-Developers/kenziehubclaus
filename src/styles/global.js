import styled, { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import { typography } from './typography';

export const GlobalStyles = createGlobalStyle`
    ${() => reset};
    :root {
        --color-primary: #FF577F;
        --color-primary-Focus: #FF427F;
        --color-primary-Negative: #59323F;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        --white-0: #FFFFFF;
        --color-modal: rgba(0,0,0,0.5);
        
        --color-success: #3FE864;
        --color-negative: #E83F5B;

        --font-family-default: 'Inter', sans-serif;

        --font-weight-1: 400;
        --font-weight-2: 500;
        --font-weight-3: 600;
        --font-weight-4: 700;
        --font-weight-5: 800;

        --radius-1: 4px;
    }

    ${() => typography};

    body::-webkit-scrollbar {
        width: 10px;
    } 

    body::-webkit-scrollbar-thumb:hover { 
        background-color: var(--color-primary-Focus);   
    }

    body::-webkit-scrollbar-thumb:not(:hover) {   
        background-color: var(--color-primary);   
    }

    body::-webkit-scrollbar-thumb:window-inactive {
        background-color: var(--grey-1);
    }

    body {
        background-color: var(--grey-4);
    }
    
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;