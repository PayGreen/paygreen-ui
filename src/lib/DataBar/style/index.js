import styled from 'styled-components';
import { math } from 'polished';
import {
    zeroValueStyle,
    valueStyle,
    hasBackgroundStyle,
    childrenStyle,
} from './base';

const DataBarBase = styled.div`
    width: 100%;
`;

const Bar = styled.div`
    width: 100%;
    max-width: ${props => props.theme.dataBar.width[props.blockWidth]};
    height: ${props => props.theme.dataBar.height};
    display: flex;
    border-radius: ${props => math(props.theme.dataBar.height + '/2')};
    overflow: hidden;

    ${childrenStyle};
    ${props => (props.withBackground ? hasBackgroundStyle : null)};
`;

const BarSection = styled.div`
    ${props => (props.dataWidth !== 0 ? valueStyle : zeroValueStyle)};
    height: 100%;
`;

export { DataBarBase, BarSection, Bar };
