import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import {
    fontStyle,
    underline
} from './base';

const TitleBase = styled.span`
    ${responsiveSpaces('margin')};
    ${props => props.hasUnderline ? underline : null};
    ${fontStyle};

    display: block;
    text-align: ${props => props.textAlign};
`;

export { TitleBase };