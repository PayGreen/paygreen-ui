import { css } from 'styled-components';
import { math } from 'polished';
import { IconBase } from '../../Icon/style';

const isCheckboxStyle = css`
    @media (${props => props.theme.query.min.lg}) {
        font-size: 0; /* remove cell label when it's only a select/deselect all Checkbox */
    }
`;

const calcShift = props => props.theme.icon.shift.sm;

const mobileStyle = css`
    @media (${props => props.theme.query.max.lg}) {
        white-space: nowrap;

        .head-child {
            display: flex;
            align-items: center;
            margin-bottom: ${props => props.theme.space.xs};

            .icon-child {
                ${IconBase} {
                    width: ${props => props.theme.icon.size.sm};
                    height: ${props => props.theme.icon.size.sm};
                    margin-right: ${props => props.theme.space.xs};
                    padding: ${props =>
                        math(
                            props.theme.icon.size.sm +
                                '/2 - ' +
                                props.theme.space.xs,
                        )};

                    &::before {
                        padding: ${calcShift};
                        bottom: -${calcShift};
                        left: -${calcShift};
                    }
                }
            }

            .label-child {
                flex: 1;
                display: flex;
                align-items: center;

                &::after {
                    content: '';
                    flex: 1;
                    border-top: dotted ${props => props.theme.line};
                    border-color: ${props => props.theme.wab.grey20};
                    margin: 0 ${props => props.theme.space.sm};
                }
            }
        }

        .cell-child {
            padding-right: ${props =>
                math(
                    props.theme.icon.size.sm +
                        '+' +
                        props.theme.space.md +
                        '+ 2*' +
                        props.theme.space.xs,
                )};
        }
    }
`;

const hideUselessCell = css`
    @media (${props => props.theme.query.max.lg}) {
        display: none;
    }
`;

export { isCheckboxStyle, mobileStyle, hideUselessCell };
