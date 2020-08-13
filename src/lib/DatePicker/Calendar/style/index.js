import styled from 'styled-components';
import { transparentize } from 'polished';

const CalendarBase = styled.div`
    border-radius: ${props => props.theme.radius.lg};
    box-sizing: border-box;
    box-shadow: ${props =>
        props.theme.shadow.size.md +
        ' ' +
        transparentize(
            props.theme.shadow.opacity.md,
            props.theme.wab.black00,
        )};

    width: calc(
        (${props => props.theme.icon.size.lg} * 7) +
            (${props => props.theme.line} * 8)
    );
`;

export default CalendarBase;
