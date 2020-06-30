import styled from 'styled-components';
import { formStatusDefault } from '../../../shared/constants';
import { messageStyle, statusStyle } from './base';
import { MessageBase } from '../../Message/style';
import { DaLabelBase } from '../../DaLabel/style';
import { DaSelectBase } from '../../DaSelect/style';
import { DaInputBase } from '../../DaInput/style';
import { DaHelpBase } from '../../DaHelp/style';
import { DaButtonBase } from '../../DaButton/style';

const FieldGroup = styled.div`
    display: grid;
    grid-template-areas: 'label .' 'field help';

    ${DaLabelBase} {
        grid-area: label;
    }

    ${DaSelectBase}, ${DaInputBase}, ${DaButtonBase} {
        grid-area: field;
    }

    ${DaHelpBase} {
        grid-area: help;
    }

    ${props => (props.colorStatus !== formStatusDefault ? statusStyle : null)};
`;

const FormControlBase = styled.div`
    display: grid;
    grid-template-areas: 'right fieldGroup left' '. top .';
    grid-template-columns: fit-content(100%) auto fit-content(100%);
    align-items: end ;
    
    ${FieldGroup} {
        grid-area: fieldGroup;
    }

    ${MessageBase} {
        display: ${props =>
            props.colorStatus !== formStatusDefault ? 'grid' : 'none'};
        grid-area: ${props => props.messageStyle};
    }
`;

export { FieldGroup, FormControlBase };
