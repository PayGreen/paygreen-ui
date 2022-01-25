import React from 'react';
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
import BannerComponent from './Banner';

export default {
    title: folder.block + 'Banner',
    argTypes: {
        topStyle: {
            name: labels.topStyle,
            options: Object.values(decorationOptions),
            control: 'radio',
        },
        bottomStyle: {
            name: labels.bottomStyle,
            options: Object.values(decorationOptions),
            control: 'radio',
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
        gradient: {
            name: labels.gradient,
            options: Object.values(gradientOptions),
            control: 'radio',
        },
    },
};

export const Banner = args => (
    <BannerComponent {...args}>
        <Card hasBackground={false}>
            <Title
                colorTheme={args.colorTheme}
                colorType={colorTypeOptions.reverse}
                textSize={fontSizeOptions.xl}
                marginLateral={spaceOptions.md}
                marginTop={spaceOptions.md}
            >
                Your big title
            </Title>

            <Text
                colorTheme={args.colorTheme}
                colorType={colorTypeOptions.reverse}
                marginLateral={spaceOptions.md}
                marginTop={spaceOptions.md}
                marginBottom={spaceOptions.md}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porttitor velit a ultricies aliquet. Donec vehicula in arcu non
                sodales. Fusce et consectetur odio. Ut bibendum ullamcorper
                turpis vel imperdiet.
            </Text>
        </Card>
    </BannerComponent>
);

Banner.args = {
    topStyle: decorationDefault,
    bottomStyle: decorationDefault,
    colorTheme: colorThemeDefault,
    gradient: gradientOptions.theme,
};
