import { css } from 'styled-components';
import { math } from 'polished';
import { uppercaseStyle } from '../../Text/style/base';

const opacity = 0.2;

const linkUppercase = css`
    ${uppercaseStyle};
    
    /* fix shift of uppercase letters */
    &::after {
        margin-left: ${props => math(props.theme.font.spacing + '/-2')};
    }
`;

export { opacity, linkUppercase };
