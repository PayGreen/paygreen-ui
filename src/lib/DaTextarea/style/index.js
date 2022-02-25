import styled from 'styled-components';
import { math } from 'polished';
import { enabled, disabled, borderRadius, widthStyle } from './base';

const DaTextareaBase = styled.div`
    position: relative;
    ${props => (props.hasStaticWidth ? widthStyle.static : widthStyle.fit)};
    ${props => (props.inputDisabled ? disabled : enabled)};

    textarea {
        ${props =>
            props.isRounded ? borderRadius.rounded : borderRadius.normal};
        width: 100%;
        min-height: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '*5')};
        border-style: solid;
        border-width: ${props => props.theme.line};
        border-color: ${props => props.theme.wab.grey10};
        font-size: ${props => props.theme.daButton.font[props.fieldSize]};
        transition: all ${props => props.theme.transition.sm}, height 0s;
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
                props.isRounded
                    ? math(
                          props.theme.daButton.buttonHeight[props.fieldSize] +
                              '/2',
                      )
                    : 0};
        margin: ${props => props.theme.space.xs} 0;
        font-size: ${props =>
            math(props.theme.daButton.font[props.fieldSize] + '*0.85')};

        span {
            font-weight: ${props => props.theme.font.weight.bold};
            color: ${props => props.theme.status[props.charactersStatus].main};
        }
    }
`;

export { DaTextareaBase };
