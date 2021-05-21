import styled from 'styled-components';
import { math } from 'polished';
import {
    field,
    enabled,
    disabled,
    helpButtonStyle,
    widthStyle,
} from '../../DaInput/style/base';

const DaSelectBase = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    ${props => (props.hasStaticWidth ? widthStyle.static : widthStyle.fit)};

    select {
        ${field};
        appearance: none;
        padding-right: ${props =>
            props.isRounded
                ? math(
                      props.theme.daButton.buttonHeight[props.fieldSize] + '/2',
                  )
                : props.theme.space.md};

        option {
            &:disabled {
                color: ${props => props.theme.wab.grey30};
            }
        }

        ${props => (props.inputDisabled ? disabled : enabled)};
    }

    ${props => (props.hasHelpButton ? helpButtonStyle : null)};

    &::after {
        content: '';
        position: absolute;
        pointer-events: none;
        right: ${props =>
            props.isRounded
                ? math(
                      props.theme.daButton.buttonHeight[props.fieldSize] + '/2',
                  )
                : props.theme.space.md};
        transform: translateX(50%);
        border-style: solid;
        border-width: 0
            ${props =>
                math(
                    props.theme.daButton.buttonHeight[props.fieldSize] + '/7',
                )};
        border-top-width: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/6')};
        border-color: transparent;
        border-top-color: ${props =>
            props.inputDisabled
                ? props.theme.wab.grey30
                : props.theme.wab.grey60};
    }
`;

export { DaSelectBase };
