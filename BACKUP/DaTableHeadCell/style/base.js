import { css } from 'styled-components';
import { math } from 'polished';
import { iconSizeOptions } from '../../../shared/constants';
import { checkboxStyle as cellCheckboxStyle } from '../../DaTableCell/style/base';
import { IconBase } from '../../Icon/style';

const iconSize = iconSizeOptions.xs;

const mobileStyle = css`
    @media ${props => props.theme.screen.max.lg} {
        white-space: nowrap;

        .head-child {
            display: flex;
            align-items: center;
            margin-bottom: ${props => props.theme.space.xs};

            .icon-child {
                ${IconBase} {
                    width: ${props => props.theme.icon.size[iconSize]};
                    height: ${props => props.theme.icon.size[iconSize]};
                    padding: ${props =>
                        math(
                            props.theme.icon.size[iconSize] +
                                '/2 - ' +
                                props.theme.space.xs,
                        )};

                    &::before {
                        padding: ${props => props.theme.icon.shift[iconSize]};
                        bottom: -${props => props.theme.icon.shift[iconSize]};
                        left: -${props => props.theme.icon.shift[iconSize]};
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
                        props.theme.space.sm +
                        '+ 2* (' +
                        props.theme.icon.size.sm +
                        '/2 - ' +
                        props.theme.space.xs +
                        ')',
                )};
        }
    }
`;

const checkboxStyle = css`
    ${cellCheckboxStyle};

    @media ${props => props.theme.screen.min.lg} {
        font-size: 0; /* remove cell label when it's only a select/deselect all Checkbox */
    }
`;

const hideUselessCell = css`
    @media ${props => props.theme.screen.max.lg} {
        display: none;
    }
`;

export { mobileStyle, checkboxStyle, hideUselessCell };
