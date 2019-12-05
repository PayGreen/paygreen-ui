import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { ThemeDefault } from '../theme';

/**
 * Style global of the iframe which display component
 */
export const GlobalStyle = createGlobalStyle`
    ${normalize};

    :root {
        /* Reset basic font size from 16px to 10px, for easier calculation */
        font-size: 62.5%;
    }

    body,
    main,
    header,
    footer,
    section,
    article,
    aside,
    div,
    form,
    ::before,
    ::after {
        display: block;
        box-sizing: border-box;
    }

    body {
        @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');
        font-family: 'Open Sans', sans-serif;
        font-size: ${ThemeDefault.font.size.base};
    }

    a {
        cursor: pointer;
        text-decoration: none;
        outline: none;
    }
`;