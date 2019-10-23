import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

/**
 * Style global of the iframe which display component
 */
export const bodyStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');
    font-family: 'Open Sans', sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
    ${normalize};

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
        ${bodyStyles};
    }

    a {
        cursor: pointer;
        text-decoration: none;
        outline-color: green; /* TODO: to change */
    }
`;