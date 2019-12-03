import { css } from 'styled-components';
import { transparentize } from 'polished';
import { MenuBase } from '../../Menu/style';

const menuBlock = css`
    z-index: ${props => props.theme.zindex.header};
    box-sizing: border-box;
    margin: 0;
    transition: all ${props => props.theme.transition.md};

    @media (${props => props.theme.query.max.lg}) {
        position: fixed;
        overflow: auto;
        left: 0;
        top: ${props => props.theme.grid.header};
        width: 100%;
        background-color: ${props => props.theme.wab.white00};
        
        &:before {
            content: '';
            position: fixed;
            width: 100%;
            height: 20px;
            left: 0;
            margin-top: -${props => props.theme.space.sm};
            background-image: linear-gradient(to bottom,
                ${props => transparentize(
                    props.theme.shadow.opacity.xs,
                    props.theme.wab.black00
                )},
                transparent
            );
        }
    }

    @media (${props => props.theme.query.min.lg}) {
        position: relative;
        display: flex;
        padding: 0;

        ${MenuBase} {
            margin-left: ${props => props.theme.space.md};
            margin-right: ${props => props.theme.space.md};

            &:first-of-type {
                margin-left: 0;
            }

            &:last-of-type {
                margin-right: 0;
            }
        }
    }
`;

const closedStyle = css`
    transform: translateX(-100%);
`;

export {
    menuBlock,
    closedStyle
};