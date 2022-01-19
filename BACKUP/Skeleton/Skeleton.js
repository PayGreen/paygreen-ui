import React from 'react';
import PropTypes from 'prop-types';
import { setSpaces } from '../../shared/spaces';
import {
    greyOptions,
    radiusOptions,
    radiusDefault,
    shadowSizeOptions,
    shadowSizeDefault,
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

const Skeleton = ({
    lineNumber,
    padding,
    margin,
    colorWab,
    backgroundColor,
    radiusSize,
    shadowSize,
    ...rest
}) => {
    rest = setSpaces(rest, margin, padding);
    lineNumber = lineNumber < 0 ? 0 : lineNumber;

    const image =
        rest.skeletonType === skeletonTypeOptions.imageCard ? (
            <AbsoluteContent theme={rest.theme} blockWidth={rest.blockWidth}>
                <SkeletonItem
                    theme={rest.theme} // not necessary, only needed for tests
                    colorWab={colorWab}
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
                colorWab={colorWab}
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
                blockWidth={rest.blockWidth}
                colorWab={backgroundColor}
                shadowSize={shadowSize}
                radiusSize={radiusSize}
            >
                {image}

                <div className="content">
                    <SkeletonItem
                        theme={rest.theme} // not necessary, only needed for tests
                        skeletonItemType={skeletonItemTypeOptions.text}
                        colorWab={colorWab}
                        radiusSize={radiusOptions.sm}
                        blockHeight={imageSizeOptions.xxs}
                        blockWidth={imageSizeOptions.sm}
                        marginBottom={
                            lineNumber > 0 ? spaceOptions.lg : spaceOptions.none
                        }
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
    backgroundColor: PropTypes.oneOf(Object.values(greyOptions)),
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    shadowSize: PropTypes.oneOf(Object.values(shadowSizeOptions)),
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
    backgroundColor: greyOptions.grey10,
    radiusSize: radiusDefault,
    shadowSize: shadowSizeDefault,
    blockWidth: spaceDefault.sm,
    hasResponsivePadding: false,
    padding: spaceDefault,
    hasResponsiveMargin: false,
    margin: spaceDefault,
};

export default Skeleton;
