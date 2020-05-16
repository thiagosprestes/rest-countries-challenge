import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 80px;
`;

export const GoBack = styled.header`
    margin: 50px 0;

    a {
        display: flex;
        align-items: center;
        padding: 8px 20px;
        background: ${(props) => props.theme.colors.elements};
        color: ${(props) => props.theme.colors.text};
        box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);
        width: 10%;

        svg {
            margin-right: 10px;
        }
    }
`;

export const CountryContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 70px;
    color: ${(props) => props.theme.colors.text};

    .flag {
        width: 500px;
        height: 300px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`;

export const CountryInfo = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 20px;
    }

    span {
        font-weight: bold;
    }

    ul {
        columns: 2;

        li + li {
            margin-top: 20px;
        }
    }
`;

export const BorderCountries = styled.div`
    margin-top: 50px;

    a {
        padding: 5px;
        font-size: 12px;
        font-weight: bold;
        margin-right: 5px;
        background: ${(props) => props.theme.colors.elements};
        color: ${(props) => props.theme.colors.text};
        box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);
    }
`;
