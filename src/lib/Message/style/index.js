import styled from 'styled-components';
import { math } from 'polished';
import { arrowBlockStyle, arrowSize } from './base';
import { TextBase } from '../../Text/style'

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
        props.theme.color.status[props.colorStatus].light};
    color: ${props => props.theme.color.status[props.colorStatus].main};

    & > .icon {
        grid-area: icon;
        margin-right: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/3')};
        svg {
            fill: ${props => props.theme.color.status[props.colorStatus].main};
        }
    }

    & > ${TextBase} {
        color: ${props => props.theme.color.status[props.colorStatus].main};
    }

    @media (${props => props.theme.query.max.xl}) {
        ${props => (props.arrowBlock !== 'none' ? arrowBlockStyle.top : null)};
    }

    @media (${props => props.theme.query.min.xl}) {
        ${props =>
            props.arrowBlock !== 'none'
                ? arrowBlockStyle[props.arrowBlock]
                : null};
    }
`;

export { MessageBase };