import React from 'react';
import {
    folder,
    decorationOptions,
    decorationDefault,
    alignOptions,
    fontSizeOptions,
    spaceOptions,
    colorPalletOptions,
    greyOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Grid from '../Grid/Grid';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Link from '../Link/Link';
import FooterList from '../FooterList/FooterList';
import Footer from './Footer';

const sampleContents = [
    {
        title: 'Title 1',
        links: ['Link 1', 'Second link', 'Other link'],
    },
    {
        title: 'Title two',
        links: ['New link', 'Page with long title', 'Link 78', 'Fourth link'],
    },
    {
        title: 'Third title',
        links: ['Little link', 'Link', 'Final link'],
    },
];

export default {
    title: folder.layout + folder.sub.footer + 'Footer',
    argTypes: {
        topStyle: {
            name: labels.topStyle,
            options: Object.values(decorationOptions),
            control: 'radio',
        },
    },
};

export const SimpleFooter = ({ topStyle }) => (
    <Footer topStyle={topStyle}>
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
            textSize={fontSizeOptions.xs}
            colorWab={greyOptions.grey30}
            marginBottom={spaceOptions.xs}
        >
            PayGreen UI Library – 2019 – {new Date().getFullYear()}
        </Text>
    </Footer>
);

SimpleFooter.args = {
    topStyle: decorationDefault,
};
