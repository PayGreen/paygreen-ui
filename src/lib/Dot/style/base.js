import { css } from 'styled-components';
import { math, transparentize } from 'polished';
import exponentialSymbols from 'polished/lib/math/presets/exponentialSymbols';

import { colorTypeOptions } from '../../../shared/constants';
import { color } from './constants';

const angle = 28;
const cos = Math.cos((angle * Math.PI) / 180);

const backgroundColor = css`
    background-color: ${props =>
        props.colorType === colorTypeOptions.reverse
            ? transparentize(0.7, props.theme.wab.white00)
            : color[props.colorPallet]};
`;

const dotStyle = {
    circle: css`
        display: inline-block;
        width: ${props => math(props.theme.icon.size[props.dotSize] + '/2')};
        height: ${props => math(props.theme.icon.size[props.dotSize] + '/2')};
        border-radius: 50%;
        ${backgroundColor};
    `,
    dash: css`
        display: inline-block;
        width: ${props => props.theme.icon.size[props.dotSize]};
        height: ${props => props.theme.dash};
        border-radius: ${props => props.theme.dash};
        ${backgroundColor};
    `,
    slashes: css`
        display: inline-flex;
        width: ${props =>
            math(
                'sqrt((' +
                    props.theme.icon.size[props.dotSize] +
                    '/' +
                    cos +
                    ')^2 - ' +
                    props.theme.icon.size[props.dotSize] +
                    '^2) + ' +
                    props.theme.line +
                    '*2',
                exponentialSymbols,
            )};

        &::before,
        &::after {
            content: '';
            display: block;
            transform: rotate(${angle}deg);
            margin-top: ${props =>
                math(
                    '(' +
                        props.theme.icon.size[props.dotSize] +
                        '/' +
                        cos +
                        '-' +
                        props.theme.icon.size[props.dotSize] +
                        ')/-2',
                )};
            width: ${props => props.theme.line};
            height: ${props => props.theme.icon.size[props.dotSize]};
            transform-origin: bottom center;
            ${backgroundColor};
        }

        &::after {
            margin-left: ${props => props.theme.line};
        }
    `,
};

export { dotStyle };
