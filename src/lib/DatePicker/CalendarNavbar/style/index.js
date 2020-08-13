import styled from 'styled-components';

const CalendarNavbarBase = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: calc(
        (${props => props.theme.icon.size.lg} * 7) +
            (${props => props.theme.line} * 8)
    );
    height: ${props => props.theme.icon.size.xl};
    padding: ${props => props.theme.line};

    color: ${props => props.theme.status[props.colorStatus].main};
    background-color: ${props => props.theme.status[props.colorStatus].light};

    border-top-left-radius: ${props => props.theme.radius.lg};
    border-top-right-radius: ${props => props.theme.radius.lg};

    & > .arrow-button {
        cursor: pointer;
        
        padding-left: ${props => props.theme.space.sm};
        padding-right: ${props => props.theme.space.sm};
    }

    & > span {
        font-weight: bold;
    }
`;

export default CalendarNavbarBase;
