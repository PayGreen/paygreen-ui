import styled from 'styled-components';
import { transparentize } from 'polished';
import { MenuHamburgerBase } from '../../MenuHamburger/style';

const HeaderBase = styled.header`
    position: relative;
    z-index: ${props => props.theme.zindex.header};
    height: ${props => props.theme.grid.header};
    padding: ${props => props.theme.space.sm};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid ${props => props.theme.line} ${props => props.theme.wab.white20};
    background-color: ${props => props.theme.wab.white00};
    box-shadow: ${props => props.theme.shadow.size.lg + ' ' + transparentize(
        props.theme.shadow.opacity.sm,
        props.theme.wab.black00
    )};

    @media (${props => props.theme.query.min.lg}) {
        ${MenuHamburgerBase} {
            display: none;
        }
    }
`;

export { HeaderBase };