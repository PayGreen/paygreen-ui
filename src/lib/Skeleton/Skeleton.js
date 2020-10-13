import React from 'react';
import PropTypes from 'prop-types';
import {
    greyOptions,
    radiusDefault,
    radiusOptions,
    spaceOptions,
    spaceDefault,
    skeletonTypeOptions,
    skeletonTypeDefault,
} from '../../shared/constants';
import { SkeletonBase } from './style';
import { SkeletonTypes } from './style/SkeletonTypes';

const Skeleton = ({ padding, margin, ...rest }) => {
    ['Top', 'Bottom', 'Left', 'Right'].forEach(direction => {
        const paddingDirection = 'padding' + direction;

        if (!rest[paddingDirection]) {
            rest[paddingDirection] = padding;
        }

        const marginDirection = 'margin' + direction;

        if (!rest[marginDirection]) {
            rest[marginDirection] = margin;
        }
    });

    /**
     * To recreate dynamically each Skeleton and its name based on type props
     */
    const skeletonCustomComponent = props => {
        const SkeletonComponent = SkeletonTypes[props.skeletonType];
        return <SkeletonComponent {...props} />;
    };

    return (
        <SkeletonBase {...rest}>{skeletonCustomComponent(rest)}</SkeletonBase>
    );
};

Skeleton.propTypes = {
    skeletonType: PropTypes.oneOf(Object.values(skeletonTypeOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)), 
    backgroundWabColor: PropTypes.oneOf(Object.values(greyOptions)),
    blockHeight: PropTypes.oneOf(Object.values(spaceOptions)),
    blockWidth: PropTypes.oneOf(Object.values(spaceOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    lineNumber: PropTypes.number,
    hasResponsivePadding: PropTypes.bool,
    padding: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingTop: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingRight: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingLeft: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    hasResponsiveMargin: PropTypes.bool,
    margin: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginRight: PropTypes.oneOf(Object.values(spaceOptions)),
    marginLeft: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

Skeleton.defaultProps = {
    skeletonType: skeletonTypeDefault,
    radiusSize: radiusDefault,
    backgroundWabColor: greyOptions.grey10,
    blockHeight: spaceDefault.sm,
    blockWidth: spaceDefault.sm,
    colorWab: greyOptions.grey20,
    lineNumber: 1,
    hasResponsivePadding: false,
    padding: spaceDefault,
    hasResponsiveMargin: false,
    margin: spaceDefault,
};

export default Skeleton;
