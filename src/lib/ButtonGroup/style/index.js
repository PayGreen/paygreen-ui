import styled from 'styled-components';
import { justifyContentOptions } from '../../../shared/constants';
import {
    blockSpaces
} from './base';

const ButtonGroupBase = styled.div`
    ${blockSpaces};
    display: flex;
    justify-content: ${props => justifyContentOptions[props.buttonAlign]};
    flex-wrap: wrap;

    a {
        margin: ${props => props.theme.space.sm};
    }
`;

export { ButtonGroupBase };