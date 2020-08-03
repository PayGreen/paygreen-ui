import styled from 'styled-components';

const CalendarGridBase = styled.div`
    display: grid;

    grid-template-columns: repeat(7, auto);
    grid-gap: ${props => props.theme.line};
    justify-content: start;
    
    width: calc(
        (${props => props.theme.iconSize.lg} * 7) +
            (${props => props.theme.line} * 8)
    );
    height: auto;
    padding: ${props => props.theme.line};

    background-color: ${props => props.theme.wab.white00};

    div:first-child {
        grid-column: ${props => props.offset};
    }
`;

export default CalendarGridBase;
