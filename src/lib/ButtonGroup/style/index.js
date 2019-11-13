import styled from 'styled-components';
import { justifyContentOptions } from '../../../shared/constants';

const ButtonGroupBase = styled.div`
    display: flex;
    justify-content: ${props => justifyContentOptions[props.buttonAlign]};
    flex-wrap: wrap;
    margin-top: ${props => props.theme.space[props.blockMargin]};

    a {
        margin: ${props => props.theme.space.sm};
    }
`;

export { ButtonGroupBase };