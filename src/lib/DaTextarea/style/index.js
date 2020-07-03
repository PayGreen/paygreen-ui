import styled from 'styled-components';
import { math } from 'polished';
import { enabled, disabled } from './base';

const DaTextareaBase = styled.div`
    position: relative;
    max-width: ${props => props.theme.form.inputWidth[props.blockWidth]};

    ${props => (props.inputDisabled ? disabled : enabled)};

    textarea {
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: ${props => (props.autoHeight ? props.autoHeight : 'auto')};
        min-height: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '*5')};
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
        overflow: hidden;
        resize: none;

        ::placeholder {
            font-style: italic;
            color: ${props => props.theme.wab.grey30};
        }
    }

    div {
        text-align: right;
        color: ${props => props.theme.wab.grey60};
        padding: 0
            ${props =>
                math(
                    props.theme.daButton.buttonHeight[props.fieldSize] + '/2',
                )};
        margin: ${props => props.theme.space.xs} 0;
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
