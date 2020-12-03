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
    skeletonItemTypeOptions,
    imageSizeOptions,
} from '../../shared/constants';
import Card from '../Card/Card';
import SkeletonItem from '../SkeletonItem/SkeletonItem';
import { SkeletonBase, AbsoluteContent } from './style';

const Skeleton = ({ padding, margin, lineNumber, ...rest }) => {
    rest = setSpaces(rest, margin, padding);

    const image =
        rest.skeletonType === skeletonTypeOptions.imageCard ? (
            <AbsoluteContent theme={rest.theme} blockWidth={rest.blockWidth}>
                <SkeletonItem
                    theme={rest.theme} // not necessary, only needed for tests
                    colorWab={rest.colorWab}
                />
            </AbsoluteContent>
        ) : null;

    const texts = [];

    for (let index = 0; index < lineNumber; index++) {
        texts.push(
            <SkeletonItem
                theme={rest.theme} // not necessary, only needed for tests
                key={index}
                skeletonItemType={skeletonItemTypeOptions.text}
                colorWab={rest.colorWab}
                radiusSize={radiusOptions.sm}
                marginTop={spaceOptions.md}
                blockHeight={imageSizeOptions.tiny}
                blockWidth={
                    rest.skeletonType === skeletonTypeOptions.textCard
                        ? imageSizeOptions.auto
                        : null
                }
            />,
        );
    }

    return (
        <SkeletonBase {...rest}>
            <Card
                theme={rest.theme} // not necessary, only needed for tests
                colorWab={rest.backgroundWabColor}
                shadowSize={rest.shadowSize}
                radiusSize={rest.radiusSize}
            >
                {image}

                <div className="content">
                    <SkeletonItem
                        theme={rest.theme} // not necessary, only needed for tests
                        skeletonItemType={skeletonItemTypeOptions.text}
                        colorWab={rest.colorWab}
                        radiusSize={radiusOptions.sm}
                        blockHeight={imageSizeOptions.xxs}
                        blockWidth={imageSizeOptions.sm}
                        marginBottom={spaceOptions.lg}
                        marginTop={
                            rest.skeletonType === skeletonTypeOptions.imageCard
                                ? spaceOptions.lg
                                : null
                        }
                    />

                    {texts}
                </div>
            </Card>
        </SkeletonBase>
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
