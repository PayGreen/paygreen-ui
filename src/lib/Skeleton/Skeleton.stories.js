import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    select,
    boolean,
    radios,
    number,
} from '@storybook/addon-knobs';
import {
    folder,
    greyOptions,
    spaceOptions,
    skeletonTypeOptions,
    shadowSizeOptions,
    shadowSizeDefault,
    radiusDefault,
    radiusOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Skeleton from './Skeleton';

const lineNumberLabel = 'Number of lines';

storiesOf(folder.loading + 'Skeleton', module)
    .addDecorator(withKnobs)
    .add('Skeleton Text Card', () => (
        <Skeleton
            skeletonType={skeletonTypeOptions.textCard}
            blockWidth={select(
                labels.blockWidth,
                spaceOptions,
                spaceOptions.sm,
            )}
            colorWab={select(labels.colorWab, greyOptions, greyOptions.grey20)}
            backgroundWabColor={select(
                labels.backgroundColor,
                greyOptions,
                greyOptions.grey10,
            )}
            lineNumber={number(lineNumberLabel, 3)}
            shadowSize={radios(
                labels.shadowSize,
                shadowSizeOptions,
                shadowSizeOptions.none,
            )}
            radiusSize={radios(labels.radiusSize, radiusOptions, radiusDefault)}
            hasResponsivePadding={boolean(labels.hasResponsivePadding, false)}
            padding={select(labels.padding, spaceOptions, spaceOptions.lg)}
        />
    ))
    .add('Skeleton Image Card', () => (
        <Skeleton
            skeletonType={skeletonTypeOptions.imageCard}
            blockWidth={select(
                labels.blockWidth,
                spaceOptions,
                spaceOptions.sm,
            )}
            shadowSize={radios(
                labels.shadowSize,
                shadowSizeOptions,
                shadowSizeDefault,
            )}
            radiusSize={radios(labels.radiusSize, radiusOptions, radiusDefault)}
            colorWab={select(labels.colorWab, greyOptions, greyOptions.grey20)}
            backgroundWabColor={select(
                labels.backgroundColor,
                greyOptions,
                greyOptions.white00,
            )}
            lineNumber={number(lineNumberLabel, 3)}
            hasResponsivePadding={boolean(labels.hasResponsivePadding, false)}
            padding={select(labels.padding, spaceOptions, spaceOptions.lg)}
        />
    ));
