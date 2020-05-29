import styled from 'styled-components';
import { math } from 'polished';

const DaLabelBase = styled.label`
    display: block;
    color: ${props => props.theme.wab.grey30};
    font-size: ${props => props.theme.daButton.font[props.fieldSize]};
    font-weight: ${props => props.theme.font.weight.bold};
    padding: 4px
        ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
`;

export { DaLabelBase };
