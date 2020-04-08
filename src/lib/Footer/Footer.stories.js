import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    folder,
    decorationOptions,
    decorationDefault,
    alignOptions,
    fontSizeOptions,
    spaceOptions,
    colorPalletOptions,
    greyOptions
} from '../../shared/constants';
import Grid from '../Grid/Grid';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Link from '../Link/Link';
import FooterList from '../FooterList/FooterList';
import Footer from './Footer';

const sampleContents = [
    {
        title: 'Title 1',
        links: [
            'Link 1',
            'Second link',
            'Other link'
        ]
    },
    {
        title: 'Title two',
        links: [
            'New link',
            'Page with long title',
            'Link 78',
            'Fourth link'
        ]
    },
    {
        title: 'Third title',
        links: [
            'Little link',
            'Link',
            'Final link'
        ]
    }
];

storiesOf(folder.nav + folder.sub.footer + 'Footer', module)
    .addDecorator(withKnobs)
    .add(
        'Footer',
        () => (
            <Footer
                topStyle={radios(
                    'Wave top direction',
                    decorationOptions,
                    decorationDefault,
                )}
            >
                <Grid childrenFlex={1}>
                    {sampleContents.map((sample, index) => (
                        <div key={index}>
                            <Title
                                hasUnderline={true}
                                align={alignOptions.center}
                                textSize={fontSizeOptions.xs}
                                colorWab={greyOptions.grey30}
                                marginBottom={spaceOptions.xs}
                            >
                                {sample.title}
                            </Title>

                            <FooterList
                                align={alignOptions.center}
                                textSize={fontSizeOptions.xs}
                                marginBottom={spaceOptions.md}
                            >
                                {sample.links.map((link, index) => (
                                    <a href="#" key={index}>
                                        <Link
                                            hasUnderline={false}
                                            colorPallet={colorPalletOptions.wab}
                                            colorWab={greyOptions.grey60}
                                        >
                                            {link}
                                        </Link>
                                    </a>
                                ))}
                            </FooterList>
                        </div>
                    ))}
                </Grid>

                <Text
                    align={alignOptions.center}
                    textSize={fontSizeOptions.xxs}
                    colorWab={greyOptions.grey30}
                    marginBottom={spaceOptions.xs}
                >
                    PayGreen UI library – 2019
                </Text>
            </Footer>
        )
    );