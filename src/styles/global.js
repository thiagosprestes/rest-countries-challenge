import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #fafafa;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px Nunito Sans, sans-serif
    }

    #root {
        max-width: 1440px;
        margin: 0 80px;
    }
`;
