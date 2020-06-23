import styled from 'styled-components';
import { math } from 'polished';
import { mainColor } from '../../DataBar/style/constants';

const DataLegendBase = styled.div`
    text-align: left;
    font-size: ${props => props.theme.font.size[props.textSize]};
    color: ${props => props.theme.wab.grey60};

    span {
        display: inline-block;
    }

    .value {
        font-size: ${props =>
            math(props.theme.font.size[props.textSize] + '* 1.7')};
        color: ${props =>
            props.currentValue > 0
                ? mainColor[props.colorPallet]
                : props.theme.wab.grey30};
    }

    .unit {
        margin: 0 0.2em;
    }
`;

export { DataLegendBase };
