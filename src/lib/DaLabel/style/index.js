import styled from 'styled-components';
import { math, transparentize } from 'polished';
import {
    colorTypeOptions,
} from '../../../shared/constants';

const DaLabelBase = styled.label`
    display: block;
    color: ${props => props.colorType === colorTypeOptions.reverse ?
        transparentize(0.05, props.theme.wab.white00) :
        props.theme.wab.grey30
    };
    font-size: ${props => props.theme.daButton.font[props.fieldSize]};
    font-weight: ${props => props.theme.font.weight.bold};
    padding: 4px ${props =>
        math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
`;

export { DaLabelBase };