import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    decorationOptions,
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

storiesOf(folder.block + 'BannerImage', module)
    .addDecorator(withKnobs)
    .add('BannerImage', () => (
        <BannerImage
            colorTheme={radios(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            topStyle={radios(
                labels.topStyle,
                decorationOptions,
                decorationDefault,
            )}
            image={photoFile}
        >
            <Card hasBackground={false}>
                <Title
                    colorTheme={radios(
                        labels.colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    textSize={fontSizeOptions.lg}
                    marginLateral={spaceOptions.md}
                    marginTop={spaceOptions.md}
                >
                    Your title with <strong>an emphasis</strong>
                </Title>

                <Text
                    marginLateral={spaceOptions.md}
                    marginTop={spaceOptions.md}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis porttitor velit a ultricies aliquet. Donec vehicula in
                    arcu non sodales.
                </Text>
            </Card>
        </BannerImage>
    ));
