import styled from 'styled-components';
import { selected, enabled, disabled } from './base';

const CalendarCellBase = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${props => props.theme.icon.size.lg};
    height: ${props => props.theme.icon.size.lg};

    border-radius: 50%;
    ${props =>
        props.isDisabled ? disabled : props.isSelected ? selected : enabled};
`;

export default CalendarCellBase;
