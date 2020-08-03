import styled from 'styled-components';

const CalendarNavbarBase = styled.div`
    display: flex;
    justify-content: space-between;

    padding: ${props => props.theme.space.sm} 0;

    color: ${props => props.theme.status[props.colorStatus].main};
    background-color: ${props => props.theme.status[props.colorStatus].light};

    border-top-left-radius: ${props => props.theme.radius.lg};
    border-top-right-radius: ${props => props.theme.radius.lg};

    font-weight: bold;
    user-select: none;
`;

export default CalendarNavbarBase;
