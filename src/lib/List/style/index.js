import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import { dashedStyle } from './base';

const ListBase = styled.ul`
    list-style-type: none;
    padding: .1px 0;
    ${responsiveSpaces('margin')};

    @media ${props => props.theme.screen.max.lg} {
        .dashed {
            display: none;
        }
    }

    @media ${props => props.theme.screen.min.lg} {
        ${props => props.hasDashed ? dashedStyle : null};
    }
`;

export { ListBase };