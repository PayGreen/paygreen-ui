import React from 'react';
import styled from 'styled-components';
import {
    radiusOptions,
    spaceOptions,
    spaceDefault,
    skeletonItemTypeOptions,
    imageSizeOptions,
} from '../../../shared/constants';
import Card from '../../Card/Card';
import SkeletonItem from '../../SkeletonItem/SkeletonItem';

const WrapperContent = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
`;

const SkeletonTypes = {
    textCard: rest => {
        return (
            <Card
                theme={rest.theme} // not necessary, only needed for tests
                colorWab={rest.backgroundWabColor}
                shadowSize={rest.shadowSize}
                radiusSize={rest.radiusSize}
            >
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
                <WrapperContent>
                    <SkeletonItem
                        theme={rest.theme} // not necessary, only needed for tests
                        blockHeight={spaceOptions.xs}
                        blockWidth={spaceDefault}
                    />
                </WrapperContent>

                {/* this div is necessary to avoid border radius style applied by Card to its children*/}
                <div>
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
