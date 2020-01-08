import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import { formStatusOptions } from '../../../shared/constants';
import { label } from '../../Input/style/base';
import {
    withShadow,
    enabled,
    disabled
} from './base';

const TextareaBase = styled.div`
    ${responsiveSpaces('margin')};
    max-width: ${props => props.theme.form.inputWidth.lg};

    ${props => props.hasShadow ? withShadow : null};
    ${props => props.inputDisabled ? disabled : enabled};

    label {
        ${label};
        margin-bottom: ${props => props.theme.space.sm};
    }

    textarea {
        display: block;
        box-sizing: border-box;
        width: 100%;
        min-height: ${props => props.theme.form.textareaHeight};
        max-height: ${props => props.theme.form.inputWidth.lg};
        outline: none;
        border-style: solid;
        border-width: ${props => props.theme.line};
        border-radius: ${props => props.theme.radius.sm};
        padding: ${props => props.theme.space.sm};
        padding-right: ${props => props.theme.space.md};
        transition-property: border-color, color, padding;
        transition-duration: ${props => props.theme.transition.sm};

        ::placeholder {
            color: ${props => props.theme.wab.grey30};
            font-style: italic;
        }
    }

    div {
        margin-top: ${props => props.theme.space.xs};
        text-align: right;
        color: ${props => props.theme.wab.grey30};
        font-size: ${props => props.theme.font.size.xs};
        font-weight: ${props => props.theme.font.weight.bold};

        span {
            color: ${props => props.theme.color.status[formStatusOptions[props.charactersStatus]]};
        }
    }
`;

export { TextareaBase };