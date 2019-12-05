import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    colorThemeOptions,
    colorThemeDefault,
    waveOptions,
    waveDefault,
    colorNumberOptions,
    greyOptions,
    fontSizeOptions,
    blockSpaceOptions
} from '../../shared/constants';
import Card from '../Card/Card';
import Title from '../Title/Title';
import Text from '../Text/Text';
import BannerImage from './BannerImage';
import photoFile from './sample/sample.png';

const colorThemeLabel = 'ColorTheme';

storiesOf('BannerImage', module).addDecorator(withKnobs)
.add('BannerImage', () => (
    <BannerImage
        colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
        topStyle={radios('Wave top direction', waveOptions, waveDefault)}
        image={photoFile}
    >
        <Card
            hasBackground={false}
        >
            <Title
                colorNumber={colorNumberOptions.two}
                colorTheme={radios(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                color2={greyOptions.grey60}
                textSize={fontSizeOptions.lg}
                marginLateral={blockSpaceOptions.md}
                marginTop={blockSpaceOptions.md}
            >
                Your title with <strong>an emphasis</strong>
            </Title>

            <Text
                marginLateral={blockSpaceOptions.md}
                marginTop={blockSpaceOptions.md}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor velit a ultricies aliquet. Donec vehicula in arcu non sodales.
            </Text>
        </Card>
    </BannerImage>
));