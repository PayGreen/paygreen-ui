import styled from 'styled-components';
import { MenuListBase } from '../../MenuList/style';

const SidebarMenuBase = styled.li`
    list-style-type: none;
    position: relative;

    a {
        /* Display hover style after click on mobile */
        display: block;
    }

    @media (${props => props.theme.query.min.lg}) {
        ${MenuListBase} {
            margin-left: 50%;
            transform: translateX(-50%) scale(0);
            opacity: 0;
            transition-property: opacity, transform;
            transition-duration: ${props => props.theme.transition.xs}, 0s;
            transition-delay: 0s, ${props => props.theme.transition.xs};
        }

        &:hover {
            ${MenuListBase} {
                transform: translateX(-50%) scale(1);
                opacity: 1;
                transition-delay: ${props => props.theme.transition.xs}, 0s;
            }
        }
    }
`;

export { SidebarMenuBase };