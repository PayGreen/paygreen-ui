import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select } from '@storybook/addon-knobs';
import {
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    waveOptions,
    waveDefault,

    colorTypeOptions,
    fontSizeOptions,
    blockSpaceOptions
} from '../../shared/constants';
import Card from '../Card/Card';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Banner from './Banner';

storiesOf('Banner', module).addDecorator(withKnobs)
.add('Banner', () => (
    <Banner
        topStyle={radios('Top wave direction', waveOptions, waveDefault)}
        bottomStyle={radios('Bottom wave direction', waveOptions, waveDefault)}
        gradient={radios('Gradient type', gradientOptions, gradientOptions.theme)}
        colorTheme={select('Color theme', colorThemeOptions, colorThemeDefault)}
    >
        <Card
            hasBackground={false}
        >
            <Title
                colorType={colorTypeOptions.reverse}
                textSize={fontSizeOptions.xl}
                marginLateral={blockSpaceOptions.md}
                marginTop={blockSpaceOptions.md}
            >
                Your big title
            </Title>

            <Text
                colorType={colorTypeOptions.reverse}
                marginLateral={blockSpaceOptions.md}
                marginTop={blockSpaceOptions.md}
                marginBottom={blockSpaceOptions.md}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor velit a ultricies aliquet. Donec vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum ullamcorper turpis vel imperdiet. 
            </Text>
        </Card>
    </Banner>
));