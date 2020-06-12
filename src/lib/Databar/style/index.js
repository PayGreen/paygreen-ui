import styled from 'styled-components';
import { math } from 'polished';
import {
    zeroValueStyle,
    valueStyle,
    hasBackgroundStyle,
    monoDataStyle,
    multiDataStyle,
} from './base';

const DatabarBase = styled.div`
    width: 100%;
    max-width: ${props => props.theme.blockWidth[props.blockWidth]};
`;

const Bar = styled.div`
    width: 100%;
    height: ${props => props.theme.font.underline.space.xs};
    display: flex;
    border-radius: ${props => math(props.theme.font.underline.space.xs + '/2')};
    overflow: hidden;

    ${props => (props.barType === 'mono' ? monoDataStyle : multiDataStyle)};
    ${props => (props.withBackground ? hasBackgroundStyle : null)};
`;

const BarSection = styled.div`
    ${props => (props.dataWidth !== 0 ? valueStyle : zeroValueStyle)};
    height: 100%;
`;

export { DatabarBase, BarSection, Bar };
