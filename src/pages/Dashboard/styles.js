import styled from 'styled-components';

export const ContainerStyle = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 12px;
    > h1 {
        margin-bottom: 23px;
    }
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