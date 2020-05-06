import styled from 'styled-components';
import { transparentize } from 'polished';
import { TopbarBase } from '../../Topbar/style';
import { isOpenStyle } from './base';

const Box = styled.div`
    overflow-y: scroll;
`;

const MainBase = styled.div`
    position: relative;
    z-index: ${props => props.theme.zindex.header};
    height: 100vh;
    background-color: ${props => props.theme.wab.white00};
    box-shadow: ${props =>
        props.theme.shadow.size.lg +
        ' ' +
        transparentize(props.theme.shadow.opacity.lg, props.theme.wab.black00)};
    transition: all ${props => props.theme.transition.sm};
    width: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'topbar' 'box';
    overflow-y: hidden;

    & > ${TopbarBase} {
        grid-area: topbar;
    }

    & > ${Box} {
        grid-area: box;
    }

    ${props => (props.isOpen ? isOpenStyle : null)};
`;

export { Box, MainBase };
