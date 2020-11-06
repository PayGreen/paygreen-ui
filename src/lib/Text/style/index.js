import styled from 'styled-components';
import { colorTypeOptions } from '../../../shared/constants';
import { responsiveSpaces } from '../../../shared/spaces';
import { underline } from '../../Title/style/base';
import { mainColor, minimizeFont } from './constants';
import { htmlTagStyle, uppercaseStyle, blockBackground } from './base';

const TextBase = styled.p`
    ${responsiveSpaces('margin')};
    color: ${props =>
        props.colorType === colorTypeOptions.reverse
            ? props.theme.wab.white00
            : mainColor[props.colorPallet]};
    line-height: ${props => props.theme.font.lineHeight.md};
    text-align: ${props => props.align};
    font-size: ${props => props.theme.font.size[props.textSize]};

    @media (${props => props.theme.query.max.md}) {
        font-size: ${props =>
            props.theme.font.size[minimizeFont[props.textSize]]};
    }

    ${props => htmlTagStyle[props.htmlTag]};
    ${props => (props.hasBackground ? blockBackground[props.colorType] : null)};
    ${props => (props.hasUppercase ? uppercaseStyle : null)};
    ${props => (props.hasUnderline ? underline : null)};
`;

export { TextBase };
