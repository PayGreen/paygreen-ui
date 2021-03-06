import styled from 'styled-components';
import { justifyContentOptions } from '../../../shared/constants';
import { responsiveSpaces } from '../../../shared/spaces';

const ButtonGroupBase = styled.div`
    display: flex;
    justify-content: ${props => justifyContentOptions[props.align]};
    flex-wrap: wrap;
    ${props => responsiveSpaces(
        'margin',
        props.hasResetedMargins ? props.theme.space.sm : 0,
        0.75
    )};

    & > * {
        margin: ${props => props.theme.space.sm};
    }
`;

export { ButtonGroupBase };