import React from 'react';
import PropTypes from 'prop-types';
import { setSpaces } from '../../shared/spaces';
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
    rest = setSpaces(rest, margin, padding);

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
    lineNumber: PropTypes.number,
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    backgroundWabColor: PropTypes.oneOf(Object.values(greyOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    blockHeight: PropTypes.oneOf(Object.values(spaceOptions)),
    blockWidth: PropTypes.oneOf(Object.values(spaceOptions)),
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
    lineNumber: 1,
    colorWab: greyOptions.grey20,
    backgroundWabColor: greyOptions.grey10,
    radiusSize: radiusDefault,
    blockHeight: spaceDefault.sm,
    blockWidth: spaceDefault.sm,
    hasResponsivePadding: false,
    padding: spaceDefault,
    hasResponsiveMargin: false,
    margin: spaceDefault,
};

export default Skeleton;
