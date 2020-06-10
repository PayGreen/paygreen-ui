import styled from 'styled-components';
import { math } from 'polished';
import { enabled, disabled } from './base';

const DaTextareaBase = styled.div`
    position: relative;
    max-width: ${props => props.theme.form.inputWidth[props.blockWidth]};

    ${props => (props.inputDisabled ? disabled : enabled)};

    &::before,
    &::after {
        content: '';
        position: absolute;
        pointer-events: none;
        transform: rotate(45deg);
        transform-origin: bottom right;
        background-color: ${props => props.theme.wab.grey20};
        width: ${props => props.theme.line};
        right: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/5')};
        bottom: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/5')};
        margin-bottom: ${props =>
            props.hasCounter && !props.inputDisabled && !props.inputReadOnly
                ? math(
                      props.theme.daButton.buttonHeight[props.fieldSize] +
                          '/1.8',
                  )
                : 0};
    }

    ::after {
        height: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
        margin-right: ${props =>
            math(
                'sqrt((' +
                    props.theme.daButton.buttonHeight[props.fieldSize] +
                    '/2)' +
                    '^2' +
                    '/2)',
            )};
    }

    ::before {
        height: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/3.5')};
        margin-right: ${props =>
            math(
                'sqrt((' +
                    props.theme.daButton.buttonHeight[props.fieldSize] +
                    '/3.5)' +
                    '^2' +
                    '/2)',
            )};
    }

    textarea {
        box-sizing: border-box;
        display: block;
        width: 100%;
        min-height: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '*5')};
        max-height: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '*15')};
        outline: none;
        border-style: solid;
        border-width: ${props => props.theme.line};
        border-color: ${props => props.theme.wab.grey10};
        border-radius: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
        padding: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/3')};
        font-size: ${props => props.theme.daButton.font[props.fieldSize]};
        transition: all ${props => props.theme.transition.sm};

        ::-webkit-resizer {
            display: none;
        }

        ::placeholder {
            font-style: italic;
            color: ${props => props.theme.wab.grey30};
        }
    }

    div {
        text-align: right;
        line-height: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/1.8')};
        color: ${props => props.theme.wab.grey60};
        padding: 0
            ${props =>
                math(
                    props.theme.daButton.buttonHeight[props.fieldSize] + '/2',
                )};
        font-size: ${props =>
            math(props.theme.daButton.font[props.fieldSize] + '*0.85')};

        span {
            font-weight: ${props => props.theme.font.weight.bold};
            color: ${props =>
                props.theme.color.status[props.charactersStatus].main};
        }
    }
`;

export { DaTextareaBase };
