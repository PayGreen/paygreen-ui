import styled from 'styled-components';
import { TextBase } from '../../Text/style';
import { color } from './constants';
import { arrowSize, arrowBlockStyle } from './base';

const MessageBase = styled.div`
    position: relative;
    max-width: ${props => props.theme.form.inputWidth[props.blockWidth]};
    border-radius: ${props => props.theme.radius[props.fieldSize]};
    padding: ${arrowSize};
    margin-top: ${props => props.theme.space[props.marginTop]};
    margin-bottom: ${props => props.theme.space[props.marginBottom]};
    display: inline-grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'icon text';
    background-color: ${props => color.bg[props.colorType][props.colorPallet]};
    color: ${props => color.content[props.colorType][props.colorPallet]};

    &::after {
        content: '';
        position: absolute;
        border: solid ${arrowSize} transparent;
        border-top-color: ${props =>
            color.bg[props.colorType][props.colorPallet]};
        transform-origin: top;
    }

    & > .icon {
        grid-area: icon;
        margin-right: ${arrowSize};
        opacity: 0.6;

        svg {
            fill: ${props => color.content[props.colorType][props.colorPallet]};
        }
    }

    & > ${TextBase} {
        color: ${props => color.content[props.colorType][props.colorPallet]};
    }

    ${props => arrowBlockStyle[props.arrowBlock]};
`;

export { MessageBase };
