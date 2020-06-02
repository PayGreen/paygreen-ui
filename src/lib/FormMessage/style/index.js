import styled from 'styled-components';
import { math } from 'polished';
import { arrowBlockStyle } from './base';

const FormMessageBase = styled.div`
    position: relative;
    max-width: ${props => props.theme.form.inputWidth[props.blockWidth]};
    border-radius: ${props =>
        math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')}
    padding: ${props =>
        math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
    font-size: ${props => props.theme.daButton.font[props.fieldSize]};
    display:grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'icon text';
    justify-items: center;
    background-color: ${props =>
        props.theme.color.status[props.colorStatus].light};
    color: ${props => props.theme.color.status[props.colorStatus].light};

    & > .icon {
        grid-area: icon;
        svg {
            fill: ${props => props.theme.color.status[props.colorStatus].main};
        }
    }

    & > :last-child {
        &:not(.icon) {
            grid-area: text;
            color: ${props => props.theme.color.status[props.colorStatus].main};
        }
    }

    ${props => props.arrowBlock !== 'none'? arrowBlockStyle[props.arrowBlock] : null};
`;

export { FormMessageBase };
