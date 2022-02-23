import React from 'react';

import {
    folder,
    greyOptions,
    radiusOptions,
    spaceOptions,
    skeletonItemTypeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Text from '../Text/Text';

import SkeletonItemComponent from './SkeletonItem';

export default {
    title: folder.loading + folder.sub.skeleton + 'SkeletonItem',
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
        radiusSize: {
            control: 'radio',
            name: labels.radiusSize,
            options: radiusOptions,
        },
    },
};

export const SkeletonItem = args => <SkeletonItemComponent {...args} />;

export const SkeletonItemWithChildren = ({ text, ...args }) => (
    <SkeletonItemComponent skeletonItemType="text" {...args}>
        <Text>{text}</Text>
    </SkeletonItemComponent>
);

SkeletonItem.argTypes = {
    skeletonItemType: {
        control: 'radio',
        options: Object.values(skeletonItemTypeOptions),
        name: 'Skeleton item type',
    },

    blockHeight: {
        name: labels.blockHeight,
        control: 'select',
        options: Object.values(spaceOptions),
    },

    hasResponsivePadding: {
        control: 'boolean',
        name: labels.hasResponsivePadding,
    },
    margin: {
        control: 'select',
        options: spaceOptions,
        name: labels.margin,
    },
};

SkeletonItem.args = {
    skeletonItemType: 'rectangle',
    blockHeight: 'sm',
    blockWidth: 'sm',
    hasResponsivePadding: false,
    margin: 'none',
};

SkeletonItemWithChildren.argTypes = {
    isLoading: {
        control: 'boolean',
        name: labels.isLoading,
    },
    text: {
        name: labels.label,
        control: 'text',
    },
};

SkeletonItemWithChildren.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam',
    isLoading: true,
};
