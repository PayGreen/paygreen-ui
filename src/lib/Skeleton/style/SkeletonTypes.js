import React from 'react';
import {
    radiusOptions,
    spaceOptions,
    skeletonItemTypeOptions,
    imageSizeOptions,
} from '../../../shared/constants';
import Card from '../../Card/Card';
import SkeletonItem from '../../SkeletonItem/SkeletonItem';
import { AbsoluteContent } from './index';

const SkeletonTypes = {
    textCard: rest => {
        return (
            <Card
                theme={rest.theme} // not necessary, only needed for tests
                colorWab={rest.backgroundWabColor}
                shadowSize={rest.shadowSize}
                radiusSize={rest.radiusSize}
            >
                {/* this div is necessary to avoid border radius style applied by Card to its children*/}
                <div>
                    <SkeletonItem
                        theme={rest.theme} // not necessary, only needed for tests
                        skeletonItemType={skeletonItemTypeOptions.text}
                        colorWab={rest.colorWab}
                        radiusSize={radiusOptions.sm}
                        marginBottom={spaceOptions.lg}
                        blockHeight={imageSizeOptions.xxs}
                        blockWidth={imageSizeOptions.sm}
                    />

                    {[...Array(rest.lineNumber)].map((value, index) => (
                        <SkeletonItem
                            theme={rest.theme} // not necessary, only needed for tests
                            key={index}
                            skeletonItemType={skeletonItemTypeOptions.text}
                            colorWab={rest.colorWab}
                            blockWidth={imageSizeOptions.auto}
                            blockHeight={imageSizeOptions.tiny}
                            radiusSize={radiusOptions.sm}
                            marginTop={spaceOptions.md}
                        />
                    ))}
                </div>
            </Card>
        );
    },
    imageCard: rest => {
        return (
            <Card
                theme={rest.theme} // not necessary, only needed for tests
                colorWab={rest.backgroundWabColor}
                shadowSize={rest.shadowSize}
                radiusSize={rest.radiusSize}
            >
                <AbsoluteContent
                    theme={rest.theme}
                    blockWidth={rest.blockWidth}
                >
                    <SkeletonItem
                        theme={rest.theme} // not necessary, only needed for tests
                        colorWab={rest.colorWab}
                    />
                </AbsoluteContent>

                <div className="content">
                    <SkeletonItem
                        theme={rest.theme} // not necessary, only needed for tests
                        skeletonItemType={skeletonItemTypeOptions.text}
                        colorWab={rest.colorWab}
                        radiusSize={radiusOptions.sm}
                        marginTop={spaceOptions.lg}
                        marginBottom={spaceOptions.lg}
                        blockHeight={imageSizeOptions.xxs}
                        blockWidth={imageSizeOptions.sm}
                    />

                    {[...Array(rest.lineNumber)].map((value, index) => (
                        <SkeletonItem
                            theme={rest.theme} // not necessary, only needed for tests
                            key={index}
                            skeletonItemType={skeletonItemTypeOptions.text}
                            colorWab={rest.colorWab}
                            blockHeight={imageSizeOptions.tiny}
                            radiusSize={radiusOptions.sm}
                            marginTop={spaceOptions.md}
                        />
                    ))}
                </div>
            </Card>
        );
    },
};

export { SkeletonTypes };
