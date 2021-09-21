import styled from 'styled-components';
import { math } from 'polished';
import { color } from './constants';
import { disabledStyle } from './base';

const ToggleLabelBase = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.theme.space.xs};
    font-size: ${props => props.theme.font.size.sm};
`;

const ToggleElement = styled.div`
    position: relative;
    height: ${props => props.theme.form.toggle};
    min-width: ${props => math(props.theme.form.toggle + '*2')};
    border-radius: ${props => math(props.theme.form.toggle + '/2')};
    display: flex;
    align-items: center;
    transition: background-color ${props => props.theme.transition.xs};

    &::after {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        width: ${props => math(props.theme.form.toggle)};
        border-radius: 50%;
        border: 3px solid;
        transition: all ${props => props.theme.transition.xs};
    }
`;

const ToggleBase = styled.label`
    cursor: pointer;
    user-select: none;
    position: relative;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    ${props => (props.isDisabled ? disabledStyle : null)};

    input {
        position: absolute;

        &:checked {
            & + ${ToggleElement} {
                padding-left: ${props => props.theme.space.sm};
                padding-right: ${props => props.theme.form.toggle};
                color: ${props =>
                    color.checked.main[props.checkedColor.colorPallet]};
                background-color: ${props =>
                    color.checked.bg[props.checkedColor.colorPallet]};

                &::after {
                    left: 100%;
                    transform: translateX(-100%);
                    border-color: ${props =>
                        color.checked.bg[props.checkedColor.colorPallet]};
                    background-color: ${props =>
                        color.checked.main[props.checkedColor.colorPallet]};
                }

                ${ToggleLabelBase} {
                    &:last-of-type {
                        display: none;
                    }
                }
            }
        }

        &:not(:checked) {
            & + ${ToggleElement} {
                padding-left: ${props => props.theme.form.toggle};
                padding-right: ${props => props.theme.space.sm};
                color: ${props =>
                    color.notChecked.main[props.notCheckedColor.colorPallet]};
                background-color: ${props =>
                    color.notChecked.bg[props.notCheckedColor.colorPallet]};

                &::after {
                    left: 0;
                    border-color: ${props =>
                        color.notChecked.bg[props.notCheckedColor.colorPallet]};
                    background-color: ${props =>
                        color.notChecked.main[
                            props.notCheckedColor.colorPallet
                        ]};
                }

                ${ToggleLabelBase} {
                    &:first-of-type {
                        display: none;
                    }
                }
            }
        }
    }
`;

export { ToggleLabelBase, ToggleElement, ToggleBase };
