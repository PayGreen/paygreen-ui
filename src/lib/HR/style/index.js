import styled from 'styled-components';
import { directionalProperty } from 'polished';
import { responsiveSpaces } from '../../../shared/spaces';
import {
    colorPalletOptions,
    colorTypeOptions,
} from '../../../shared/constants';

const HRBase = styled.div`
    ${responsiveSpaces('margin')};

    ${props =>
        directionalProperty(
            'margin',
            props.theme.space[props.marginTop],
            responsiveSpaces('margin'), // OR auto
            props.theme.space[props.marginBottom],
            responsiveSpaces('margin'), // OR auto
        )};

    border: none;
    background: ${props =>
        props.colorType === colorTypeOptions.reverse
            ? props.theme.wab.white00
            : props.colorPallet === colorPalletOptions.theme
            ? props.theme.color[props.colorTheme].main
            : props.colorPallet === colorPalletOptions.status
            ? props.theme.color.status[props.colorStatus].main
            : props.colorPallet === colorPalletOptions.wab
            ? props.theme.wab[props.colorWab]
            : props.theme.wab.black00};
    opacity: ${props => props.opacity / 100}
    height: ${props => props.theme.line};
`;

export { HRBase };
