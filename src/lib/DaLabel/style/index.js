import styled from 'styled-components';
import { math } from 'polished';

const DaLabelBase = styled.label`
    display: block;
    color: ${props => props.theme.wab.grey30};
    font-size: ${props => props.theme.daButton.font[props.fieldSize]};
    font-weight: ${props => props.theme.font.weight.bold};
    padding: ${props =>
        props.theme.space.xs +
        ' ' +
        math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};

    .required {
        margin-left: 0.2em;
        color: ${props => props.theme.status.warning.main};
    }
`;

export { DaLabelBase };
