import styled from 'styled-components';
import { directionalProperty } from 'polished';
import { colorStyle } from './base';

const IconLabelBase = styled.span`
    display: inline-flex;
    align-items: center;
    border-radius: ${props => props.theme.radius.sm};
    padding: ${props => props.theme.space.xs};
    text-transform: uppercase;
    font-size: ${props => props.theme.font.size.tiny};
    font-weight: ${props => props.theme.font.weight.bold};
    letter-spacing: ${props => props.theme.font.spacing};

    ${props => colorStyle[props.colorPallet]};

    ${props => directionalProperty('margin',
        props.theme.space[props.marginTop],
        props.theme.space[props.marginRight],
        props.theme.space[props.marginBottom],
        props.theme.space[props.marginLeft]
    )};
`;

export { IconLabelBase };