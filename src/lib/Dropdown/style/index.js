import styled from 'styled-components';
import { PopinBase } from '../../Popin/style';

const DropdownBase = styled.div`
    position: relative;
    display: inline-block;

    ${PopinBase}{
        min-width:100%;
    }
`;

export { DropdownBase };
