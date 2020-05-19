import { css } from 'styled-components';
import { uppercaseStyle } from '../../Text/style/base';

const linkUppercase = css`
    ${uppercaseStyle};
    /* fix shift of uppercase letters */
    padding-left: ${props => props.theme.font.spacing};
    
    &::after {
        margin-left: -${props => props.theme.font.spacing};
    }
`;

const underlineStyle = css`
    &::after {
        height: ${props => props.theme.line};
        opacity: 0.25;
    }
`;

const classicHoverStyle = css`
    a:hover &,
    a:active &,
    a:focus & {
        &::after {
            height: 100%;
        }
    }
`;

const softHoverStyle = css`
    &::after {
        height: 100%;
        opacity: 0;
    }

    a:hover &,
    a:active &,
    a:focus & {
        &::after {
            opacity: 0.25;
            height: 100%;
        }
    }
`;

export { underlineStyle, linkUppercase, classicHoverStyle, softHoverStyle };
