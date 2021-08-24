import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import { minimizeText } from '../../Text/style/base';
import { smallText, underline, color } from './base';

const TitleBase = styled.span`
    display: block;
    text-align: ${props => props.align};
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.font.size[props.textSize]};

    ${props => (props.isResponsive ? minimizeText : null)};
    ${props => (props.isSmallText ? smallText : null)};
    ${props => color[props.colorType]};
    ${props => (props.hasUnderline ? underline : null)};
    ${props =>
        props.hasUnderline
            ? responsiveSpaces('margin', 0, 1, 1, ['Top', 'Lateral'])
            : responsiveSpaces('margin')};
`;

export { TitleBase };
