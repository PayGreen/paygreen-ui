import styled from 'styled-components';
import { DaInputBase } from '../../DaInput/style';
import { PopinBase } from '../../Popin/style';

const DatePickerBase = styled.div`
    ${DaInputBase} {
        max-width: ${props => props.theme.form.inputWidth.xxs};
    }

    ${PopinBase} {
        width: auto;
        font-size: ${props => props.theme.font.size.sm};
    }
`;

export { DatePickerBase };
