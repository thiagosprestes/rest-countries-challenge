import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 70px;
    margin-bottom: 40px;

    div {
        box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);
    }

    @media (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const CountryFlag = styled.div`
    width: 100%;
    height: 147px;
    border-radius: 5px 5px 0 0;
    background-image: url(${(props) => props.flag});
    background-size: cover;
    background-position: center;
`;

export const CountryInfo = styled.div`
    background-color: ${(props) => props.theme.colors.elements};
    width: 100%;
    padding: 1px 20px 40px 20px;
    color: ${(props) => props.theme.colors.text};
    border-radius: 0 0 5px 5px;

    h1 {
        font-size: 16px;
        margin: 25px 0;
    }

    li {
        span {
            font-weight: bold;
        }
    }

    li + li {
        margin-top: 10px;
    }
`;
