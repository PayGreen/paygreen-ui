import { css } from 'styled-components';

const doingStyle = css`
    .icon {
        &.active {
            display: block;
        }
    }

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

export { doingStyle };
