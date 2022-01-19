import { css } from 'styled-components';
import { math } from 'polished';
import { disabledField } from '../../Input/style/base';

const canHover = css`
    &:hover,
    &:active,
    &:focus {
        border-color: ${props => props.theme.status.default.main};
    }
`;

const enabled = css`
    textarea {
        background-color: ${props => props.theme.wab.white00};
        border-color: ${props => props.theme.wab.grey10};

        ${props => (props.inputReadOnly ? null : canHover)};
    }
`;

const disabled = css`
    textarea {
        ${disabledField};
        border-color: ${props => props.theme.wab.grey20};
    }
`;

const borderRadius = {
    normal: css`
        border-radius: ${props => props.theme.radius.sm};
        padding: ${props => props.theme.space.sm};
    `,
    rounded: css`
        border-radius: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
        padding: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/3')};
    `,
};

const widthStyle = {
    fit: css`
        max-width: ${props => props.theme.form.inputWidth[props.blockWidth]};
    `,
    static: css`
        width: 100%;
    `,
};

export { enabled, disabled, borderRadius, widthStyle };
