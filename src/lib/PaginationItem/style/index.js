import styled from 'styled-components';
import { math } from 'polished';
import { activeStyle, notActiveStyle } from './base';

const PaginationItemBase = styled.button`
    box-sizing: border-box;
    margin: 0 ${props => props.theme.space.xs};
    padding: 0 ${props => props.theme.space.xs};
    min-width: ${props => props.theme.daButton.buttonHeight.sm};
    height: ${props => props.theme.daButton.buttonHeight.sm};
    line-height: ${props => props.theme.daButton.buttonHeight.sm};
    border-radius: ${props =>
        math(props.theme.daButton.buttonHeight.sm + '/2')};
    font-size: ${props => props.theme.daButton.font.lg};
    font-weight: bold;

    ${props => (props.isActive ? activeStyle : notActiveStyle)};
`;

export { PaginationItemBase };
