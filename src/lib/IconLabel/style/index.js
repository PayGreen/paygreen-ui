import styled from 'styled-components';
import { directionalProperty } from 'polished';

const IconLabelBase = styled.span`
    display: inline-flex;
    align-items: center;
    border-radius: ${props => props.theme.radius.sm};
    background-color: ${props => props.theme.color[props.colorTheme]['light']};
    color: ${props => props.theme.color[props.colorTheme]['main']};
    padding: ${props => props.theme.space.xs};
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: ${props => props.theme.font.weight.bold};
    letter-spacing: ${props => props.theme.font.spacing};

    ${props => directionalProperty('margin',
        props.theme.space[props.marginTop],
        props.theme.space[props.marginRight],
        props.theme.space[props.marginBottom],
        props.theme.space[props.marginLeft]
    )};
`;

export { IconLabelBase };