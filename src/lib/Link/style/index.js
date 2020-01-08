import styled from 'styled-components';
import { colorTypeOptions } from '../../../shared/constants';
import { mainColor } from '../../Text/style/constants';
import {
    underlineStyle,
    uppercaseStyle
} from './base';

const LinkBase = styled.span`
    color: ${props => props.colorType === colorTypeOptions.reverse ?
        props.theme.wab.white00 :
        mainColor[props.colorPallet]
    };
    font-weight: ${props => props.theme.font.weight.bold};
    transition: all ${props => props.theme.transition.xs};

    ${props => props.uppercase ? uppercaseStyle : null};
    ${props => props.hasUnderline ? underlineStyle : null};
`;

export { LinkBase };