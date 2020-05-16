import styled from 'styled-components';

export const Container = styled.header`
    background: ${(props) => props.theme.colors.elements};
    color: ${(props) => props.theme.colors.text};

    padding: 20px 80px;

    display: flex;
    justify-content: space-between;

    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.03);

    h1 {
        font-size: 16px;
    }

    button {
        display: flex;
        align-items: center;
        background: none;
        color: ${(props) => props.theme.colors.text};

        span {
            margin-left: 5px;
        }
    }
`;
