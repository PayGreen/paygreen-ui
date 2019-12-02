import styled from 'styled-components';
import { MenuListBase } from '../../MenuList/style';

const MenuBase = styled.li`
    list-style-type: none;
    position: relative;

    @media (${props => props.theme.query.min.lg}) {
        ${MenuListBase} {
            margin-left: 50%;
            transform: translate(-50%, -100%);
            opacity: 0;
        }

        &:hover {
            ${MenuListBase} {
                transform: translate(-50%, 0);
                opacity: 1;
            }
        }
    }
`;

export { MenuBase };