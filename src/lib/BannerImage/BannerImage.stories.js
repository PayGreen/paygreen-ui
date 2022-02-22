import React from 'react';
import {
    folder,
    colorThemeOptions,
    decorationOptions,
    decorationImageOptions,
    fontSizeOptions,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Card from '../Card/Card';
import Title from '../Title/Title';
import Text from '../Text/Text';
import BannerImage from './BannerImage';
import photoFile from './sample/sample.png';

export default {
    title: folder.block + 'Banner Image',
    argTypes: {
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
        hasModifiedColor: {
            name: labels.hasModifiedColor,
            control: 'boolean',
        },
        topStyle: {
            name: labels.topStyle,
            options: Object.values(decorationOptions),
            control: 'radio',
        },
        bottomStyle: {
            name: labels.bottomStyle,
            options: Object.values(decorationImageOptions),
            control: 'radio',
        },
        image: {
            control: 'file',
            default: photoFile,
        },
        textSize: {
            name: labels.textSize,
            options: Object.values(fontSizeOptions),
            control: 'select',
        },
        marginLateral: {
            name: labels.marginLateral,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        marginTop: {
            name: labels.marginTop,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        marginBottom: {
            name: labels.marginBottom,
            options: Object.values(spaceOptions),
            control: 'select',
        },
    },
};

export const BannerImageStory = args => (
    <BannerImage
        colorTheme={args?.colorTheme}
        hasModifiedColor={args?.hasModifiedColor}
        topStyle={args?.topStyle}
        bottomStyle={args?.bottomStyle}
        image={args?.image}
    >
        <Card hasBackground={false}>
            <Title
                colorTheme={args?.colorTheme}
                textSize={args?.textSize}
                marginLateral={args?.marginLateral}
                marginTop={args?.marginTop}
            >
                Your title with <strong>an emphasis</strong>
            </Title>

            <Text
                marginLateral={args?.marginLateral}
                marginTop={args?.marginTop}
                marginBottom={args?.marginBottom}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porttitor velit a ultricies aliquet. Donec vehicula in arcu non
                sodales.
            </Text>
        </Card>
    </BannerImage>
);
