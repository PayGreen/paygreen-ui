import { createGlobalStyle } from 'styled-components';
import { ResetStyle, CssClasses } from '../lib/GlobalStyle';
import { ThemeDefault } from '../theme';

/**
 * Style global of the iframe which display component
 */
export const GlobalStyle = createGlobalStyle`
    ${ResetStyle};
    ${CssClasses};

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        font-size: ${ThemeDefault.font.size.base};
    }
`;
