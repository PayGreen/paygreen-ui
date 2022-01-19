import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    text,
    select,
    radios,
    boolean,
} from '@storybook/addon-knobs';
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

storiesOf(folder.grid + 'InternalGrid', module)
    .addDecorator(withKnobs)
    .add('Flex', () => (
        <InternalGrid
            flexWrap={radios(labels.flexWrap, flexWrapOptions, flexWrapDefault)}
            justifyContent={select(
                labels.justifyContent,
                justifyContentOptions,
                justifyContentOptions.spaceBetween,
            )}
            alignItems={select(
                labels.alignItems,
                alignItemsOptions,
                alignItemsDefault,
            )}
            childrenFlex={text(labels.childrenFlex, 'initial')}
            childrenMarginLateral={select(
                labels.childrenMarginLateral,
                spaceOptions,
                spaceDefault,
            )}
            childrenMarginTop={select(
                labels.childrenMarginTop,
                spaceOptions,
                spaceDefault,
            )}
            childrenMarginBottom={select(
                labels.childrenMarginBottom,
                spaceOptions,
                spaceDefault,
            )}
        >
            {content}
        </InternalGrid>
    ))
    .add('Grid', () => (
        <InternalGrid
            hasStaticWidth={boolean(labels.hasStaticWidth, true)}
            align={radios(labels.align, alignOptions, alignDefault)}
            displayType={displayOptions.grid}
            gridTemplateColumns={text(
                labels.gridTemplateColumns,
                '1fr 1fr 1fr',
            )}
            gridTemplateRows={text(labels.gridTemplateRows, 'repeat(2, 60px)')}
            gridGap={select(labels.gridGap, spaceOptions, spaceDefault)}
            justifyItems={select(
                labels.justifyItems,
                justifyItemsOptions,
                justifyItemsDefault,
            )}
            alignItems={select(
                labels.alignItems,
                alignItemsOptions,
                alignItemsDefault,
            )}
            childrenMarginLateral={select(
                labels.childrenMarginLateral,
                spaceOptions,
                spaceDefault,
            )}
            childrenMarginTop={select(
                labels.childrenMarginTop,
                spaceOptions,
                spaceDefault,
            )}
            childrenMarginBottom={select(
                labels.childrenMarginBottom,
                spaceOptions,
                spaceDefault,
            )}
        >
            {content}
        </InternalGrid>
    ));
