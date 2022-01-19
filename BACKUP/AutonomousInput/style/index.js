import styled from 'styled-components';
import { fieldHeight, fieldRadius } from './constants';
import { statusStyles } from './base';

const AutonomousInputBase = styled.div`
    ${props => statusStyles[props.status]};
    font-size: ${props => props.theme.font.size.xs};
    max-width: ${props => props.theme.form.inputWidth.sm};
    padding-bottom: ${props => props.theme.blockSpace.sm};

    & > div {
        display: flex;
        position: relative;
        z-index: ${props => props.theme.zindex.front};
    }

    input {
        flex: 1;
        height: ${fieldHeight};
        background-color: ${props => props.theme.wab.white00};
        border: solid ${props => props.theme.line} ${props => props.theme.wab.grey10};
        border-right: 0;
        border-radius: ${fieldRadius} 0 0 ${fieldRadius};
        padding: ${props => props.theme.space.sm};
        padding-left: ${fieldRadius};
        transition: all ${props => props.theme.transition.sm};

        ::placeholder {
            color: ${props => props.theme.wab.grey30};
            font-style: italic;
        }
    }

    button {
        height: ${fieldHeight};
        border-style: solid;
        border-width: ${props => props.theme.line};
        border-left: none;
        border-radius: 0 ${fieldRadius} ${fieldRadius} 0;
        padding: ${props => props.theme.space.sm};
        text-transform: uppercase;
        font-size: ${props => props.theme.font.size.xxs};
        font-weight: ${props => props.theme.font.weight.bold};
        letter-spacing: ${props => props.theme.font.spacing};
        transition: all ${props => props.theme.transition.sm};
    }
`;

export { AutonomousInputBase };