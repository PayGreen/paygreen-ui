import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    decorationOptions,
    decorationDefault,
    colorTypeOptions,
    fontSizeOptions,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Card from '../Card/Card';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Banner from './Banner';

storiesOf(folder.block + 'Banner', module)
    .addDecorator(withKnobs)
    .add('Banner', () => (
        <Banner
            topStyle={radios(
                labels.topStyle,
                decorationOptions,
                decorationDefault,
            )}
            bottomStyle={radios(
                labels.bottomStyle,
                decorationOptions,
                decorationDefault,
            )}
            gradient={radios(
                labels.gradient,
                gradientOptions,
                gradientOptions.theme,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
        >
            <Card hasBackground={false}>
                <Title
                    colorTheme={select(
                        labels.colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    colorType={colorTypeOptions.reverse}
                    textSize={fontSizeOptions.xl}
                    marginLateral={spaceOptions.md}
                    marginTop={spaceOptions.md}
                >
                    Your big title
                </Title>

                <Text
                    colorTheme={select(
                        labels.colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    colorType={colorTypeOptions.reverse}
                    marginLateral={spaceOptions.md}
                    marginTop={spaceOptions.md}
                    marginBottom={spaceOptions.md}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis porttitor velit a ultricies aliquet. Donec vehicula in
                    arcu non sodales. Fusce et consectetur odio. Ut bibendum
                    ullamcorper turpis vel imperdiet.
                </Text>
            </Card>
        </Banner>
    ));
