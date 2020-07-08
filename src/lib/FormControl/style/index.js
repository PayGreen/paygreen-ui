import styled from 'styled-components';
import { formStatusDefault } from '../../../shared/constants';
import { gridStyle, statusStyle } from './base';
import { DaSelectBase } from '../../DaSelect/style';
import { DaInputBase } from '../../DaInput/style';
import { CheckboxGroupBase } from '../../CheckboxGroup/style';
import { RadioGroupBase } from '../../RadioGroup/style';
import { DaTextareaBase } from '../../DaTextarea/style';

const FormControlBase = styled.div`
    ${props => (props.colorStatus !== formStatusDefault ? statusStyle : null)};
    ${props => (props.hasHelpButton ? gridStyle : null)};

    ${DaInputBase},
    ${DaSelectBase},
    ${DaTextareaBase},
    ${CheckboxGroupBase},
    ${RadioGroupBase} {
        margin-bottom: ${props => props.theme.space.xs};
    }
`;

export { FormControlBase };
