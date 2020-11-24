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

    html {
        scroll-behavior: smooth;
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
    figure,
    ::before,
    ::after {
        display: block;
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        font-size: ${ThemeDefault.font.size.base};
    }

    a {
        cursor: pointer;
        outline: none;
        text-decoration: none;
    }

    button {
        cursor: pointer;
        outline: none;
        background-color: transparent;
        border: none;
        padding: 0;
    }

    input,
    select,
    textarea {
        display: block;
        box-sizing: border-box;
        outline: none;
    }

    [type="checkbox"],
    [type="radio"] {
        box-shadow: none;
    }

    .hideOnMobile {
        @media ${ThemeDefault.screen.max.sm} {
            display: none !important;
        }
    }

    .hideOnTablet {
        @media ${ThemeDefault.screen.max.md} {
            display: none !important;
        }
    }

    .hideOnDesktop {
        @media ${ThemeDefault.screen.min.md} {
            display: none !important;
        }
    }

    .hideOnSmallScreen {
        @media ${ThemeDefault.screen.max.lg} {
            display: none !important;
        }
    }

    .hideOnBigScreen {
        @media ${ThemeDefault.screen.min.lg} {
            display: none !important;
        }
    }
`;