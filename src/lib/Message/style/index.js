import styled from 'styled-components';
import { TextBase } from '../../Text/style';
import { arrowSize, color } from './constants';
import { arrowBlockStyle, widthStyle } from './base';

const MessageBase = styled.div`
    position: relative;
    border-radius: ${props =>
        props.isRounded
            ? props.theme.radius[props.fieldSize]
            : props.theme.radius.sm};
    padding: ${arrowSize};
    margin-top: ${props => props.theme.space[props.marginTop]};
    margin-bottom: ${props => props.theme.space[props.marginBottom]};
    display: inline-flex;
    background-color: ${props => color.bg[props.colorType][props.colorPallet]};
    color: ${props => color.content[props.colorType][props.colorPallet]};
    ${props => (props.hasStaticWidth ? widthStyle.static : widthStyle.fit)};

    &::after {
        content: '';
        position: absolute;
        border: solid ${arrowSize} transparent;
        border-top-color: ${props =>
            color.bg[props.colorType][props.colorPallet]};
        transform-origin: top;
    }

    & > .icon {
        flex-shrink: 0;
        margin-right: ${arrowSize};
        opacity: 0.6;

        svg {
            fill: ${props => color.content[props.colorType][props.colorPallet]};
        }
    }

    & > ${TextBase} {
        flex: 1;
        color: ${props => color.content[props.colorType][props.colorPallet]};
    }

    ${props => arrowBlockStyle[props.arrowBlock]};
`;

export { MessageBase };
