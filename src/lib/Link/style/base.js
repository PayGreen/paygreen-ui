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

const hoverStyle = css`
    a:hover &,
    a:active &,
    a:focus & {
        &::after {
            height: 100%;
        }
    }
`;

export {
    linkUppercase,
    hoverStyle,
};