import React from 'react';
import {
    folder,
    displayOptions,
    flexWrapOptions,
    flexWrapDefault,
    justifyContentOptions,
    justifyItemsOptions,
    justifyItemsDefault,
    alignItemsOptions,
    alignItemsDefault,
    spaceOptions,
    spaceDefault,
    alignDefault,
    alignOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Text from '../Text/Text';
import InternalGrid from './InternalGrid';

const content = (
    <>
        <Text>Text 1</Text>
        <Text>Text 2</Text>
        <Text>Text 3</Text>
        <Text>Text 4</Text>
    </>
);

export default {
    title: folder.grid + 'InternalGrid',
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
        childrenMarginLateral: {
            name: labels.childrenMarginBottom,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        childrenMarginTop: {
            name: labels.childrenMarginTop,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        childrenMarginBottom: {
            name: labels.childrenMarginBottom,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        hasStaticWidth: {
            name: labels.hasStaticWidth,
            control: 'boolean',
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
        gridTemplateRows: {
            name: labels.gridTemplateRows,
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
    },
};

export const Flex = ({
    hasStaticWidth,
    justifyItems,
    gridGap,
    gridTemplateRows,
    gridTemplateColumns,
    align,
    ...args
}) => <InternalGrid {...args}>{content}</InternalGrid>;

export const Grid = ({ flexWrap, justifyContent, childrenFlex, ...args }) => (
    <InternalGrid {...args} displayType={displayOptions.grid}>
        {content}
    </InternalGrid>
);

Flex.args = {
    flexWrap: flexWrapDefault,
    justifyContent: justifyContentOptions.spaceBetween,
    alignItems: alignItemsDefault,
    childrenFlex: 'initial',
    childrenMarginBottom: spaceDefault,
    childrenMarginLateral: spaceDefault,
    childrenMarginTop: spaceDefault,
};

Grid.args = {
    alignItems: alignItemsDefault,
    childrenMarginBottom: spaceDefault,
    childrenMarginLateral: spaceDefault,
    childrenMarginTop: spaceDefault,
    hasStaticWidth: true,
    justifyItems: justifyItemsDefault,
    gridGap: spaceDefault,
    gridTemplateRows: 'repeat(2, 60px)',
    gridTemplateColumns: '1fr 1fr 1fr',
    align: alignDefault,
};
