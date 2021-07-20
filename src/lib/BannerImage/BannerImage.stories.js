import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    decorationImageOptions,
    decorationDefault,
    fontSizeOptions,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Card from '../Card/Card';
import Title from '../Title/Title';
import Text from '../Text/Text';
import BannerImage from './BannerImage';
import photoFile from './sample/sample.png';

const { md } = spaceOptions;
const { colorTheme, topStyle, bottomStyle } = labels;

storiesOf(folder.block + 'BannerImage', module)
    .addDecorator(withKnobs)
    .add('BannerImage', () => (
        <BannerImage
            colorTheme={radios(
                colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            useColorTheme={boolean('useColorTheme', true)}
            topStyle={radios(
                topStyle,
                decorationImageOptions,
                decorationDefault,
            )}
            bottomStyle={radios(
                bottomStyle,
                decorationImageOptions,
                decorationDefault
            )}
            image={photoFile}
        >
            <Card hasBackground={false}>
                <Title
                    colorTheme={radios(
                        colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    textSize={fontSizeOptions.lg}
                    marginLateral={md}
                    marginTop={md}
                >
                    Your title with <strong>an emphasis</strong>
                </Title>

                <Text
                    marginLateral={md}
                    marginTop={md}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis porttitor velit a ultricies aliquet. Donec vehicula in
                    arcu non sodales.
                </Text>
            </Card>
        </BannerImage>
    ));
