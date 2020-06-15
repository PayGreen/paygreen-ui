import styled from 'styled-components';
import { math } from 'polished';
import { horizontalStyle } from './base';
import { mainColor } from './constants';

const DataLegendBase = styled.div`
    & > :first-child {
        font-size: ${props =>
            math(props.theme.font.size[props.textSize] + '* 1.4')};
        color: ${props => mainColor[props.colorPallet]};

        span {
            color: ${props => props.theme.wab.grey60};
            display: inline;
            margin-left: ${props => props.theme.space.xs};
        }
    }

    p {
        color: ${props => props.theme.wab.grey60};
    }

    & > :last-child {
        font-weight:bold;
    }

    ${props => (props.flexDirection === 'row' ? horizontalStyle : null)};
`;

export { DataLegendBase };
