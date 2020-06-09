import styled from 'styled-components';
import { directionalProperty } from 'polished';
import { responsiveSpaces } from '../../../shared/spaces';
import { colorTypeOptions } from '../../../shared/constants';
import { color } from './constants';

const HRBase = styled.div`
    ${responsiveSpaces('margin')};

    ${props =>
        directionalProperty(
            'margin',
            props.theme.space[props.marginTop],
            responsiveSpaces('margin'),
            props.theme.space[props.marginBottom],
            responsiveSpaces('margin'),
        )};

    border: none;
    background: ${props =>
        props.colorType === colorTypeOptions.reverse
            ? props.theme.wab.white00
            : color[props.colorPallet]};
    opacity: ${props => props.opacityValue / 100};
    height: ${props => props.theme.line};
`;

export { HRBase };
