import styled from 'styled-components';
import { skeletonTypeOptions } from '../../../shared/constants';
import {
    responsiveMarginStyle,
    responsivePaddingStyle,
} from '../../../shared/spaces';
import { imageCardStyle } from './base';
import { CardBase } from '../../Card/style';

const SkeletonBase = styled.div`
    position: relative;
    width: ${props => props.theme.blockWidth[props.blockWidth]};

    ${CardBase} {
        overflow: hidden;
        max-width: 100%;
        min-height: 100%;
        filter: grayscale(1);
        ${responsivePaddingStyle};

        ${props =>
            props.skeletonType === skeletonTypeOptions.imageCard
                ? imageCardStyle
                : null};
    }

    ${responsiveMarginStyle};
`;

export { SkeletonBase };
