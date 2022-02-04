import React from 'react';
import {
    folder,
    listStyleOptions,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    iconSizeOptions,
    iconSizeDefault,
    decorationOptions,
    iconHtmlTagOptions,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { LeafIcon, CheckBoldIcon } from '../Icon/Icon';
import Text from '../Text/Text';
import Title from '../Title/Title';
import ListItem from './ListItem';

export default {
    title: folder.list + 'ListItem',
};

const defaultArgsType = {
    bulletSize: {
        name: labels.bulletSize,
        options: Object.values(iconSizeOptions),
        control: 'select',
    },
    arrowStyle: {
        name: 'Arrow (if active)',
        options: Object.values(decorationOptions),
        default: decorationOptions.right,
        control: 'radio',
    },
    isClicked: {
        name: labels.isActive,
        control: 'boolean',
    },
    colorTheme: {
        name: labels.colorTheme,
        options: Object.values(colorThemeOptions),
        default: colorThemeDefault,
        control: 'select',
    },
    marginTop: {
        name: labels.marginTop,
        options: Object.values(spaceOptions),
        default: spaceDefault,
        control: 'select',
    },
    marginBottom: {
        name: labels.marginBottom,
        options: Object.values(spaceOptions),
        default: spaceDefault,
        control: 'select',
    },
};

export const ListItemIcons = args => (
    <ListItem
        {...args}
        colorPallet={colorPalletOptions.theme}
        htmlTag={iconHtmlTagOptions.button}
        bulletStyle={listStyleOptions.icon}
    >
        <LeafIcon colorTheme={args.colorTheme} />

        <Title colorPallet={args.colorPallet} colorTheme={args.colorTheme}>
            First content
        </Title>

        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </ListItem>
);

ListItemIcons.args = {
    arrowStyle: decorationOptions.right,
    colorTheme: colorThemeDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    isClicked: false,
};
ListItemIcons.argTypes = {
    ...defaultArgsType,
};

export const ListItemCheck = args => (
    <ListItem {...args} bulletStyle={listStyleOptions.icon}>
        <CheckBoldIcon />

        <Text>First content</Text>
    </ListItem>
);
ListItemCheck.args = {
    bulletSize: iconSizeDefault,
};
ListItemCheck.argTypes = {
    bulletSize: defaultArgsType.bulletSize,
};

export const ListItemDash = args => (
    <ListItem {...args}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </ListItem>
);
ListItemDash.args = {
    colorTheme: colorThemeDefault,
    bulletSize: iconSizeDefault,
};
ListItemDash.argTypes = {
    colorTheme: defaultArgsType.colorTheme,
    bulletSize: defaultArgsType.bulletSize,
};

export const ListItemNumber = args => (
    <ListItem {...args} bulletStyle={listStyleOptions.number}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </ListItem>
);
ListItemNumber.args = {
    colorTheme: colorThemeDefault,
    bulletSize: iconSizeDefault,
};
ListItemNumber.argTypes = {
    colorTheme: defaultArgsType.colorTheme,
    bulletSize: defaultArgsType.bulletSize,
};
