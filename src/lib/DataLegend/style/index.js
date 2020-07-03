import styled from 'styled-components';
import { math } from 'polished';
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

    span {
        display: inline-block;
    }

    .value {
        font-size: ${props =>
            math(props.theme.font.size[props.textSize] + '* 1.7')};

        @media (${props => props.theme.query.max.md}) {
            font-size: ${props =>
                math(
                    props.theme.font.size[minimizeFont[props.textSize]] +
                        '* 1.7',
                )};
        }

        color: ${props =>
            props.value > 0
                ? mainColor[props.colorPallet]
                : props.theme.wab.grey30};
    }

    .unit {
        margin: 0 0.2em;
    }
`;

export { DataLegendBase };
