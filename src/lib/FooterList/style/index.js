import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';

const FooterListBase = styled.ul`
    ${responsiveSpaces('margin')};
    padding: 0;
    list-style-type: none;
    text-align: ${props => props.align};
    font-size: ${props => props.theme.font.size[props.textSize]};
    line-height: ${props => props.theme.font.lineHeight.md};
`;

export { FooterListBase };