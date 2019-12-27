import styled from 'styled-components';
import { math } from 'polished';
import { bulletStyle, clickableStyle, activeStyle } from './base';

const ListItemBase = styled.span`
    display: grid;
    grid-template-areas: 'bullet content' 'empty details';
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: ${props => math(props.theme.iconSize[props.bulletSize] + '/4')} 0;
    transition: all ${props => props.theme.transition.md};
    ${props => bulletStyle[props.bulletStyle]};
    ${props => props.isClickable ? clickableStyle : null};

    & > .icon,
    & > .bullet {
        grid-area: bullet;
        width: ${props => props.theme.iconSize[props.bulletSize]};
        margin-right: ${props => math(props.theme.iconSize[props.bulletSize] + '*0.75')};
    }

    & > :nth-child(3) {
        grid-area: details;
    }
`;

export { ListItemBase };