import styled from 'styled-components';
import { doingStyle } from './base';

const StepNavbarItemBase = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: ${props => props.theme.space.xs + ' ' + props.theme.space.sm};

    @media ${props => props.theme.screen.max.md} {
        height: ${props => props.theme.space.md};
    }

    .icon {
        &.active,
        &.done {
            display: none;
        }
    }

    span {
        display: flex;
        align-items: center;
        color: ${props => props.theme.wab.grey40};
        font-size: ${props => props.theme.font.size.xs};
        opacity: 0;
        transition: all ${props => props.theme.transition.xs} linear;

        @media ${props => props.theme.screen.max.md} {
            display: none;
        }
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        left: 0;
        z-index: ${props => props.theme.zindex.background};
        height: ${props => props.theme.navbar};
        transition: all ${props => props.theme.transition.xs} linear;
    }

    &::before {
        width: 100%;
        background-color: ${props => props.theme.wab.grey20};
    }

    // done style (only done steps can be clicked)
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

    &:hover,
    button:active &,
    button:focus &,
    a:active &,
    a:focus & {
        span {
            @media ${props => props.theme.screen.min.md} {
                opacity: 1;
            }
        }

        &::before {
            @media ${props => props.theme.screen.min.md} {
                height: 100%;
            }
        }
    }

    ${props => props.isDoing ? doingStyle : null};
`;

export { StepNavbarItemBase };
