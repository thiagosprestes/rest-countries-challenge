import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 80px;

    @media (max-width: 750px) {
        margin: 0 50px;
    }
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

        @media (max-width: 750px) {
            width: 120px;
        }

        @media (min-width: 650px) {
            width: 110px;
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

        @media (max-width: 800px) {
            width: 100%;
            height: 180px;
            margin-bottom: 20px;
        }

        @media (min-width: 650px) {
            height: 300px;
        }
    }

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const CountryInfo = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        width: 100%;
    }

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
    display: flex;

    div {
        margin-left: 10px;

        a {
            padding: 5px;
            font-size: 12px;
            font-weight: bold;
            margin-right: 5px;
            background: ${(props) => props.theme.colors.elements};
            color: ${(props) => props.theme.colors.text};
            box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);

            @media (max-width: 750px) {
                margin-right: 0;
            }
        }

        @media (max-width: 750px) {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 8px;
            margin-top: 10px;
            margin-left: 0;
        }
    }

    @media (max-width: 750px) {
        margin-bottom: 20px;
        flex-direction: column;
    }
`;
