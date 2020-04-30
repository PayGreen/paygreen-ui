import styled from 'styled-components';
import { isClosedStyle, isOpenStyle, mainStyle } from './base';
import { TopbarBase } from '../../Topbar/style';

const MainBase = styled.header`
    ${TopbarBase}    
    ${mainStyle}
    
    ${props => props.isOpen ? isOpenStyle : isClosedStyle};
`;

export { MainBase };
