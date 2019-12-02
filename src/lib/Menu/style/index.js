import styled from 'styled-components';
import { MenuListBase } from '../../MenuList/style';

const MenuBase = styled.li`
    list-style-type: none;
    position: relative;

    @media (${props => props.theme.query.min.lg}) {
        ${MenuListBase} {
            transform: translateX(-50%);
            margin-left: 50%;
        }
    }
`;

export { MenuBase };