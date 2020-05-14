import { css } from 'styled-components';
import { uppercaseStyle } from '../../Text/style/base';
import { colorTypeOptions } from '../../../shared/constants';
import { mainColor } from '../../Text/style/constants';
import { transparentize } from 'polished';

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

const gradientBackground = css`
    background-image: linear-gradient(
        to left,
        ${props =>
                transparentize(
                    0.1,
                    props.theme.color[props.colorTheme].gradientShade,
                )}
            30%,
        ${props =>
                transparentize(
                    0.1,
                    props.theme.color[props.colorTheme].gradientBase,
                )}
            80%
    );
`;

// switch between background-color or background-image effects depending on colorPallet choice
const backgroundStyle = css`
    background-color: ${props =>
        props.colorPallet === 'wab' || props.colorPallet === 'status'
            ? mainColor[props.colorPallet]
            : null};
    ${props => (props.colorPallet === 'theme' ? gradientBackground : null)}
    );
`;

const backgroundDarkStyle = css`
    background-color: ${props => props.theme.wab.white00};
`;

const hoverStyle = {
    soft: css`
        &::after {
            height: 100%;
            opacity: 0;
            transition: all ${props => props.theme.transition.md};
            ${props =>
                props.colorType === colorTypeOptions.reverse
                    ? backgroundDarkStyle
                    : backgroundStyle};
        }

        a:hover &,
        a:active &,
        a:focus & {
            &::after {
                opacity: 0.4;
                transition: all ${props => props.theme.transition.md};
            }
        }
    `,
    classic: css`
        &::after {
            height: ${props => (props.hasUnderline ? props.theme.line : 0)};
            opacity: 0.3;
            ${props =>
                props.colorType === colorTypeOptions.reverse
                    ? backgroundDarkStyle
                    : backgroundStyle};

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
