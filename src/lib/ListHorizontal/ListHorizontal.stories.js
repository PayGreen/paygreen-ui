import React from 'react';
import {
    folder,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    formStatusOptions,
    formStatusDefault,
    alignOptions,
    alignDefault,
    spaceOptions,
    spaceDefault,
    textHtmlTagOptions,
    fontSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Text from '../Text/Text';
import Link from '../Link/Link';
import ListHorizontal from './ListHorizontal';

const sampleTexts = ['Text one', 'Text two', 'Text three', 'Text four'];
const sampleLinks = ['Link one', 'Link two', 'Link three', 'Link four'];

export default {
    title: folder.list + 'ListHorizontal',
    argTypes: {
        colorType: {
            name: labels.colorType,
            control: 'select',
            options: Object.values(colorTypeOptions),
            defaultValue: colorTypeDefault,
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
            defaultValue: colorThemeDefault,
        },
        colorPallet: {
            name: labels.colorPallet,
            options: Object.values(colorPalletOptions),
            control: 'radio',
            defaultValue: colorThemeDefault,
        },
        colorWab: {
            name: labels.colorWab,
            options: Object.values(greyOptions),
            control: 'select',
            defaultValue: greyOptions.grey30,
        },
        colorStatus: {
            name: labels.colorStatus,
            options: Object.values(formStatusOptions),
            control: 'select',
            defaultValue: formStatusDefault,
        },
        align: {
            name: labels.align,
            options: Object.values(alignOptions),
            control: 'radio',
            defaultValue: alignDefault,
        },
        hasBackground: {
            name: labels.hasBackground,
            control: 'boolean',
            defaultValue: true,
        },
        paddingBottom: {
            name: labels.paddingBottom,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.sm,
        },
        paddingLateral: {
            name: labels.paddingLateral,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.sm,
        },
        paddingTop: {
            name: labels.paddingTop,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.sm,
        },
        marginBottom: {
            name: labels.marginBottom,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceDefault,
        },
        marginLateral: {
            name: labels.marginLateral,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceDefault,
        },
        marginTop: {
            name: labels.marginTop,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceDefault,
        },
    },
};

export const WithTexts = ({
    colorType,
    colorPallet,
    colorTheme,
    colorWab,
    colorStatus,
    align,
    hasBackground,
    paddingBottom,
    paddingLateral,
    paddingTop,
}) => {
    return (
        <ListHorizontal
            colorType={colorType}
            colorPallet={colorPallet}
            colorTheme={colorTheme}
            colorWab={colorWab}
            colorStatus={colorStatus}
            align={align}
            hasBackground={hasBackground}
            paddingLateral={paddingLateral}
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
        >
            {sampleTexts.map((element, index) => (
                <Text
                    key={index}
                    colorType={colorType}
                    colorPallet={colorPallet}
                    colorTheme={colorTheme}
                    colorWab={colorWab}
                    colorStatus={colorStatus}
                    htmlTag={textHtmlTagOptions.span}
                    textSize={fontSizeOptions.xs}
                >
                    {element}
                </Text>
            ))}
        </ListHorizontal>
    );
};
export const WithLinks = ({
    colorType,
    colorPallet,
    colorTheme,
    colorWab,
    colorStatus,
    align,
    marginLateral,
    marginTop,
    marginBottom,
}) => {
    return (
        <ListHorizontal
            colorType={colorType}
            colorPallet={colorPallet}
            colorTheme={colorTheme}
            colorWab={colorWab}
            colorStatus={colorStatus}
            align={align}
            marginLateral={marginLateral}
            marginTop={marginTop}
            marginBottom={marginBottom}
        >
            {sampleLinks.map((element, index) => (
                <a href="#" key={index}>
                    <Link
                        colorType={colorType}
                        colorPallet={colorPallet}
                        colorTheme={colorTheme}
                        colorWab={colorWab}
                        colorStatus={colorStatus}
                        hasUppercase={true}
                        hasUnderline={false}
                    >
                        {element}
                    </Link>
                </a>
            ))}
        </ListHorizontal>
    );
};
