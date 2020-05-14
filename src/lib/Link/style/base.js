import { css } from 'styled-components';
import { uppercaseStyle } from '../../Text/style/base';
import { colorTypeOptions } from '../../../shared/constants';
import { mainColor } from '../../Text/style/constants';

const linkUppercase = css`
    ${uppercaseStyle};
    /* fix shift of uppercase letters */
    padding-left: ${props => props.theme.font.spacing};

    &::after {
        margin-left: -${props => props.theme.font.spacing};
    }
`;

const underlineStyle = css`
    &::after {
        height: ${props => props.theme.line};
        background-color: ${props =>
            props.colorType === colorTypeOptions.reverse
                ? props.theme.wab.white00
                : mainColor[props.colorPallet]};
        opacity: 0.25;
        transition: all ${props => props.theme.transition.xs};
    }
`;

const hoverStyle = {
    soft: css`
        &::after {
            height: 100%;
            opacity: 0;
            background-color: ${props =>
                props.colorType === colorTypeOptions.reverse
                    ? props.theme.wab.white00
                    : mainColor[props.colorPallet]};
            transition: all ${props => props.theme.transition.lg};
        }
        a:hover &,
        a:active &,
        a:focus & {
            &::after {
                opacity: 0.3;
                transition: all ${props => props.theme.transition.lg};
            }
        }
    `,
    classic: css`
        &::after {
            height: ${props => props.hasUnderline ? props.theme.line : 0};
            opacity: 0.3;
            background-color: ${props =>
                props.colorType === colorTypeOptions.reverse
                    ? props.theme.wab.white00
                    : mainColor[props.colorPallet]};
            transition: all ${props => props.theme.transition.xs};
        }
        a:hover &,
        a:active &,
        a:focus & {
            &::after {
                height: 100%;
                transition: all ${props => props.theme.transition.xs};
            }
        }
    `,
};

export { underlineStyle, linkUppercase, hoverStyle };
