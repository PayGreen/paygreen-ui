import { css } from 'styled-components';
import { math } from 'polished';

const field = css`
    border: solid ${props => props.theme.line + ' ' + props.theme.wab.grey10};
    border-radius: ${props =>
        math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
    padding: 0
        ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
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
        border-right: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    width: ${props =>
        math(
            props.theme.form.inputWidth[
                props.inputType === 'tel' ? 'sm' : props.blockWidth
            ] +
                '-' +
                props.theme.daButton.buttonHeight[props.fieldSize],
        )};
`;

export { field, disabled, enabled, helpButtonStyle };
