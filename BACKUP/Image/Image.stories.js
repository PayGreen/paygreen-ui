import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    maskOptions,
    maskDefault,
    imageTypeOptions,
    imageSizeOptions,
    radiusOptions,
    shadowSizeOptions,
    shadowSizeDefault,
    justifyContentOptions,
    alignItemsOptions,
    alignItemsDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import portraitFile from './sample/portrait.png';
import photoFile from './sample/sample.png';
import drawFile from './sample/sample.svg';
import Image from './Image';

storiesOf(folder.media + 'Image', module)
    .addDecorator(withKnobs)
    .add('Cover image', () => (
        <Image
            imageType={imageTypeOptions.cover}
            hasModifiedColor={boolean(labels.hasModifiedColor, true)}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            bottomStyle={radios(labels.bottomStyle, maskOptions, maskDefault)}
            blockWidth={select(
                labels.blockWidth,
                imageSizeOptions,
                imageSizeOptions.xl,
            )}
            blockHeight={select(
                labels.blockHeight,
                imageSizeOptions,
                imageSizeOptions.xs,
            )}
            radiusSize={radios(
                labels.radiusSize,
                radiusOptions,
                radiusOptions.none,
            )}
        >
            <img src={photoFile} alt="picture" />
        </Image>
    ))
    .add('Normal image', () => (
        <Image
            blockWidth={select(
                labels.blockWidth,
                imageSizeOptions,
                imageSizeOptions.xl,
            )}
            blockHeight={select(
                labels.blockHeight,
                imageSizeOptions,
                imageSizeOptions.xs,
            )}
            padding={select(labels.padding, spaceOptions, spaceOptions.none)}
            shadowSize={select(
                labels.shadowSize,
                shadowSizeOptions,
                shadowSizeOptions.none,
            )}
            justifyContent={select(
                labels.justifyContent,
                justifyContentOptions,
                justifyContentOptions.center,
            )}
            alignItems={select(
                labels.alignItems,
                alignItemsOptions,
                alignItemsDefault,
            )}
        >
            <img src={drawFile} alt="drawing" />
        </Image>
    ))
    .add('Picture image', () => (
        <Image
            imageType={imageTypeOptions.picture}
            blockWidth={select(
                labels.blockWidth,
                imageSizeOptions,
                imageSizeOptions.xl,
            )}
            blockHeight={select(
                labels.blockHeight,
                imageSizeOptions,
                imageSizeOptions.xs,
            )}
            radiusSize={radios(
                labels.radiusSize,
                radiusOptions,
                radiusOptions.lg,
            )}
            shadowSize={select(
                labels.shadowSize,
                shadowSizeOptions,
                shadowSizeDefault,
            )}
            padding={select(labels.padding, spaceOptions, spaceOptions.none)}
        >
            <img src={photoFile} alt="picture" />
        </Image>
    ))
    .add('Image in circle', () => (
        <Image
            imageType={imageTypeOptions.picture}
            isCircle={true}
            hasDecoration={boolean('Has decoration', true)}
            blockWidth={select(
                labels.blockWidth,
                imageSizeOptions,
                imageSizeOptions.sm,
            )}
            blockHeight={select(
                labels.blockHeight,
                imageSizeOptions,
                imageSizeOptions.auto,
            )}
            marginTop={select(labels.marginTop, spaceOptions, spaceDefault)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceDefault,
            )}
            marginLeft={select(labels.marginLeft, spaceOptions, spaceDefault)}
            marginRight={select(labels.marginRight, spaceOptions, spaceDefault)}
        >
            <img src={portraitFile} alt="picture" />
        </Image>
    ));
