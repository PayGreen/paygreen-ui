import styled from 'styled-components';
import { math } from 'polished';
import { responsiveSpaces } from '../../../shared/spaces';
import { listStyle } from './base';

const ListBase = styled.ul`
    list-style-type: none;
    padding: .1px 0;
    ${responsiveSpaces('margin')};

    li {
        display: grid;
        grid-template-areas: 'bullet content' 'empty details';
        grid-template-columns: auto 1fr;
        align-items: center;
        margin: ${props => math(props.theme.iconSize[props.bulletSize] + '/2')} 0;
        ${props => listStyle[props.listStyle]};

        & > .icon,
        & > .bullet {
            grid-area: bullet;
            width: ${props => props.theme.iconSize[props.bulletSize]};
            margin-right: ${props => math(props.theme.iconSize[props.bulletSize] + '*0.75')};
        }

        & > :nth-child(3) {
            grid-area: details;
        }
    }
`;

export { ListBase };