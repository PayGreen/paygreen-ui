import styled from 'styled-components';

const CalendarWeekdaysBase = styled.div`
    display: grid;
    grid-template-columns: repeat(7, auto);
    gap: ${props => props.theme.line};
    color: ${props => props.theme.status[props.colorStatus].main};
    background-color: ${props => props.theme.status[props.colorStatus].light};
    user-select: none;
    text-transform: uppercase;

    & > div {
        display: flex;
        width: ${props => props.theme.icon.size.lg};
        height: ${props => props.theme.icon.size.lg};
        justify-content: center;
        align-items: center;
    }
`;

export default CalendarWeekdaysBase;
