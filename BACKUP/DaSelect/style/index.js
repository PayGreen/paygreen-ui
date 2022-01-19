import styled from 'styled-components';
import { math } from 'polished';
import {
    field,
    enabled,
    disabled,
    helpButtonStyle,
    widthStyle,
    iconStyle,
} from '../../DaInput/style/base';
import { arrow } from './constants';

const DaSelectBase = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    select {
        ${field};
        appearance: none;
        padding-right: ${props =>
            props.isRounded ? arrow.space.rounded : arrow.space.basic};

        option {
            &:disabled {
                color: ${props => props.theme.wab.grey30};
            }
        }

        ${props => (props.inputDisabled ? disabled : enabled)};
    }

    ${props => (props.hasHelpButton ? helpButtonStyle : null)};
    ${props => (props.hasStaticWidth ? widthStyle.static : widthStyle.fit)};
    ${props => (props.hasIcon ? iconStyle : null)};

    &::after {
        content: '';
        position: absolute;
        pointer-events: none;
        right: ${props =>
            props.isRounded
                ? math(
                      props.theme.daButton.buttonHeight[props.fieldSize] + '/2',
                  )
                : props.theme.space.sm};
        border-style: solid;
        border-width: 0 ${arrow.width};
        border-top-width: ${arrow.height};
        border-color: transparent;
        border-top-color: ${props =>
            props.inputDisabled
                ? props.theme.wab.grey30
                : props.theme.wab.grey60};
    }
`;

export { DaSelectBase };
