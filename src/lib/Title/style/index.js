import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import {
    fontStyle,
    titleColors,
    underline
} from './base';

const TitleBase = styled.span`
    ${responsiveSpaces('margin')};
    ${props => titleColors[props.colorNumber]};
    ${props => props.underline ? underline : null};
    ${fontStyle};

    display: block;
    text-align: ${props => props.textAlign};
`;

export { TitleBase };