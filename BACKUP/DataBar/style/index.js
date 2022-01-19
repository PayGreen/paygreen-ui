import styled from 'styled-components';
import { zeroValueStyle, valueStyle, hasBackgroundStyle } from './base';
import { barRadius } from './constants';

const Bar = styled.div`
    max-width: ${props => props.theme.dataBar.width[props.blockWidth]};
    height: ${props => props.theme.dataBar.height};
    display: flex;
    border-radius: ${barRadius};
    overflow: hidden;

    ${props => (props.hasBackground ? hasBackgroundStyle : null)};
`;

const BarSection = styled.div`
    margin-right: ${props => props.theme.line};
    width: ${props => props.dataWidth + '%'};
    min-width: ${props => props.theme.dataBar.height};

    &:last-of-type {
        margin-right: 0;
        border-top-right-radius: ${barRadius};
        border-bottom-right-radius: ${barRadius};
    }

    ${props => (props.dataWidth > 0 ? valueStyle : zeroValueStyle)};
`;

export { BarSection, Bar };
