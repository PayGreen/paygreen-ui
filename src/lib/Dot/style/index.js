import styled from 'styled-components';
import { dotStyle } from './base';

const DotBase = styled.span`
    margin-top: ${props => props.theme.space[props.marginTop]};
    margin-bottom: ${props => props.theme.space[props.marginBottom]};
    margin-left: ${props => props.theme.space[props.marginLeft]};
    margin-right: ${props => props.theme.space[props.marginRight]};

    ${props => dotStyle[props.dotStyle]};
`;

export { DotBase };
