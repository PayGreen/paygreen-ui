import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import { smallFontSizes } from './constants';
import { smallText, bigText, underline, color } from './base';

const TitleBase = styled.span`
    display: block;
    text-align: ${props => props.align};
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.font.size[props.textSize]};

    ${props => (smallFontSizes.includes(props.textSize) ? smallText : bigText)};
    ${props => color[props.colorType]};
    ${props => (props.hasUnderline ? underline : null)};
    ${props =>
        props.hasUnderline
            ? responsiveSpaces('margin', 0, 1, 1, ['Top', 'Lateral'])
            : responsiveSpaces('margin')};
`;

export { TitleBase };
