import styled from 'styled-components';
import { displayStyle } from './base';

const GridBase = styled.div`
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;

    ${props => displayStyle[props.display]};
`;

export { GridBase };