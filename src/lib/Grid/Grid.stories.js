import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    select,
    boolean,
    number,
    text,
    radios,
} from '@storybook/addon-knobs';
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
import Card from '../Card/Card';
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

storiesOf(folder.grid + 'Grid', module)
    .addDecorator(withKnobs)
    .add('Grid', () => (
        <Grid
            align={radios(labels.align, alignOptions, alignOptions.center)}
            displayType={radios(
                labels.displayType,
                displayOptions,
                displayDefault,
            )}
            columnNumber={number('Column number', 2)}
            gridTemplateColumns={text(labels.gridTemplateColumns, '')}
            flexDirection={radios(
                'Flex direction',
                flexDirectionOptions,
                flexDirectionDefault,
            )}
            flexWrap={radios(labels.flexWrap, flexWrapOptions, flexWrapDefault)}
            justifyContent={select(
                labels.justifyContent,
                justifyContentOptions,
                justifyContentOptions.spaceBetween,
            )}
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
            childrenFlex={text(labels.childrenFlex, 'initial')}
            childrenShiftSize={select(
                'Children shift size',
                spaceOptions,
                spaceDefault,
            )}
            isNegativeShift={boolean('Is negative shift', false)}
            isReverseShift={boolean('Is reverse shift', false)}
            blockPadding={select(
                'Block padding',
                spaceOptions,
                spaceOptions.md,
            )}
            gridGap={select(labels.gridGap, spaceOptions, spaceDefault)}
            childrenMargin={select(
                'Children margin (on mobile)',
                spaceOptions,
                spaceOptions.md,
            )}
            childrenMarginBig={select(
                'Children margin (on big screen)',
                spaceOptions,
                spaceOptions.lg,
            )}
        >
            {sampleTexts.map((element, index) => (
                <Card key={index}>
                    <Text
                        marginLateral={spaceOptions.sm}
                        marginTop={spaceOptions.sm}
                        marginBottom={spaceOptions.sm}
                    >
                        {element}
                    </Text>
                </Card>
            ))}
        </Grid>
    ));
