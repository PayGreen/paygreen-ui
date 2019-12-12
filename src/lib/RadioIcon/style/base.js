import { css } from 'styled-components';
import { transparentize } from 'polished';

const labelSize = {
    md: css`
        width: fit-content;

        label {
            display: flex;
            align-items: center;

            & > .icon {
                width: ${props => props.theme.iconSize.lg};
                height: ${props => props.theme.iconSize.lg};
                margin-right: ${props => props.theme.space.sm};
            }
        }

        input:checked {
            & + label {
                padding-right: ${props => props.theme.corner.size.lg};

                .checked {
                    transition-delay: ${props => props.theme.transition.sm};
                }
            }
        }
    `,
    lg: css`
        width: ${props => props.theme.form.radio.lg};

        label {
            min-height: ${props => props.theme.form.radio.lg};
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;

            & > .icon {
                width: ${props => props.theme.iconSize.xl};
                height: ${props => props.theme.iconSize.xl};
                margin: ${props => props.theme.space.md} 0;
            }
        }
    `
};

const activeStyle = css`
    color: ${props => props.theme.color.status.success};
    box-shadow: ${props => props.theme.shadow.size.md + ' ' + transparentize(
        0.7,
        props.theme.color.status.success
    )};

    & > .icon {
        opacity: .7;

        svg {
            fill: ${props => props.theme.color.status.success};
        }
    }
`;

export {
    labelSize,
    activeStyle
};