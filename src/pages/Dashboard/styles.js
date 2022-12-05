import styled from 'styled-components';

export const ContainerStyle = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 12px;
    margin-top: 23px;

`;

export const DashboardStyle = styled.div`
    h1 {
        font-weight: var(--font-weight-4);
        color: var(--grey-0);
        font-size: 18px;
    }     

    h3 {
        font-weight: var(--font-weight-3);
        color: var(--grey-1);
        font-size: 12px;
    }

    h2 {
        font-weight: var(--font-weight-1);
        color: var(--white-0);
        font-size: 16px;
    }

    header, section {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 900px) {
        section {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
        }
    }
    
    header {
        padding: 20px 0;
    }

    main {
        border-top: 1px solid var(--grey-3);
        border-bottom: 1px solid var(--grey-3);
        margin-bottom: 37px;
    }

    section {
        padding: 44px 0;
    }
`;

export const TechsStyle = styled.div`
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 28px;
        
        button {
            border: none;
            border-radius: var(--radius-1);
            display: flex;
            align-items: center;
            font-size: 10px;
            color: var(--white-0);
            cursor: pointer;
            background-color: var(--grey-3);
            transition: 0.5s;
            padding: 11px;
        }

        button:hover {
            background-color: var(--grey-2);
        }
    }

    h2 {
        font-size: 16px;
        font-weight: var(--font-weight-3);
        color: var(--grey-0);
    }


    ul {
        background-color: var(--grey-3);
        padding: 23px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        border-radius: var(--radius-1);
    }
`;