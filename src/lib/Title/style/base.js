import { css } from 'styled-components';
import { colorNumberOptions } from '../../../shared/constants';
import {
    titleColor,
    smallSizes,
    underlineAlign
} from './constants';

const base = css`
    margin-top: ${props => props.theme.space[props.marginTop]};
    margin-bottom: ${props => props.theme.space[props.marginTop]};
    text-align: ${props => props.align};
    font-size: ${props => props.theme.font.size[props.size]};
    font-weight: ${props => props.theme.font.weight.bold};
`;

const smallText = css`
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.font.spacing};
`;

const oneColor = css`
    color: ${props => titleColor.main[props.colorType]};
`;

const twoColors = css`
    color: ${props => titleColor.secondary[props.colorType]};

    b {
        color: ${props => titleColor.main[props.colorType]};
    }
`;

const underline = css`
    position: relative;
    padding-bottom: ${props => props.theme.font.underline.space[props.size]};
    margin-bottom: ${props => props.theme.font.underline.space[props.size]};

    &::after {
        ${props => underlineAlign[props.align]};
        content: '';
        position: absolute;
        bottom: 0;
        height: ${props => props.theme.font.underline.line[props.size]};
        width: ${props => props.theme.font.underline.width[props.size]};
        background-color: ${props => titleColor.line[props.colorType]};
    }
`;

const titleStyle = css`
    ${base};
    ${props => smallSizes.includes(props.size) ? smallText : ''};
    ${props => props.colorNumber === colorNumberOptions.one ? oneColor : twoColors};
    ${props => props.underline ? underline : ''};
`;

export { titleStyle };