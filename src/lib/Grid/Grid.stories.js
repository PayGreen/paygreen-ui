import React from 'react';
import {
    folder,
    displayOptions,
    displayDefault,
    flexDirectionOptions,
    flexDirectionDefault,
    flexWrapOptions,
    flexWrapDefault,
    justifyContentOptions,
    justifyItemsOptions,
    justifyItemsDefault,
    alignItemsOptions,
    alignItemsDefault,
    spaceOptions,
    spaceDefault,
    alignOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Text from '../Text/Text';
import Grid from './Grid';

const sampleTexts = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor velit a ultricies aliquet. Donec vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum ullamcorper turpis vel imperdiet. Curabitur bibendum risus gravida tellus condimentum tristique. Sed ut elit efficitur, sagittis urna sed, scelerisque eros.',
    'Lorem ipsum dolor elit. Nunc a ornare nulla. Donec id tellus nibh. Nunc lobortis consequat placerat. Donec ullamcorper quis sem eget vestibulum.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ornare nulla. Donec id tellus nibh. Nunc lobortis consequat placerat. Integer interdum sapien eget purus efficitur vulputate. Morbi sodales, purus tristique lobortis suscipit, nulla nisi porta tellus, quis imperdiet nunc nunc vitae turpis. Donec ullamcorper quis sem eget vestibulum.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ornare nulla. Donec id tellus nibh. Nunc lobortis consequat placerat. Donec ullamcorper quis sem eget vestibulum. Integer interdum sapien eget purus efficitur vulputate. Morbi sodales, purus tristique lobortis suscipit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ornare nulla. Donec id tellus nibh. Nunc lobortis consequat placerat. Donec ullamcorper quis sem eget vestibulum.',
    'Lorem ipsum dolor sit amet. Nunc a ornare nulla. Donec id tellus nibh. Nunc lobortis consequat placerat. Donec ullamcorper quis sem eget vestibulum. Integer interdum sapien eget purus efficitur vulputate.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis consequat placerat. Donec ullamcorper quis sem eget vestibulum.',
];

export default {
    title: folder.grid + 'Grid',
    argTypes: {
        flexWrap: {
            name: labels.flexWrap,
            options: Object.values(flexWrapOptions),
            control: 'radio',
        },
        justifyContent: {
            name: labels.alignItems,
            options: Object.values(alignItemsOptions),
            control: 'select',
        },
        alignItems: {
            name: labels.justifyContent,
            options: Object.values(justifyContentOptions),
            control: 'select',
        },
        childrenFlex: {
            name: labels.childrenFlex,
            control: 'text',
        },
        align: {
            name: labels.align,
            options: Object.values(alignOptions),
            control: 'radio',
        },
        gridTemplateColumns: {
            name: labels.gridTemplateColumns,

            control: 'text',
        },
        gridGap: {
            name: labels.gridGap,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        justifyItems: {
            name: labels.justifyItems,
            options: Object.values(justifyItemsOptions),
            control: 'select',
        },
        displayType: {
            name: labels.displayType,
            options: Object.values(displayOptions),
            control: 'radio',
        },
        columnNumber: { name: 'Column number', control: 'number' },
        flexDirection: {
            name: 'Flex direction',
            options: Object.values(flexDirectionOptions),
            control: 'radio',
        },
        childrenShiftSize: {
            name: 'Children shift size',
            options: Object.values(spaceOptions),
            control: 'select',
        },
        isNegativeShift: { name: 'Is negative shift', control: 'boolean' },
        isReverseShift: { name: 'Is reverse shift', control: 'boolean' },
        blockPadding: {
            name: 'Block padding',
            options: Object.values(spaceOptions),
            control: 'select',
        },
        childrenMargin: {
            name: 'Children margin (on mobile)',
            options: Object.values(spaceOptions),
            control: 'select',
        },
        childrenMarginBig: {
            name: 'Children margin (on big screen)',
            options: Object.values(spaceOptions),
            control: 'select',
        },
    },
};

export const GridStory = ({ ...args }) => (
    <Grid {...args}>
        {sampleTexts.map((element, index) => (
            <Text
                key={index}
                hasBackground={true}
                paddingLateral={spaceOptions.sm}
                paddingTop={spaceOptions.sm}
                paddingBottom={spaceOptions.sm}
            >
                {element}
            </Text>
        ))}
    </Grid>
);

GridStory.args = {
    flexWrap: flexWrapDefault,
    justifyContent: justifyContentOptions.spaceBetween,
    alignItems: alignItemsDefault,
    childrenFlex: 'initial',
    alignItems: alignItemsDefault,
    justifyItems: justifyItemsDefault,
    gridGap: spaceDefault,
    gridTemplateColumns: '1fr 1fr 1fr',
    align: alignOptions.center,
    flexDirection: flexDirectionDefault,
    childrenShiftSize: spaceDefault,
    isNegativeShift: false,
    isReverseShift: false,
    blockPadding: spaceOptions.md,
    childrenMargin: spaceOptions.md,
    childrenMarginBig: spaceOptions.lg,
    displayType: displayDefault,
    columnNumber: 2,
};
