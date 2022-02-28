import React from 'react';
import {
    folder,
    imageTypeOptions,
    imageSizeOptions,
    spaceOptions,
    spaceDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
    iconSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Image from '../Image/Image';
import portraitFile from '../Image/sample/portrait.png';
import ClickableBlock from './ClickableBlock';

export default {
    title: folder.popup + 'ClickableBlock',
    argTypes: {
        isActive: {
            name: labels.isActive,
            control: 'boolean',
        },
        iconSize: {
            name: labels.iconSize,
            options: Object.values(iconSizeOptions),
            control: 'select',
        },
        colorPallet: {
            name: labels.colorPallet,
            options: Object.values(colorPalletOptions),
            control: 'select',
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
        colorWab: {
            name: labels.colorWab,
            options: Object.values(greyOptions),
            control: 'select',
        },
        colorStatus: {
            name: labels.colorStatus,
            options: Object.values(formStatusOptions),
            control: 'select',
        },
        hasBorderTop: {
            name: 'Has border top',
            control: 'boolean',
        },
        hasBorderRight: {
            name: 'Has border right',
            control: 'boolean',
        },
        hasBorderLeft: {
            name: 'Has border left',
            control: 'boolean',
        },
        hasBorderBottom: {
            name: 'Has border bottom',
            control: 'boolean',
        },
        colorStatus: {
            name: labels.colorStatus,
            options: Object.values(formStatusOptions),
            control: 'select',
        },
        paddingBottom: {
            name: labels.paddingBottom,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        paddingLateral: {
            name: labels.paddingLateral,
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
        marginLateral: {
            name: labels.marginLateral,
            options: Object.values(spaceOptions),
            control: 'select',
        },
    },
};

export const ClickableBlockStory = ({ ...args }) => (
    <ClickableBlock isHiddenOnMobile={true} {...args}>
        <Image
            imageType={imageTypeOptions.picture}
            isCircle={true}
            blockWidth={imageSizeOptions.xs}
            marginRight={spaceOptions.md}
        >
            <img src={portraitFile} alt="picture" />
        </Image>

        <div>
            <Title>Jane Dae</Title>

            <Text>Lorem Ipsum Store</Text>
        </div>
    </ClickableBlock>
);

ClickableBlockStory.args = {
    isActive: false,
    iconSize: iconSizeOptions.lg,
    colorPallet: colorPalletOptions.wab,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusDefault,
    hasBorderTop: false,
    hasBorderRight: false,
    hasBorderLeft: false,
    hasBorderBottom: true,
    paddingTop: spaceOptions.sm,
    paddingBottom: spaceOptions.sm,
    paddingLateral: spaceOptions.sm,
    marginTop: spaceDefault.xs,
    marginBottom: spaceDefault.xs,
    marginLateral: spaceDefault.xs,
};
