import styled from 'styled-components';
import { mainColor } from '../../DataBar/style/constants';
import { minimizeFont } from '../../Text/style/constants';

const DataLegendBase = styled.div`
    text-align: left;
    color: ${props => props.theme.wab.grey60};
    font-size: ${props => props.theme.font.size[props.textSize]};

    @media (${props => props.theme.query.max.md}) {
        font-size: ${props =>
            props.theme.font.size[minimizeFont[props.textSize]]};
    }

    .value {
        font-size: 1.7em;
        color: ${props =>
            props.isDisabled
                ? props.theme.wab.grey30
                : mainColor[props.colorPallet]};
    }

    .unit {
        margin: 0 0.2em;
    }
`;

export { DataLegendBase };
