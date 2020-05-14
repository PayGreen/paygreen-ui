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

const backgroundGradientStyle = css`
    background-color: ${props =>
        props.colorType === colorTypeOptions.reverse
            ? props.theme.wab.white00
            : null };
    background-image: linear-gradient(
        to left,
        ${props =>
                transparentize(
                    0.2,
                    props.theme.color[props.colorTheme].gradientShade,
                )}
            30%,
        ${props =>
                transparentize(
                    0.2,
                    props.theme.color[props.colorTheme].gradientBase,
                )}
            80%
    );
`;

const backgroundColorStyle = css`
    background-color: ${props =>
        props.colorType === colorTypeOptions.reverse
            ? props.theme.wab.white00
            : null };
    background-image: linear-gradient(
        to left,
        ${props =>
                transparentize(
                    0.2,
                    props.theme.color[props.colorTheme].gradientShade,
                )}
            30%,
        ${props =>
                transparentize(
                    0.2,
                    props.theme.color[props.colorTheme].gradientBase,
                )}
            80%
    );
`;


const hoverStyle = {
    soft: css`
        &::after {
            height: 100%;
            opacity: 0;

            background-color: ${props =>
                props.colorPallet === 'wab' || props.colorPallet === 'status'
                    ? mainColor[props.colorPallet]
                    : null};
            ${props => (props.colorPallet === 'theme' ? gradientStyle : null)}

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
            height: ${props => (props.hasUnderline ? props.theme.line : 0)};
            opacity: 0.3;

            background-color: ${props =>
                props.colorPallet === 'wab' || props.colorPallet === 'status'
                    ? mainColor[props.colorPallet]
                    : null};
            ${props => (props.colorPallet === 'theme' ? gradientStyle : null)}
            
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
