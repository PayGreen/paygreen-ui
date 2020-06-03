import styled from 'styled-components';
import { math } from 'polished';
import { arrowBlockStyle, fieldSizeRatio } from './base';

const FormMessageBase = styled.div`
    position: relative;
    max-width: ${props => props.theme.form.inputWidth[props.blockWidth]};
    border-radius: ${fieldSizeRatio};
    padding: ${fieldSizeRatio};
    font-size: ${props => props.theme.daButton.font[props.fieldSize]};
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'icon text';
    grid-column-gap: ${props =>
        math(props.theme.daButton.buttonHeight[props.fieldSize] + '/3')};
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

export { FormMessageBase };
