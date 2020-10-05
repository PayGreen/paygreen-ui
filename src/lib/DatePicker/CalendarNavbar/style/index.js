import styled from 'styled-components';

const CalendarNavbarBase = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${props => props.theme.space.sm} 0;
    border-top-left-radius: ${props => props.theme.radius.lg};
    border-top-right-radius: ${props => props.theme.radius.lg};

    color: ${props => props.theme.status[props.colorStatus].main};
    background-color: ${props => props.theme.status[props.colorStatus].light};
    text-transform: capitalize;
    font-weight: ${props => props.theme.font.weight.bold};

    user-select: none;
`;

export default CalendarNavbarBase;
