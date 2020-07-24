import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import { colorTypeOptions } from '../../../shared/constants';
import { mainColor } from '../../Text/style/constants';

const HRBase = styled.div`
    ${responsiveSpaces('margin', 0, 1, 1, ['Lateral'])};
    margin-top: ${props => props.theme.space[props.marginTop]};
    margin-bottom: ${props => props.theme.space[props.marginBottom]};
    border: none;
    background: ${props =>
        props.colorType === colorTypeOptions.reverse
            ? props.theme.wab.white00
            : mainColor[props.colorPallet]};
    opacity: ${props => props.opacityValue / 100};
    height: ${props => props.theme.line};
`;

export { HRBase };
