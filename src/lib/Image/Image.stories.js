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
import Image from './Image';
import portraitFile from './sample/portrait.png';
import photoFile from './sample/sample.png';
import drawFile from './sample/sample.svg';

storiesOf(folder.media + 'Image', module)
    .addDecorator(withKnobs)
    .add('Cover image', () => (
        <Image
            imageType={imageTypeOptions.cover}
            hasModifiedColor={boolean('Modify color', true)}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
            bottomStyle={radios('Bottom style', maskOptions, maskDefault)}
            blockWidth={select(
                'Image width',
                imageSizeOptions,
                imageSizeOptions.xl,
            )}
            blockHeight={select(
                'Image height',
                imageSizeOptions,
                imageSizeOptions.xs,
            )}
            radiusSize={radios(
                'Border radius',
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
                'Image width',
                imageSizeOptions,
                imageSizeOptions.xl,
            )}
            blockHeight={select(
                'Image height',
                imageSizeOptions,
                imageSizeOptions.xs,
            )}
            padding={select('Padding', spaceOptions, spaceOptions.none)}
            shadowSize={select(
                'Shadow size',
                shadowSizeOptions,
                shadowSizeOptions.none,
            )}
            justifyContent={select(
                'Justify content',
                justifyContentOptions,
                justifyContentOptions.center,
            )}
            alignItems={select(
                'Align items',
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
                'Image width',
                imageSizeOptions,
                imageSizeOptions.xl,
            )}
            blockHeight={select(
                'Image height',
                imageSizeOptions,
                imageSizeOptions.xs,
            )}
            radiusSize={radios(
                'Border radius',
                radiusOptions,
                radiusOptions.lg,
            )}
            shadowSize={select(
                'Shadow style',
                shadowSizeOptions,
                shadowSizeDefault,
            )}
            padding={select('Padding', spaceOptions, spaceOptions.none)}
        >
            <img src={photoFile} alt="picture" />
        </Image>
    ))
    .add('Image in circle', () => (
        <Image
            imageType={imageTypeOptions.picture}
            isCircle={true}
            hasDecoration={boolean('With decorators', true)}
            blockWidth={select(
                'Image width',
                imageSizeOptions,
                imageSizeOptions.sm,
            )}
            blockHeight={select(
                'Image height',
                imageSizeOptions,
                imageSizeOptions.auto,
            )}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            marginBottom={select('Margin bottom', spaceOptions, spaceDefault)}
            marginLeft={select('Margin left', spaceOptions, spaceDefault)}
            marginRight={select('Margin right', spaceOptions, spaceDefault)}
        >
            <img src={portraitFile} alt="picture" />
        </Image>
    ));
