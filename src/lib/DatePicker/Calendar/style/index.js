import styled from 'styled-components';
import { transparentize } from 'polished';

const CalendarBase = styled.div`
    display: inline-block;

    border-radius: ${props => props.theme.radius.lg};
    box-shadow: ${props =>
        props.theme.shadow.size.md +
        ' ' +
        transparentize(props.theme.shadow.opacity.md, props.theme.wab.black00)};

    background-color: ${props => props.theme.wab.white00};
`;

export default CalendarBase;
