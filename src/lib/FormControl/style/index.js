import styled from 'styled-components';
import { formStatusDefault } from '../../../shared/constants';
import { statusStyle } from './base';
import { MessageBase } from '../../Message/style';
import { DaLabelBase } from '../../DaLabel/style';
import { DaSelectBase } from '../../DaSelect/style';
import { DaInputBase } from '../../DaInput/style';
import { DaHelpBase } from '../../DaHelp/style';
import { CheckboxGroupBase } from '../../CheckboxGroup/style';
import { RadioGroupBase } from '../../RadioGroup/style';
import { DaTextareaBase } from '../../DaTextarea/style';

const dynamicArea = props => (props.hasHelpButton ? 'help' : 'field');

const FormControlBase = styled.div`
    display: grid;
    grid-template-areas: 'label .' 'field ${dynamicArea}' 'message message';
    grid-template-columns: auto 1fr;

    ${DaLabelBase} {
        grid-area: label;
    }

    ${DaSelectBase}, ${DaInputBase}, ${CheckboxGroupBase}, ${RadioGroupBase}, ${DaTextareaBase} {
        grid-area: field;
        margin-bottom : ${props => props.theme.space.xs};
    }

    ${DaHelpBase} {
        grid-area: help;
    }

    ${MessageBase} {
        display: ${props =>
            props.colorStatus !== formStatusDefault ? 'grid' : 'none'};
        grid-area: message;
    }

    ${props => (props.colorStatus !== formStatusDefault ? statusStyle : null)};

`;

export { FormControlBase };
