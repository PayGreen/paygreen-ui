import styled from 'styled-components';
import { linkColor } from './constants';
import { underlineStyle } from './base';

const LinkBase = styled.span`
    font-weight: ${props => props.theme.font.weight.bold};
    color: ${props => linkColor.base[props.colorType]};
    transition: all ${props => props.theme.transition.xs};

    ${props => props.underline ? underlineStyle : null};
`;

export { LinkBase };