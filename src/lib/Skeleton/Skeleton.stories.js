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
import Skeleton from './Skeleton';

const colorWabLabel = 'Grey color';
const backgroundWabColorLabel = 'Background grey color';
const blockWidthLabel = 'Width';
const lineNumberLabel = 'Number of lines';
const shadowSizeLabel = 'Shadow size';
const borderRadiusLabel = 'Border radius';
const responsivePaddingLabel = 'Has responsive padding';
const paddingLabel = 'Padding';

storiesOf(folder.loading + 'Skeleton', module)
    .addDecorator(withKnobs)
    .add('Skeleton Text Card', () => (
        <Skeleton
            skeletonType={skeletonTypeOptions.textCard}
            blockWidth={select(blockWidthLabel, spaceOptions, spaceOptions.sm)}
            colorWab={select(colorWabLabel, greyOptions, greyOptions.grey20)}
            backgroundWabColor={select(
                backgroundWabColorLabel,
                greyOptions,
                greyOptions.grey10,
            )}
            lineNumber={number(lineNumberLabel, 3)}
            shadowSize={radios(
                shadowSizeLabel,
                shadowSizeOptions,
                shadowSizeOptions.none,
            )}
            radiusSize={radios(borderRadiusLabel, radiusOptions, radiusDefault)}
            hasResponsivePadding={boolean(responsivePaddingLabel, false)}
            padding={select(paddingLabel, spaceOptions, spaceOptions.lg)}
        />
    ))
    .add('Skeleton Image Card', () => (
        <Skeleton
            skeletonType={skeletonTypeOptions.imageCard}
            blockWidth={select(blockWidthLabel, spaceOptions, spaceOptions.sm)}
            shadowSize={radios(
                shadowSizeLabel,
                shadowSizeOptions,
                shadowSizeDefault,
            )}
            radiusSize={radios(borderRadiusLabel, radiusOptions, radiusDefault)}
            colorWab={select(colorWabLabel, greyOptions, greyOptions.grey20)}
            backgroundWabColor={select(
                backgroundWabColorLabel,
                greyOptions,
                greyOptions.white00,
            )}
            lineNumber={number(lineNumberLabel, 3)}
            hasResponsivePadding={boolean(responsivePaddingLabel, false)}
            padding={select(paddingLabel, spaceOptions, spaceOptions.lg)}
        />
    ));
