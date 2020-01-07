import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import {
    displayOptions,
    displayDefault,
    columnOptions,
    columnDefault,
    flexDirectionOptions,
    flexDirectionDefault,
    flexWrapOptions,
    flexWrapDefault,
    justifyContentOptions,
    justifyItemsOptions,
    justifyItemsDefault,
    alignItemsOptions,
    alignItemsDefault,
    blockSpaceOptions,
    blockSpaceDefault
} from '../../shared/constants';
import Card from '../Card/Card';
import Text from '../Text/Text';
import Grid from './Grid';

storiesOf('Grid', module).addDecorator(withKnobs)
.add('Grid', () => (
    <Grid
        displayType={select('Grid type', displayOptions, displayDefault)}
        columns={select('Column number', columnOptions, columnDefault)}
        flexDirection={select('Flex direction', flexDirectionOptions, flexDirectionDefault)}
        flexWrap={select('Flex wrap', flexWrapOptions, flexWrapDefault)}
        justifyContent={select('Justify content', justifyContentOptions, justifyContentOptions.spaceBetween)}
        justifyItems={select('Justify items', justifyItemsOptions, justifyItemsDefault)}
        alignItems={select('Align items', alignItemsOptions, alignItemsDefault)}
        flex1={boolean('Flex 1', false)}
        childrenShift={select('Children shift', blockSpaceOptions, blockSpaceDefault)}
        negativeShift={boolean('Negative shift', false)}
        reverseShift={boolean('Reverse shift', false)}
    >
        <Card>
            <Text
                marginLateral={blockSpaceOptions.sm}
                marginTop={blockSpaceOptions.sm}
                marginBottom={blockSpaceOptions.sm}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor velit a ultricies aliquet. Donec vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum ullamcorper turpis vel imperdiet. Curabitur bibendum risus gravida tellus condimentum tristique. Sed ut elit efficitur, sagittis urna sed, scelerisque eros. 
            </Text>
        </Card>

        <Card>
            <Text
                marginLateral={blockSpaceOptions.sm}
                marginTop={blockSpaceOptions.sm}
                marginBottom={blockSpaceOptions.sm}
            >
            Lorem ipsum dolor elit. Nunc a ornare nulla. Donec id tellus nibh. Nunc lobortis consequat placerat. Donec ullamcorper quis sem eget vestibulum.
            </Text>
        </Card>

        <Card>
            <Text
                marginLateral={blockSpaceOptions.sm}
                marginTop={blockSpaceOptions.sm}
                marginBottom={blockSpaceOptions.sm}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ornare nulla. Donec id tellus nibh. Nunc lobortis consequat placerat. Integer interdum sapien eget purus efficitur vulputate. Morbi sodales, purus tristique lobortis suscipit, nulla nisi porta tellus, quis imperdiet nunc nunc vitae turpis. Donec ullamcorper quis sem eget vestibulum.
            </Text>
        </Card>

        <Card>
            <Text
                marginLateral={blockSpaceOptions.sm}
                marginTop={blockSpaceOptions.sm}
                marginBottom={blockSpaceOptions.sm}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ornare nulla. Donec id tellus nibh. Nunc lobortis consequat placerat. Donec ullamcorper quis sem eget vestibulum. Integer interdum sapien eget purus efficitur vulputate. Morbi sodales, purus tristique lobortis suscipit.
            </Text>
        </Card>

        <Card>
            <Text
                marginLateral={blockSpaceOptions.sm}
                marginTop={blockSpaceOptions.sm}
                marginBottom={blockSpaceOptions.sm}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ornare nulla. Donec id tellus nibh. Nunc lobortis consequat placerat. Donec ullamcorper quis sem eget vestibulum.
            </Text>
        </Card>

        <Card>
            <Text
                marginLateral={blockSpaceOptions.sm}
                marginTop={blockSpaceOptions.sm}
                marginBottom={blockSpaceOptions.sm}
            >
            Lorem ipsum dolor sit amet. Nunc a ornare nulla. Donec id tellus nibh. Nunc lobortis consequat placerat. Donec ullamcorper quis sem eget vestibulum. Integer interdum sapien eget purus efficitur vulputate.
            </Text>
        </Card>

        <Card>
            <Text
                marginLateral={blockSpaceOptions.sm}
                marginTop={blockSpaceOptions.sm}
                marginBottom={blockSpaceOptions.sm}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis consequat placerat. Donec ullamcorper quis sem eget vestibulum.
            </Text>
        </Card>
    </Grid>
));