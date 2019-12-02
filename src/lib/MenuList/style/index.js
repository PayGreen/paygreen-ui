import styled from 'styled-components';
import { transparentize } from 'polished';

const arrowSize = '24px';

const MenuListBase = styled.ul`
    margin: 0;
    padding: ${props => props.theme.space.sm} 0;

    ${props => props.isOpen ? null : closed};

    @media (${props => props.theme.query.min.lg}) {
        position: absolute;
        margin-top: ${arrowSize};
        padding: ${props => props.theme.radius.lg} 0;
        width: ${props => props.theme.blockWidth.sm};
        background-color: ${props => props.theme.wab.white00};
        border-radius: ${props => props.theme.radius.lg};
        box-shadow: 0 0 35px ${props => transparentize(
            props.theme.shadow.opacity.lg,
            props.theme.color[props.colorTheme]['main']
        )};
        transition: all ${props => props.theme.transition.md};
        transform-origin: center -${arrowSize};

        &:before {
            content: '';
            position: absolute;
            top: -${arrowSize};
            width: 100%;
            height: ${arrowSize};
        }

        &:after {
            content: '';
            position: absolute;
            top: -${arrowSize};
            left: 50%;
            transform: translateX(-50%);
            border-right : solid ${arrowSize} transparent;
            border-bottom : solid ${arrowSize} ${props => props.theme.wab.white00};
            border-left : solid ${arrowSize} transparent;
        }
    }

    li {
        list-style-type: none;
        margin: ${props => props.theme.line} 0;
        padding: 0;
    }
`;

export { MenuListBase };