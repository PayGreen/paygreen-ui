import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    select,
    boolean,
    radios,
    text,
} from '@storybook/addon-knobs';
import {
    folder,
    greyOptions,
    radiusOptions,
    spaceOptions,
    spaceDefault,
    skeletonItemTypeOptions,
    skeletonItemTypeDefault,
    imageSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Text from '../Text/Text';
import SkeletonItem from './SkeletonItem';

storiesOf(folder.loading + folder.sub.skeleton + 'SkeletonItem', module)
    .addDecorator(withKnobs)
    .add('SkeletonItem', () => (
        <SkeletonItem
            skeletonItemType={radios(
                'Skeleton item type',
                skeletonItemTypeOptions,
                skeletonItemTypeDefault,
            )}
            blockWidth={select(
                labels.blockWidth,
                imageSizeOptions,
                imageSizeOptions.sm,
            )}
            blockHeight={select(
                labels.blockHeight,
                imageSizeOptions,
                imageSizeOptions.sm,
            )}
            colorWab={select(labels.colorWab, greyOptions, greyOptions.grey20)}
            radiusSize={radios(
                labels.radiusSize,
                radiusOptions,
                radiusOptions.none,
            )}
            hasResponsiveMargin={boolean(labels.hasResponsiveMargin, false)}
            margin={select(labels.margin, spaceOptions, spaceDefault)}
        />
    ))
    .add('SkeletonItem with children', () => (
        <SkeletonItem
            skeletonItemType={skeletonItemTypeOptions.text}
            blockWidth={select(
                labels.blockWidth,
                imageSizeOptions,
                imageSizeOptions.auto,
            )}
            colorWab={select(labels.colorWab, greyOptions, greyOptions.grey20)}
            radiusSize={radios(
                labels.radiusSize,
                radiusOptions,
                radiusOptions.none,
            )}
            isLoading={boolean(labels.isLoading, true)}
        >
            <Text>
                {text(
                    labels.text,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam',
                )}
            </Text>
        </SkeletonItem>
    ));
