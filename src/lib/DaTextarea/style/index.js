import styled from 'styled-components';
import { math } from 'polished';
import { enabled, disabled } from './base';

const DaTextareaBase = styled.div`
    position:relative;
    max-width: ${props => props.theme.form.inputWidth[props.blockWidth]};

    ${props => (props.inputDisabled ? disabled : enabled)};

        &::before,
        &::after {
        content: '';
        position: absolute;
        transform: rotate(45deg);
        width: ${props => props.theme.line};
        transform-origin: bottom center;
        background-color: ${props => props.theme.wab.grey30}; 
        right: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/1.7')};
        bottom: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/1.2')};
    }

    ::after {
        height: ${props => math(props.theme.line + '*6')};
    }
    
    ::before {
        height: ${props => math(props.theme.line + '*10')};
        margin-right: ${props => math(props.theme.line + '*3')};
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
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')}
        padding: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/3')};

            ${props =>
                math(
                    props.theme.daButton.buttonHeight[props.fieldSize] + '/2',
                )};
        font-size: ${props => props.theme.daButton.font[props.fieldSize]};
        transition: all ${props => props.theme.transition.sm};
        
        ::-webkit-resizer {
            display:none;
        }

        ::placeholder {
            font-style: italic;
            color: ${props => props.theme.wab.grey30};
        }
    }

    div {
        margin-top: ${props => props.theme.space.xs};
        text-align: right;
        color: ${props => props.theme.wab.grey60};
        padding: 0 ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
        font-size: ${props =>
            math(props.theme.daButton.font[props.fieldSize] + '*0.8')};

        span {
            font-weight: ${props => props.theme.font.weight.bold};
            color: ${props =>
                props.theme.color.status[props.charactersStatus].main};
        }
    }
`;

export { DaTextareaBase };
