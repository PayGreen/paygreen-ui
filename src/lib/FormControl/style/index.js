import styled from 'styled-components';
import {
    formStatusDefault
} from '../../../shared/constants';
import { statusStyle } from './base';
import { MessageBase } from '../../Message/style';
import { DaLabelBase } from '../../DaLabel/style';
import { DaSelectBase } from '../../DaSelect/style';
import { DaInputBase } from '../../DaInput/style';
import { DaHelpBase } from '../../DaHelp/style';

const fieldGroup = styled.div`
    display: grid;
    grid-template-areas: "label ." "field help";
    grid-template-columns:  fit-content(100%) fit-content(100%);

    ${DaLabelBase} {
        grid-area: label;
    }

    ${DaSelectBase}, ${DaInputBase}  {
        grid-area: field;
    }

    ${DaHelpBase}  {
        grid-area: help;
    }

`;

const FormControlBase = styled.div`
    display: grid;
    grid-template-areas: 'right fieldGroup left' '. top .';
    grid-template-columns:  fit-content(100%) fit-content(100%) fit-content(100%);

    ${fieldGroup}{
        grid-area: fieldGroup;
    }

    ${MessageBase} {
        display: none;
        grid-area: ${props => props.messageStyle};
    }

    ${props => (props.colorStatus !== formStatusDefault ? statusStyle : null)};
`;

export { FormControlBase };
