import styled from 'styled-components';
import { selected, enabled, disabled } from './base';

const CalendarCellBase = styled.div`
    display: flex;
    width: ${props => props.theme.icon.size.lg};
    height: ${props => props.theme.icon.size.lg};
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    ${props => (props.isDisabled ? disabled : enabled)};
    ${props => !props.isDisabled && props.isSelected && selected};
`;

export default CalendarCellBase;