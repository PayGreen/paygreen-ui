import React from 'react';
import PropTypes from 'prop-types';
import {
    greyOptions,
    radiusOptions,
    skeletonItemTypeOptions,
    skeletonItemTypeDefault,
    spaceOptions,
    spaceDefault,
    imageSizeOptions,
} from '../../shared/constants';
import { SkeletonItemBase } from './style';

const SkeletonItem = ({ children, margin, ...rest }) => {
    ['Top', 'Bottom', 'Left', 'Right'].forEach(direction => {
        let marginDirection = 'margin' + direction;

        if (!rest[marginDirection]) {
            rest[marginDirection] = margin;
        }
    });

    return (
        <SkeletonItemBase hasChildren={!!children} {...rest}>
            {children}
        </SkeletonItemBase>
    );
};

SkeletonItem.propTypes = {
    skeletonItemType: PropTypes.oneOf(Object.values(skeletonItemTypeOptions)),
    isLoading: PropTypes.bool,
    blockHeight: PropTypes.oneOf(Object.values(imageSizeOptions)),
    blockWidth: PropTypes.oneOf(Object.values(imageSizeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    hasResponsiveMargin: PropTypes.bool,
    margin: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginRight: PropTypes.oneOf(Object.values(spaceOptions)),
    marginLeft: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

SkeletonItem.defaultProps = {
    skeletonItemType: skeletonItemTypeDefault,
    isLoading: true,
    blockHeight: spaceDefault.sm,
    blockWidth: spaceDefault.sm,
    colorWab: greyOptions.grey20,
    radiusSize: radiusOptions.none,
    hasResponsiveMargin: false,
    margin: spaceDefault,
};

export default SkeletonItem;
