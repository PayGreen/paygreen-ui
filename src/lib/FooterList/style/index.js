import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';

const FooterListBase = styled.ul`
    ${responsiveSpaces('margin')};
    padding: 0;
    list-style-type: none;
    text-align: ${props => props.align};
    font-size: ${props => props.theme.font.size[props.textSize]};
    line-height: ${props => props.theme.font.lineHeight.md};

    & > li {
        @media (${props => props.theme.query.max.lg}) {
            margin-top: ${props => props.theme.space.sm};
            margin-bottom: ${props => props.theme.space.sm};
        }
    }
`;

export { FooterListBase };
