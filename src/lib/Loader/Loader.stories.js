import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    iconSizeDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Loader from './Loader';

export default {
    title: folder.loading + 'Loader',
    argTypes: {
        isActive: {
            name: labels.isActive,
            control: 'boolean',
            defaultValue: true,
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
            defaultValue: colorThemeDefault,
        },
        loaderSize: {
            name: 'Loader size',
            options: Object.values(iconSizeOptions),
            control: 'select',
            defaultValue: iconSizeDefault,
        },
        paddingTop: {
            name: labels.paddingTop,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceDefault,
        },
        paddingBottom: {
            name: labels.paddingBottom,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceDefault,
        },
        paddingLateral: {
            name: labels.paddingLateral,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceDefault,
        },
    },
};

export const SimpleLoader = ({ ...args }) => {
    return <Loader {...args} />;
};
