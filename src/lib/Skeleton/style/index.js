import styled from 'styled-components';
import { skeletonTypeOptions, spaceDefault } from '../../../shared/constants';
import {
    responsiveMarginStyle,
    responsivePaddingStyle,
} from '../../../shared/spaces';
import { imageCardStyle } from './base';
import { CardBase } from '../../Card/style';
import { SkeletonItemBase } from '../../SkeletonItem/style';

const SkeletonBase = styled.div`
    position: relative;
    width: ${props => props.theme.blockWidth[props.blockWidth]};
    ${responsiveMarginStyle};

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
`;

const AbsoluteContent = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;

    ${SkeletonItemBase} {
        height: ${props =>
            props.blockWidth === spaceDefault
                ? props.theme.blockHeader.xl
                : props.theme.blockHeader[props.blockWidth]};
    }
`;

export { AbsoluteContent, SkeletonBase };
