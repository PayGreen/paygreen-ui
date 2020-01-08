import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    select,
    boolean,
    number,
    text,
} from '@storybook/addon-knobs';
import {
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
} from '../../shared/constants';
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

storiesOf('Paygreen | System/InternalGrid', module)
    .addDecorator(withKnobs)
    .addParameters({
        componentSubtitle: 'SubTitle',
        component: InternalGrid,
        parameters: { docs: { page: null } },
    })
    .add('Grid', () => (
        <Grid
            displayType={select('Grid type', displayOptions, displayDefault)}
            columnNumber={number('Column number', 2)}
            flexDirection={select(
                'Flex direction',
                flexDirectionOptions,
                flexDirectionDefault,
            )}
            flexWrap={select('Flex wrap', flexWrapOptions, flexWrapDefault)}
            justifyContent={select(
                'Justify content',
                justifyContentOptions,
                justifyContentOptions.spaceBetween,
            )}
            justifyItems={select(
                'Justify items',
                justifyItemsOptions,
                justifyItemsDefault,
            )}
            alignItems={select(
                'Align items',
                alignItemsOptions,
                alignItemsDefault,
            )}
            childrenFlex={text('Children flex', 'initial')}
            childrenShiftSize={select(
                'Children shift',
                spaceOptions,
                spaceDefault,
            )}
            isNegativeShift={boolean('Negative shift', false)}
            isReverseShift={boolean('Reverse shift', false)}
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
