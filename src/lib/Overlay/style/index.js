import styled from 'styled-components';
import { color } from './base';

const OverlayBase = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    ${props => color[props.gradient]};

    z-index: ${props => props.zindex};
    opacity: ${props => props.opacityValue / 100};
`;

export { OverlayBase };
