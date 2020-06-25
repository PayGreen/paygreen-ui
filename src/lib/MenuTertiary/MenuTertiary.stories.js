import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    text,
    radios,
    select,
} from '@storybook/addon-knobs';
import {
    folder,
    gradientOptions,
    decorationOptions,
    colorTypeOptions,
    fontSizeOptions,
    spaceOptions,
} from '../../shared/constants';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Title from '../Title/Title';
import Text from '../Text/Text';
import MenuTertiary from './MenuTertiary';

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

storiesOf(folder.nav + 'MenuTertiary', module)
    .addDecorator(withKnobs)
    .add('MenuTertiary', () => (
        <>
            <MenuTertiary isFixed={boolean('Is fixed', true)}>
                {sampleLinks.map((sample, index) => (
                    <a href={'#' + sample.link} key={index}>
                        {sample.label}
                    </a>
                ))}
            </MenuTertiary>

            {sampleLinks.map((sample, index) => (
                <Banner
                    key={index}
                    id={sample.link}
                    topStyle={decorationOptions.none}
                    bottomStyle={decorationOptions.none}
                    gradient={
                        index % 2 ? gradientOptions.none : gradientOptions.theme
                    }
                >
                    <Card hasBackground={false}>
                        <Title
                            colorType={
                                index % 2
                                    ? colorTypeOptions.original
                                    : colorTypeOptions.reverse
                            }
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
                            marginLateral={spaceOptions.md}
                            marginTop={spaceOptions.md}
                            marginBottom={spaceOptions.md}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis porttitor velit a ultricies aliquet.
                            Donec vehicula in arcu non sodales. Fusce et
                            consectetur odio. Ut bibendum ullamcorper turpis vel
                            imperdiet.
                        </Text>
                    </Card>
                </Banner>
            ))}
        </>
    ));
