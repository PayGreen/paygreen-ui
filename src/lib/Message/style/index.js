import styled from 'styled-components';
import { TextBase } from '../../Text/style';
import { arrowBlockStyle, arrowSize } from './base';

const MessageBase = styled.div`
    position: relative;
    max-width: ${props => props.theme.form.inputWidth[props.blockWidth]};
    border-radius: ${props => props.theme.radius[props.fieldSize]};
    padding: ${arrowSize};
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'icon text';
    justify-items: center;
    background-color: ${props =>
        props.theme.status[props.colorStatus].light};
    color: ${props => props.theme.status[props.colorStatus].main};

    & > .icon {
        grid-area: icon;
        margin-right: ${arrowSize};

        svg {
            fill: ${props => props.theme.status[props.colorStatus].main};
        }
    }

    & > ${TextBase} {
        color: ${props => props.theme.status[props.colorStatus].main};
    }

    ${props => arrowBlockStyle[props.arrowBlock]};
`;

export { MessageBase };
