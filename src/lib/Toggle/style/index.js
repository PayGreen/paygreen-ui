import styled from 'styled-components';
import { math } from 'polished';
import { color } from './constants';

const ToggleBase = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .legend {
        margin-right: ${props => props.theme.space.sm};
        margin-bottom: ${props => props.theme.space.sm};
        color: ${props => props.theme.wab[props.colorWab]};
    }

    label {
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: ${props => props.theme.form.toggle};
        margin-bottom: ${props => props.theme.space.sm};

        input {
            position: absolute;

            &:checked {
                & + .toggle {
                    color: ${props => color.main.checked[props.colorPallet]};
                    background-color: ${props =>
                        color.bg.checked[props.colorPallet]};

                    .icon {
                        svg {
                            fill: ${props =>
                                color.main.checked[props.colorPallet]};
                        }
                    }

                    &::before {
                        left: 100%;
                        transform: translateX(-100%);
                        border-color: ${props =>
                            color.bg.checked[props.colorPallet]};
                        background-color: ${props =>
                            color.main.checked[props.colorPallet]};
                    }

                    .checked-label {
                        transform: scale(1);
                    }

                    .not-checked-label {
                        transform: scale(0);
                    }
                }
            }
        }

        .toggle {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            width: 100%;
            border-radius: ${props => math(props.theme.form.toggle + '/2')};
            transition: all ${props => props.theme.transition.xs};
            color: ${props => color.main.base[props.colorPallet]};
            background-color: ${props => color.bg.base[props.colorPallet]};

            .icon {
                svg {
                    fill: ${props => color.main.base[props.colorPallet]};
                }
            }

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: ${props => props.theme.form.toggle};
                border-radius: 50%;
                border: solid 3px ${props => color.bg.base[props.colorPallet]};
                background-color: ${props =>
                    color.main.base[props.colorPallet]};
                transition: all ${props => props.theme.transition.xs};
            }

            .checked-label,
            .not-checked-label {
                box-sizing: border-box;
                min-width: ${props => props.theme.form.toggle};
            }

            .checked-label {
                transform: scale(0);
                padding-left: ${props => props.theme.space.sm};
            }

            .not-checked-label {
                padding-right: ${props => props.theme.space.sm};
                text-align: right;
            }
        }
    }
`;

export { ToggleBase };
