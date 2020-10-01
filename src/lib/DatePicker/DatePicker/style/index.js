import styled from 'styled-components';
import { PopinBase } from '../../../Popin/style';

const DatePickerBase = styled.div`
    ${PopinBase} {
        width: auto;
        font-size: ${props => props.theme.font.size.sm};
    }
`;

export { DatePickerBase };
