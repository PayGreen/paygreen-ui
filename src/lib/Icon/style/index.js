import styled from 'styled-components';
import { directionalProperty } from 'polished';
import { svgFill } from './constants';
import { backgroundStyle } from './base';

const IconBase = styled.span`
    ${props => props.background ? backgroundStyle : null};
    display: inline-flex;
    width: ${props => props.theme.iconSize[props.iconSize]};
    height: ${props => props.theme.iconSize[props.iconSize]};
    ${props => directionalProperty('margin',
        props.theme.space[props.marginTop],
        props.theme.space[props.marginRight],
        props.theme.space[props.marginBottom],
        props.theme.space[props.marginLeft]
    )};

    svg {
        width: 100%;
        fill: ${props => svgFill[props.colorPallet]};
    }
`;

export { IconBase };