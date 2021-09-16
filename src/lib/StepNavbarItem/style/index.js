import styled from 'styled-components';
import { doingStyle, doneStyle } from './base';

const StepNavbarItemBase = styled.div`
    position: relative;
    cursor: not-allowed;
    display: flex;
    align-items: center;
    padding: ${props => props.theme.space.xs + ' ' + props.theme.space.sm};

    @media ${props => props.theme.screen.max.md} {
        height: ${props => props.theme.space.md};
    }

    button &,
    a & {
        cursor: pointer;
    }

    .icon {
        &.done {
            display: none;
        }
    }

    span {
        display: flex;
        align-items: center;
        color: ${props => props.theme.wab.grey60};
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
    
    ${props => props.isDoing ? doingStyle : doneStyle}; // all not doing items are not done, but only not doing items inside <a> and <button> get doneStyle CSS

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
`;

export { StepNavbarItemBase };
