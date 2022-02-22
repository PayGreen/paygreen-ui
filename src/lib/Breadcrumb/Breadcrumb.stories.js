import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorTypeOptions,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Breadcrumb from './Breadcrumb';

const sampleLinks = [
    {
        url: '#',
        label: 'Home',
    },
    {
        url: '#',
        label: 'Blog',
    },
    {
        url: '#',
        label: 'Category',
    },
    {
        url: '#',
        label: 'Article title',
    },
];

export default {
    title: folder.block + 'Breadcrumb',
    argTypes: {
        colorType: {
            name: labels.colorType,
            control: 'select',
            options: Object.values(colorTypeOptions),
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
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

export const BreadcrumbStory = ({ ...args }) => (
    <Breadcrumb elements={sampleLinks} {...args} />
);
