import styled from 'styled-components';
import { math } from 'polished';
import { horizontalStyle } from './base';
import { mainColor } from './constants';

const DataLegendBase = styled.div`
    text-align: ${props => props.align};

    & > :first-child {
        line-height: normal;
        font-size: ${props =>
            math(props.theme.font.size[props.textSize] + '* 1.7')};
        color: ${props => mainColor[props.colorPallet]};

        span {
            font-size: ${props => props.theme.font.size[props.textSize]};
            color: ${props => props.theme.wab.grey60};
            display: inline;
            margin-left: ${props => props.theme.space.xs};
        }
    }

    & > :not(:first-child),
    strong {
        text-align: ${props => props.align};
        font-size: ${props => props.theme.font.size[props.textSize]};

        & :last-child {
            font-weight: bold;
        }
    }

    ${props => (props.flexDirection === 'row' ? horizontalStyle : null)};
`;

export { DataLegendBase };
