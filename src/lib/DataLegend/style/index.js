import styled from 'styled-components';
import { underline } from '../../Title/style/base';
import {
    htmlTagStyle,
    uppercaseStyle,
    blockBackground,
    defaultStyle,
} from './base';

const DataLegendBase = styled.p`
    ${defaultStyle}
    ${props => htmlTagStyle[props.htmlTag]};
    ${props => (props.hasBackground ? blockBackground[props.colorType] : null)};
    ${props => (props.hasUppercase ? uppercaseStyle : null)};
    ${props => (props.hasUnderline ? underline : null)};
`;

export { DataLegendBase };
