import { css } from 'styled-components';
import { MenuBase } from '../../Menu/style';

const menuBlock = css`
    z-index: ${props => props.theme.zindex.menu};
    box-sizing: border-box;
    margin: 0;

    @media (${props => props.theme.query.max.lg}) {
        position: fixed;
        overflow-y: auto;
        left: 0;
        top: ${props => props.theme.grid.header};
        width: 100%;
        background-color: ${props => props.theme.wab.white00};
        transition: all ${props => props.theme.transition.sm};
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