import { createGlobalStyle, css } from 'styled-components';

/**
 * Style global of the iframe which display component
 */
export const bodyStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');
    font-family: 'Open Sans', sans-serif;;
`;

export const GlobalStyle = createGlobalStyle`
    body {
        ${bodyStyles}
    }
`;