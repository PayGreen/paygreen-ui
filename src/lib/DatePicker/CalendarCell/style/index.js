import styled from 'styled-components';
import { selected, hover, disabled } from './base';

const CalendarCellBase = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${props => props.theme.icon.size.lg};
    height: ${props => props.theme.icon.size.lg};

    border-radius: 50%;
    color: ${props => props.theme.wab.grey60};
    transition: all ${props => props.theme.transition.xs};
    ${props =>
        props.isDisabled ? disabled : props.isSelected ? selected : hover};
`;

export default CalendarCellBase;
