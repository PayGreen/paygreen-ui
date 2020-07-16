import styled from 'styled-components';
import { PopinBase } from '../../Popin/style';

const DropdownBase = styled.div`
    position: relative;
    display: inline-block;

    ${PopinBase} {
        min-width: 100%;
    }

    .invisible-close {
        position: absolute;
        width: 100vw;
        height: 100vh;
    }
`;

export { DropdownBase };
