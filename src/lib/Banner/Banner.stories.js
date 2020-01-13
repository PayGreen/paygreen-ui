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
import Card from '../Card/Card';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Banner from './Banner';

storiesOf(folder.main + 'Banner', module)
    .addDecorator(withKnobs)
    .add('Banner', () => (
        <Banner
            topStyle={radios(
                'Top wave direction',
                decorationOptions,
                decorationDefault,
            )}
            bottomStyle={radios(
                'Bottom wave direction',
                decorationOptions,
                decorationDefault,
            )}
            gradient={radios(
                'Gradient type',
                gradientOptions,
                gradientOptions.theme,
            )}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
        >
            <Card hasBackground={false}>
                <Title
                    colorType={colorTypeOptions.reverse}
                    textSize={fontSizeOptions.xl}
                    marginLateral={spaceOptions.md}
                    marginTop={spaceOptions.md}
                >
                    Your big title
                </Title>

                <Text
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
