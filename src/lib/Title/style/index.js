import styled from 'styled-components';
import { transparentize } from 'polished';
import {
    colorTypeOptions,
    colorPalletOptions,
} from '../../../shared/constants';
import { responsiveSpaces } from '../../../shared/spaces';
import { mainColor } from '../../Text/style/constants';
import { smallFontSizes } from './constants';
import { underline, strongColor, smallText, bigText } from './base';

const TitleBase = styled.span`
    display: block;
    text-align: ${props => props.align};
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.font.size[props.textSize]};
    ${props => (smallFontSizes.includes(props.textSize) ? smallText : bigText)};
    color: ${props =>
        props.colorType === colorTypeOptions.reverse
            ? transparentize(0.05, props.theme.wab.white00)
            : mainColor[props.colorPallet]};

    strong {
        font-weight: ${props => props.theme.font.weight.bold};

        ${props =>
            props.colorType !== colorTypeOptions.reverse &&
            props.colorPallet === colorPalletOptions.wab
                ? strongColor
                : null}
    }

    ${props => (props.hasUnderline ? underline : null)};
    ${props =>
        props.hasUnderline
            ? responsiveSpaces('margin', 0, 1, 1, ['Top', 'Lateral'])
            : responsiveSpaces('margin')};
`;

export { TitleBase };
