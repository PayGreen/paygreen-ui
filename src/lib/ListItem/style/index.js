import styled from 'styled-components';
import { math } from 'polished';
import { marginBase } from './constants';
import { bulletStyle, clickableStyle, notClickableStyle } from './base';

const ListItemBase = styled.span`
    display: grid;
    padding: ${props => math(props.theme.icon.iconSize[props.bulletSize] + '/4')};
    transition: all ${props => props.theme.transition.sm};
    ${props => bulletStyle[props.bulletStyle]};
    ${props => (props.isClickable ? clickableStyle : notClickableStyle)};

    & > .icon,
    & > .bullet {
        grid-area: bullet;
        width: ${props => props.theme.icon.iconSize[props.bulletSize]};
        margin-right: ${marginBase};
    }

    @media (${props => props.theme.query.max.lg}) {
        margin-top: ${props => props.hasLink && props.theme.space.sm};
        margin-bottom: ${props => props.hasLink && props.theme.space.sm};
    }
`;

export { ListItemBase };
