import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px Nunito Sans, sans-serif
    }

    #root {
        max-width: 1440px;
    }

    ul {
        list-style: none;
    }

    a, button {
        text-decoration: none;
        cursor: pointer;
        border: 0;
        border-radius: 4px;
    }
`;
