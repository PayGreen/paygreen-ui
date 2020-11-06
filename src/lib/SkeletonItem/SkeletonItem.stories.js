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
import Text from '../Text/Text';
import SkeletonItem from './SkeletonItem';

const colorWabLabel = 'Grey color';
const borderRadiusLabel = 'Border radius';
const blockWidthLabel = 'Width';
const blockHeightLabel = 'Height';
const skeletonTypeLabel = 'Skeleton type';

storiesOf(folder.main + folder.sub.loading + 'SkeletonItem', module)
    .addDecorator(withKnobs)
    .add('SkeletonItem', () => (
        <SkeletonItem
            skeletonItemType={radios(
                skeletonTypeLabel,
                skeletonItemTypeOptions,
                skeletonItemTypeDefault,
            )}
            blockWidth={select(
                blockWidthLabel,
                imageSizeOptions,
                imageSizeOptions.sm,
            )}
            blockHeight={select(
                blockHeightLabel,
                imageSizeOptions,
                imageSizeOptions.sm,
            )}
            colorWab={select(colorWabLabel, greyOptions, greyOptions.grey20)}
            radiusSize={radios(
                borderRadiusLabel,
                radiusOptions,
                radiusOptions.none,
            )}
            hasResponsiveMargin={boolean('Has responsive margin', false)}
            margin={select('Margin', spaceOptions, spaceDefault)}
        />
    ))
    .add('SkeletonItem with children', () => (
        <SkeletonItem
            skeletonItemType={skeletonItemTypeOptions.text}
            blockWidth={select(
                blockWidthLabel,
                imageSizeOptions,
                imageSizeOptions.auto,
            )}
            colorWab={select(colorWabLabel, greyOptions, greyOptions.grey20)}
            radiusSize={radios(
                borderRadiusLabel,
                radiusOptions,
                radiusOptions.none,
            )}
            isLoading={boolean('Is loading', true)}
        >
            <Text>
                {text(
                    'Text of child',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam',
                )}
            </Text>
        </SkeletonItem>
    ));
