import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import {
    colorTypeOptions,
    justifyContentOptions
} from '../../../shared/constants';
import { mainColor } from '../../Text/style/constants';
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

    ${props => props.hasBackground ? blockBackground[props.colorType] : null};

    li {
        display: flex;
        align-items: center;

        &:not(:first-of-type) {
            &::before {
                content: '';
                height: ${props => props.theme.space.sm};
                width: ${props => props.theme.space.sm};
                background-color: ${props =>
                    props.colorType === colorTypeOptions.reverse ?
                        props.theme.wab.white00 :
                        mainColor[props.colorPallet]
                    };
                border-radius: 50%;
                margin-right: ${props => props.theme.space.md};
                opacity: .3;
            }
        }

        &:not(:last-of-type) {
            padding-right: ${props => props.theme.space.md};
        }
    }
`;

export { ListHorizontalBase };