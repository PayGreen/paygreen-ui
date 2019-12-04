import styled from 'styled-components';
import { imageStyle } from './base';

const BannerBase = styled.div`
    ${props => props.image ? imageStyle : null};

    height: 400px;
`;

export { BannerBase };