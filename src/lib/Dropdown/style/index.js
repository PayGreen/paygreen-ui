import styled from 'styled-components';
import { PopinBase } from '../../Popin/style';

const DropdownBase = styled.div`
    position: relative;
    display: inline-block;

    ${PopinBase} {
        min-width: 100%;
    }
`;

const InvisibleCloseButton = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${props => props.theme.zindex.popin};
`;

export { DropdownBase, InvisibleCloseButton };
