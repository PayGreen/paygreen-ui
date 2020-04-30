import { css } from 'styled-components';
import { buttonColors, enableType } from './constants';

const enabled = css`
    button:hover &,
    button:active &,
    button:focus &,
    a:hover &,
    a:active &,
    a:focus & {
        &::before,
        &::after {
            opacity: 1;
        }
        &::before {
            top: 0;
            left: 0;
        }
        &::after {
            bottom: 0;
            right: 0;
        }
    }
`;

const disabled = css`
    cursor: not-allowed;
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
            border: solid ${props => props.theme.line}
                ${props =>
                    buttonColors.bg.line[props.colorType][enableType(props)]};
        }
    `,
};

export { enabled, disabled, templateStyle };
