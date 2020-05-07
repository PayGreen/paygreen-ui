import styled from 'styled-components';
import { dotStyle } from './base';

const DotBase = styled.span`
    ${props => dotStyle[props.dotStyle]};
`;

export { DotBase };
