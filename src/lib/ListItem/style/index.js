import styled from 'styled-components';
import { math } from 'polished';
import { marginBase } from './constants';
import { bulletStyle, clickableStyle, notClickableStyle } from './base';

const ListItemBase = styled.span`
    display: grid;
    padding: ${props => math(props.theme.icon.size[props.bulletSize] + '/4')};
    transition: all ${props => props.theme.transition.sm};
    ${props => bulletStyle[props.bulletStyle]};
    ${props => (props.isClickable ? clickableStyle : notClickableStyle)};

    & > .icon,
    & > .bullet {
        grid-area: bullet;
        width: ${props => props.theme.icon.size[props.bulletSize]};
        margin-right: ${marginBase};
    }
`;

export { ListItemBase };
