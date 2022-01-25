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
    greyDefault,
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Text from '../Text/Text';
import LinkComponent from './Link';

export default {
    title: folder.button + 'Link',
};

export const LinkInText = args => (
    <Text colorType={args.colorType}>
        <a href="#">
            <LinkComponent {...args}>{args.text}</LinkComponent>
        </a>{' '}
        curabitur congue varius ex et posuere. Maecenas tincidunt diam ut nisl
        porttitor scelerisque. Donec egestas elit dolor, quis eleifend ipsum
        sagittis ut. Proin molestie lorem et neque tempus tristique. Mauris
        finibus dui sem, nec suscipit mi porta a.
    </Text>
);

LinkInText.argTypes = {
    colorType: {
        name: labels.colorType,
        options: Object.values(colorTypeOptions),
        control: 'radio',
    },
    colorPallet: {
        name: labels.colorPallet,
        options: Object.values(colorPalletOptions),
        control: 'radio',
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
    hasUnderline: {
        name: labels.hasUnderline,
        control: 'boolean',
    },
    hasUppercase: {
        name: labels.hasUppercase,
        control: 'boolean',
    },
    text: {
        name: labels.text,
        control: 'text',
    },
};

LinkInText.args = {
    colorType: colorTypeDefault,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusDefault,
    hasUppercase: false,
    hasUnderline: true,
    text: 'Link text',
};

export const ListOfLinks = args => (
    <>
        <a href="#">
            <Link
                colorTheme={colorThemeOptions.secondary}
                hasUnderline={false}
                {...args}
            >
                First link
            </Link>
        </a>

        <a href="#">
            <Link
                colorTheme={colorThemeOptions.tertiary}
                hasUnderline={false}
                {...args}
            >
                Second link
            </Link>
        </a>
    </>
);

ListOfLinks.argTypes = {
    paddingTop: {
        name: labels.paddingTop,
        options: Object.values(spaceOptions),
        control: 'select',
    },
    paddingBottom: {
        name: labels.paddingBottom,
        options: Object.values(spaceOptions),
        control: 'select',
    },
    paddingLeft: {
        name: labels.paddingLeft,
        options: Object.values(spaceOptions),
        control: 'select',
    },
    paddingRight: {
        name: labels.paddingRight,
        options: Object.values(spaceOptions),
        control: 'select',
    },
};

ListOfLinks.args = {
    paddingBottom: spaceOptions.sm,
    paddingTop: spaceOptions.sm,
    paddingLeft: spaceOptions.sm,
    paddingRight: spaceOptions.sm,
};
