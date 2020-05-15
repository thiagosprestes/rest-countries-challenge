import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 70px;
`;

export const CountryInfo = styled.div`
    img {
        width: 100%;
        height: 166px;
    }
`;
