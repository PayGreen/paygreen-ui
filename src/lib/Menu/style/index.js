import styled from 'styled-components';
import { MenuListBase } from '../../MenuList/style';

const MenuBase = styled.li`
    list-style-type: none;
    position: relative;

    a {
        /* Display hover style after click on mobile */
        display: block;
    }

    @media (${props => props.theme.query.min.lg}) {
        ${MenuListBase} {
            margin-left: 50%;
            transform-origin: top center;
            transform: translateX(-50%) scale(0);
            opacity: 0;
        }

        &:hover {
            ${MenuListBase} {
                transform: translateX(-50%) scale(1);
                opacity: 1;
            }
        }
    }
`;

export { MenuBase };