import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    colorThemeOptions,
    colorThemeDefault,
    maskOptions,
    maskDefault,
    imageTypeOptions,
    imageSizeOptions,
    imageSizeDefault,
    radiusOptions,
    shadowStyleOptions,
    shadowStyleDefault,
    justifyContentOptions,
    alignItemsOptions,
    alignItemsDefault,
    spaceOptions
} from '../../shared/constants';
import Image from './Image';
import photoFile from './sample/sample.png';
import drawFile from './sample/sample.svg';

storiesOf('Image', module).addDecorator(withKnobs)
.add('Cover image', () => (
    <Image
        imageType={imageTypeOptions.cover}
        colorChange={boolean('Modify color', true)}
        colorTheme={select('Color theme', colorThemeOptions, colorThemeDefault)}
        bottomStyle={radios('Bottom style', maskOptions, maskDefault)}
        blockWidth={select('Image width', imageSizeOptions, imageSizeOptions.xl)}
        blockHeight={select('Image height', imageSizeOptions, imageSizeOptions.xs)}
        radiusSize={radios('Border radius', radiusOptions, radiusOptions.none)}
    >
        <img src={photoFile} alt="picture" />
    </Image>
), {
    notes: 'Component made for taking photographs inside a responsive block, without change proportions, thanks to imageType prop passed as "cover".',
})
.add('Normal image', () => (
    <Image
        blockWidth={select('Image width', imageSizeOptions, imageSizeOptions.xl)}
        blockHeight={select('Image height', imageSizeOptions, imageSizeOptions.xs)}
        padding={select('Padding', spaceOptions, spaceOptions.none)}
        shadow={select('Shadow style', shadowStyleOptions, shadowStyleOptions.none)}
        justifyContent={select('Justify content', justifyContentOptions, justifyContentOptions.center)}
        alignItems={select('Align items', alignItemsOptions, alignItemsDefault)}
    >
        <img src={drawFile} alt="drawing" />
    </Image>
), {
    notes: 'Default Image component, optimized for SVG drawing and photos.',
})
.add('Picture image', () => (
    <Image
        imageType={imageTypeOptions.picture}
        blockWidth={select('Image width', imageSizeOptions, imageSizeOptions.xl)}
        blockHeight={select('Image height', imageSizeOptions, imageSizeOptions.xs)}
        maxWidth={select('Max width', imageSizeOptions, imageSizeDefault)}
        maxkHeight={select('Max height', imageSizeOptions, imageSizeDefault)}
        radiusSize={radios('Border radius', radiusOptions, radiusOptions.lg)}
        shadow={select('Shadow style', shadowStyleOptions, shadowStyleDefault)}
        padding={select('Padding', spaceOptions, spaceOptions.none)}
    >
        <img src={photoFile} alt="picture" />
    </Image>
));