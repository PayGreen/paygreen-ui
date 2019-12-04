import styled from 'styled-components';
import { transparentize, math } from 'polished';
import { menuBlock } from '../../MenuPrimary/style/base';
import { closedStyle } from './base';
import { MenuBase } from '../../Menu/style';
import { MenuCloseBase } from '../../MenuClose/style';

const MenuSecondaryBase = styled.ul`
    ${menuBlock};

    @media (${props => props.theme.query.max.lg}) {
        max-height: calc(100vh - ${props => props.theme.grid.header});
        padding: ${props => props.theme.space.sm} 0;
        box-shadow: 0 3px 20px ${props => transparentize(
            props.theme.shadow.opacity.sm,
            props.theme.wab.black00
        )};
        
        ${props => props.isOpen ? null : closedStyle};

        ${MenuCloseBase} {
            margin: ${props => props.theme.space.md} auto -${props => props.theme.space.sm} auto;
        }
    }

    @media (${props => props.theme.query.min.lg}) {
        ${MenuBase} {
            position: relative;
            display: flex;
            align-items: center;
            padding: 0;

            &:before,
            &:after {
                content: '';
                position: absolute;
                transform: rotate(28deg);
                width: ${props => props.theme.line};
                height: ${props => props.theme.space.lg};
                background-color: ${props => props.theme.wab.grey10};
            }

            &:before {
                margin-left: -${props => props.theme.space.md};
            }

            &:after {
                margin-right: -${props => math(props.theme.space.md + ' - ' + props.theme.line)};
                right: 0;
            }

            &:first-of-type {
                &:before {
                    display: none;
                }
            }

            &:last-of-type {
                &:after {
                    display: none;
                }
            }
        }

        ${MenuCloseBase} {
            display: none;
        }
    }
`;

export { MenuSecondaryBase };