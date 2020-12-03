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
    ${responsiveMarginStyle};

    ${CardBase} {
        ${responsivePaddingStyle};
        filter: grayscale(1);

        ${props =>
            props.skeletonType === skeletonTypeOptions.imageCard
                ? imageCardStyle
                : null};
    }
`;

const AbsoluteContent = styled.div`
    position: absolute;
    overflow: hidden;
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
