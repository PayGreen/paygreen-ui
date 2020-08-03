import styled from 'styled-components';
import { selected, enabled, disabled } from './base';

const CalendarCellBase = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${props => props.theme.icon.size.lg};
    height: ${props => props.theme.icon.size.lg};

    border-radius: 50%;
    color: ${props => props.theme.wab.grey60};
    ${props =>
        props.isDisabled ? disabled : props.isSelected ? selected : enabled};

    transition: all ${props => props.theme.transition.xs}
`;

export default CalendarCellBase;
