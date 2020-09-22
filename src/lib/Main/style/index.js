import styled from 'styled-components';
import { transparentize } from 'polished';
import { TopbarBase } from '../../Topbar/style';
import { isOpenStyle } from './base';
import { BoxBase } from '../../Box/style';

const MainBase = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'topbar' 'box';
    overflow-y: hidden;
    background-color: ${props => props.theme.wab.white00};
    box-shadow: 0 0 40px
        ${props =>
            transparentize(
                props.theme.shadow.opacity.md,
                props.theme.wab.black00,
            )};
    transition: all ${props => props.theme.transition.sm};

    & > ${TopbarBase} {
        grid-area: topbar;
    }

    & > ${BoxBase} {
        grid-area: box;
        overflow-y: auto;
    }

    ${props => (props.isOpen ? isOpenStyle : null)};
`;

export { MainBase };
