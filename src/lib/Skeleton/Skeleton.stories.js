import React from 'react';

import {
    folder,
    greyOptions,
    spaceOptions,
    shadowSizeOptions,
    radiusOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import SkeletonComponent from './Skeleton';

const lineNumberLabel = 'Number of lines';

export default {
    title: folder.loading + folder.sub.skeleton + 'Skeleton',
    argTypes: {
        blockWidth: {
            name: labels.blockWidth,
            control: 'select',
            options: Object.values(spaceOptions),
        },
        colorWab: {
            name: labels.colorWab,
            control: 'select',
            options: Object.values(greyOptions),
        },
        backgroundColor: {
            name: labels.backgroundColor,
            control: 'select',
            options: Object.values(greyOptions),
        },
        lineNumber: {
            name: lineNumberLabel,
            control: 'number',
        },
        shadowSize: {
            control: 'radio',
            options: shadowSizeOptions,
            name: labels.shadowSize,
        },
        radiusSize: {
            control: 'radio',
            name: labels.radiusSize,
            options: radiusOptions,
        },
        hasResponsivePadding: {
            control: 'boolean',
            name: labels.hasResponsivePadding,
        },
        padding: {
            control: 'select',
            options: spaceOptions,
            name: labels.padding,
        },
    },
};

export const Skeleton = args => (
    <SkeletonComponent {...args} skeletonType="textCard" />
);

export const SkeletonImage = args => (
    <SkeletonComponent
        {...args}
        blockWidth="sm"
        padding="lg"
        lineNumber={3}
        skeletonType="imageCard"
    />
);

SkeletonImage.args = {
    backgroundColor: 'white00',
};

Skeleton.args = {
    hasResponsivePadding: false,
    lineNumber: 3,
    blockWidth: 'sm',
    padding: 'lg',
    shadowSize: 'none',
};
