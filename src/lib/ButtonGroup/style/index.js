import styled from 'styled-components';
import { math } from 'polished';
import { justifyContentOptions } from '../../../shared/constants';
import {
    buttonSpace
} from './constants';

const ButtonGroupBase = styled.div`
    display: flex;
    justify-content: ${props => justifyContentOptions[props.buttonAlign]};
    flex-wrap: wrap;
    margin-bottom: ${props => props.theme.blockPadding[props.marginBottom]};

    a {
        margin: ${props => props.theme.space.sm};
    }
`;

export { ButtonGroupBase };