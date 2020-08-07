import { css } from 'styled-components';
import { transparentize } from 'polished';

const labelSize = {
    md: css`
        width: fit-content;

        label {
            display: flex;
            align-items: center;
            padding: ${props => props.theme.space.sm};
            padding-right: ${props => props.theme.space.md};

            & > .icon {
                width: ${props => props.theme.icon.size.lg};
                height: ${props => props.theme.icon.size.lg};
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
        width: ${props => props.theme.form.radio.md};

        @media (${props => props.theme.query.min.sm}) {
            width: ${props => props.theme.form.radio.lg};
        }

        label {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: ${props => props.theme.space.sm};
            height: 100%;
            min-height: ${props => props.theme.form.radio.md};

            @media (${props => props.theme.query.min.sm}) {
                min-height: ${props => props.theme.form.radio.lg};
            }

            & > .icon {
                width: ${props => props.theme.icon.size.xl};
                height: ${props => props.theme.icon.size.xl};
                margin: ${props => props.theme.space.md} 0;
            }
        }
    `
};

const activeStyle = css`
    color: ${props => props.theme.status.success.main};
    box-shadow: ${props => props.theme.shadow.size.md + ' ' + transparentize(
        0.7,
        props.theme.status.success.main
    )};

    & > .icon {
        opacity: .7;

        svg {
            fill: ${props => props.theme.status.success.main};
        }
    }
`;

export {
    labelSize,
    activeStyle
};