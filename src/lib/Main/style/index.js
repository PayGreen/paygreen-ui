import styled from 'styled-components';
import { isClosedStyle, isOpenStyle, mainStyle } from './base';
import { TopbarBase } from '../../Topbar/style';

const Box = styled.div`
    overflow-y: scroll;
`;

const MainBase = styled.div`
    ${mainStyle}
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'topbar' 'box';
    overflow-y: hidden;

    ${TopbarBase} {
        grid-area: topbar;
    }

    ${Box} {
        grid-area: box;
    }

    ${props => (props.isOpen ? isOpenStyle : isClosedStyle)};
`;

export { Box, MainBase };
