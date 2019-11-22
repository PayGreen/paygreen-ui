import styled from 'styled-components';
import { justifyContentOptions } from '../../../shared/constants';
import { responsiveSpaces } from '../../Text/style/constants';

const ButtonGroupBase = styled.div`
    display: flex;
    justify-content: ${props => justifyContentOptions[props.buttonAlign]};
    flex-wrap: wrap;
    ${props => responsiveSpaces(
        'margin',
        props.resetMargin ? props.theme.space.sm : 0,
        0.75
    )};

    a {
        margin: ${props => props.theme.space.sm};
    }
`;

export { ButtonGroupBase };