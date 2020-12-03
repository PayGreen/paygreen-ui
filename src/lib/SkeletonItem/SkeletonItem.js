import React from 'react';
import PropTypes from 'prop-types';
import { setSpaces } from '../../shared/spaces';
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

const SkeletonItem = ({ children, isLoading, margin, ...rest }) => {
    rest = setSpaces(rest, margin);

    return isLoading ? (
        <SkeletonItemBase hasChildren={!!children} {...rest}>
            {children}
        </SkeletonItemBase>
    ) : (
        children
    );
};

SkeletonItem.propTypes = {
    isLoading: PropTypes.bool,
    skeletonItemType: PropTypes.oneOf(Object.values(skeletonItemTypeOptions)),
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
    isLoading: true,
    skeletonItemType: skeletonItemTypeDefault,
    blockHeight: spaceDefault.sm,
    blockWidth: spaceDefault.sm,
    colorWab: greyOptions.grey20,
    radiusSize: radiusOptions.none,
    hasResponsiveMargin: false,
    margin: spaceDefault,
};

export default SkeletonItem;
