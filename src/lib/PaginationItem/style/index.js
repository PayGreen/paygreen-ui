import styled from 'styled-components';
import { activeStyle, notActiveStyle } from './base';

const PaginationItemBase = styled.button`
    box-sizing: border-box;
    padding: 0;
    margin : 0 ${props => props.theme.space.xs};
    width: ${props => props.theme.daButton.buttonHeight.sm};
    height: ${props => props.theme.daButton.buttonHeight.sm};
    border-radius: 50%;
    font-size: ${props => props.theme.daButton.font.lg};
    font-weight: bold;

    display : ${props => (props.hidden ? 'none' : 'inline-block')};
    ${props => (props.isActive ? activeStyle : notActiveStyle)};
`;

export { PaginationItemBase };
