import styled from 'styled-components';
import { color } from './constants';

const OverlayBase = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    background-image: linear-gradient(
        to right,
        ${props => color.first[props.gradient]},
        ${props => color.second[props.gradient]}
    );

    zindex: ${props => props.zindex};
    opacity: ${props => props.opacity / 100};
`;

export { OverlayBase };
