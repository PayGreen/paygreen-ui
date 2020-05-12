import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import {
    colorPalletOptions,
    justifyContentOptions,
} from '../../../shared/constants';
import { DotBase } from '../../Dot/style';
import { blockBackground } from '../../Text/style/base';

const ListHorizontalBase = styled.ul`
    ${responsiveSpaces('margin')};
    ${responsiveSpaces('padding')};
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => justifyContentOptions[props.align]};
    font-size: ${props => props.theme.font.size.xxs};
    font-weight: ${props => props.theme.font.weight.bold};
    line-height: ${props => props.theme.font.lineHeight.md};

    ${props => (props.hasBackground ? blockBackground[props.colorType] : null)};

    li {
        display: flex;
        align-items: center;

        ${DotBase} {
            opacity: ${props =>
                props.colorPallet === colorPalletOptions.wab ? 0.3 : 1};
        }
    }
`;

export { ListHorizontalBase };
