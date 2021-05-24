import { css } from 'styled-components';
import { math } from 'polished';
import { iconShift } from './constants';

const borderRadius = {
    normal: css`
        border-radius: ${props => props.theme.radius.sm};
        padding: 0 ${props => props.theme.space.sm};
    `,
    rounded: css`
        border-radius: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
        padding: 0
            ${props =>
                math(
                    props.theme.daButton.buttonHeight[props.fieldSize] + '/2',
                )};
    `,
};

const field = css`
    ${props => (props.isRounded ? borderRadius.rounded : borderRadius.normal)};
    border: solid ${props => props.theme.line + ' ' + props.theme.wab.grey10};
    height: ${props => props.theme.daButton.buttonHeight[props.fieldSize]};
    width: 100%;
    font-size: ${props => props.theme.daButton.font[props.fieldSize]};
    color: ${props => props.theme.wab.grey60};
    transition: all ${props => props.theme.transition.sm};
`;

const canHover = css`
    &:hover,
    &:active,
    &:focus {
        border-color: ${props => props.theme.status.default.main};
    }
`;

const enabled = css`
    background-color: ${props => props.theme.wab.white00};

    ${props => (props.inputReadOnly ? null : canHover)};
`;

const disabled = css`
    cursor: not-allowed;
    color: ${props => props.theme.wab.grey40};
    background-color: ${props => props.theme.wab.white20};
`;

const helpButtonStyle = css`
    input,
    select {
        border-right-color: transparent;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    width: ${props =>
        !props.hasStaticWidth &&
        math(
            props.theme.form.inputWidth[
                props.inputType === 'tel' ? 'sm' : props.blockWidth
            ] +
                '-' +
                props.theme.daButton.buttonHeight[props.fieldSize],
        )};
`;

const widthStyle = {
    fit: css`
        max-width: ${props =>
            props.inputType === 'tel'
                ? props.theme.form.inputWidth.sm
                : props.theme.form.inputWidth[props.blockWidth]};
    `,
    static: css`
        width: 100%;
    `,
};

const iconStyle = css`
    position: relative;

    .icon {
        position: absolute;
        pointer-events: none;
        top: ${iconShift};
        left: ${iconShift};

        svg {
            fill: ${props => props.theme.wab.grey40};
        }
    }

    input,
    select {
        padding-left: ${props =>
            props.theme.daButton.buttonHeight[props.fieldSize]};
    }
`;

export { field, disabled, enabled, helpButtonStyle, widthStyle, iconStyle };
