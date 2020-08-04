import styled from 'styled-components';

const CalendarWeekdaysBase = styled.div`
    display: grid;
    grid-template-columns: repeat(7, auto);
    grid-gap: ${props => props.theme.line};
    justify-content: start;
    width: calc(
        (${props => props.theme.iconSize.lg} * 7) +
            (${props => props.theme.line} * 8)
    );
    height: auto;
    color: ${props => props.theme.wab.white00};
    background-color: ${props => props.theme.status[props.colorStatus].main};
    cursor: default;

    & div {
        display: flex;
        width: ${props => props.theme.iconSize.lg};
        height: ${props => props.theme.iconSize.lg};
        justify-content: center;
        align-items: center;
    }
`;

export default CalendarWeekdaysBase;
