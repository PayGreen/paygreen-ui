import styled from 'styled-components';
import CalendarCellBase from '../../CalendarCell/style';

const CalendarGridBase = styled.div`
    display: grid;
    grid-template-columns: repeat(7, auto);
    gap: ${props => props.theme.line};

    padding: ${props => props.theme.line};

    ${CalendarCellBase}:first-of-type {
        grid-column: ${props => props.dayOffset};
    }
`;

export default CalendarGridBase;
