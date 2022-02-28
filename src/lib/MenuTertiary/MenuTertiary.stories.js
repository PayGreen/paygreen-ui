import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    decorationOptions,
    colorTypeOptions,
    fontSizeOptions,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Title from '../Title/Title';
import Text from '../Text/Text';
import MenuTertiaryComponent from './MenuTertiary';

const sampleLinks = [
    {
        link: 'lorem',
        label: 'Lorem ipsum dolor',
    },
    {
        link: 'sit-amet',
        label: 'Sit amet',
    },
    {
        link: 'consectetur',
        label: 'Consectetur adipiscing',
    },
    {
        link: 'ornare',
        label: 'Cras ornare laoreet',
    },
    {
        link: 'in-finibus',
        label: 'In finibus dolor',
    },
];

export default {
    title: folder.nav + 'MenuTertiary',
    argTypes: {
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
        isFixed: {
            name: 'Is fixed',
            control: 'boolean',
        },
        isHidden: {
            name: labels.isHidden,
            control: 'boolean',
        },
    },
};

export const MenuTertiary = args => (
    <>
        <MenuTertiaryComponent {...args}>
            {sampleLinks.map((sample, index) => (
                <a href={'#' + sample.link} key={index}>
                    {sample.label}
                </a>
            ))}
        </MenuTertiaryComponent>

        {sampleLinks.map((sample, index) => (
            <Banner
                key={index}
                id={sample.link}
                topStyle={decorationOptions.none}
                bottomStyle={decorationOptions.none}
                gradient={
                    index % 2 ? gradientOptions.none : gradientOptions.theme
                }
                colorTheme={args.colorTheme}
            >
                <Card hasBackground={false}>
                    <Title
                        colorType={
                            index % 2
                                ? colorTypeOptions.original
                                : colorTypeOptions.reverse
                        }
                        colorTheme={args.colorTheme}
                        textSize={fontSizeOptions.xl}
                        marginLateral={spaceOptions.md}
                        marginTop={spaceOptions.md}
                    >
                        {sample.label}
                    </Title>

                    <Text
                        colorType={
                            index % 2
                                ? colorTypeOptions.original
                                : colorTypeOptions.reverse
                        }
                        colorTheme={args.colorTheme}
                        marginLateral={spaceOptions.md}
                        marginTop={spaceOptions.md}
                        marginBottom={spaceOptions.md}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis porttitor velit a ultricies aliquet. Donec vehicula
                        in arcu non sodales. Fusce et consectetur odio. Ut
                        bibendum ullamcorper turpis vel imperdiet. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Duis
                        porttitor velit a ultricies aliquet. Donec vehicula in
                        arcu non sodales. Fusce et consectetur odio. Ut bibendum
                        ullamcorper turpis vel imperdiet.
                    </Text>
                </Card>
            </Banner>
        ))}
    </>
);

MenuTertiary.args = {
    colorTheme: colorThemeDefault,
    isFixed: true,
    isHidden: false,
};
