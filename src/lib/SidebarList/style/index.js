import styled from 'styled-components';

const SidebarListBase = styled.ul`
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    @media (${props => props.theme.query.min.lg}) {
        position: absolute;
        width: ${props => props.theme.blockWidth.sm};

        &::before {
            content: '';
            position: absolute;
            top: -${props => props.theme.iconSize.md};
            left: 50%;
            transform: translateX(-50%);
            border-right: solid ${props => props.theme.iconSize.md} transparent;
            border-bottom: solid ${props => props.theme.iconSize.md} ${props => props.theme.wab.white00};
            border-left: solid ${props => props.theme.iconSize.md} transparent;
        }

        &::after {
            content: '';
            position: absolute;
            top: -${props => props.theme.iconSize.lg};
            left: 0;
            height: ${props => props.theme.iconSize.lg};
            width: 100%;
        }
    }

    li {
        list-style-type: none;
        margin: ${props => props.theme.line} 0;
        padding: 0;
    }
`;

export { SidebarListBase };