import styled from 'styled-components';
import { colorTypeOptions } from '../../../shared/constants';
import { colors } from './constants';
import {
    underlineStyle,
    uppercaseStyle
} from './base';

const LinkBase = styled.span`
    color: ${props => props.colorType === colorTypeOptions.reverse ?
        colors.secondary :
        colors.main[props.colorPallet]
    };
    font-weight: ${props => props.theme.font.weight.bold};
    transition: all ${props => props.theme.transition.xs};

    ${props => props.uppercase ? uppercaseStyle : null};
    ${props => props.underline ? underlineStyle : null};
`;

export { LinkBase };