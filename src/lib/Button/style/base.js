import { css } from 'styled-components';
import { buttonColors, enableType, opacity } from './constants';

const disabledStyle = css`
    cursor: not-allowed;

    /* !important needed to override hover style */

    &::before,
    &::after {
        opacity: ${props => opacity[props.colorType]} !important;
    }

    &::before {
        top: -${props => props.theme.button.shift} !important;
        left: -${props => props.theme.button.shift} !important;
    }

    &::after {
        bottom: -${props => props.theme.button.shift} !important;
        right: -${props => props.theme.button.shift} !important;
    }
`;

const templateStyle = {
    fill: css`
        color: ${props =>
            buttonColors.text.fill[props.colorType][enableType(props)]};

        &::before,
        &::after {
            background-color: ${props =>
                buttonColors.bg.fill[props.colorType][enableType(props)]};
        }
    `,
    line: css`
        color: ${props =>
            buttonColors.text.line[props.colorType][enableType(props)]};

        &::before,
        &::after {
            border-style: solid;
            border-width: ${props => props.theme.line};
            border-color: ${props =>
                buttonColors.bg.line[props.colorType][enableType(props)]};
        }
    `,
};

export { disabledStyle, templateStyle };
