import { css } from 'styled-components';

const doingStyle = css`
    cursor: default;

    &::after {
        width: 50%;
        background-color: ${props => props.theme.color[props.colorTheme].main};
        transition-delay: ${props => props.theme.transition.xs};
    }

    &:hover {
        @media ${props => props.theme.screen.min.md} {
            span,
            &::before {
                transition-delay: ${props => props.theme.transition.md};
            }
    
            &::after {
                transition-delay: 0;
                width: 0;
            }
        }
    }
`;

// done style is applied for items inside <a> or <button> (only done steps can be clicked)
const doneStyle = css`
    button &,
    a & {
        .icon {
            &.done {
                display: block;
            }
        }

        span {
            color: ${props => props.theme.wab.white00};
        }

        &::before {
            background-color: ${props =>
                props.theme.color[props.colorTheme].main};
        }
    }
`;

export { doingStyle, doneStyle };
