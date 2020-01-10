import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    text,
    radios,
    select,
} from '@storybook/addon-knobs';
import {
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
} from '../../shared/constants';
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

storiesOf('Paygreen | System/InternalGrid', module)
    .addDecorator(withKnobs)
    .addParameters({
        componentSubtitle: 'SubTitle',
        component: InternalGrid,
        parameters: { docs: { page: null } },
    })
    .add('Flex', () => (
        <InternalGrid
            flexWrap={select('Flex wrap', flexWrapOptions, flexWrapDefault)}
            justifyContent={select(
                'Justify content',
                justifyContentOptions,
                justifyContentOptions.spaceBetween,
            )}
            alignItems={select(
                'Align items',
                alignItemsOptions,
                alignItemsDefault,
            )}
            childrenFlex={text('Children flex', 'initial')}
            marginLateral={select(
                "Children's lateral margins",
                spaceOptions,
                spaceDefault,
            )}
            marginTop={select(
                "Children's margin top",
                spaceOptions,
                spaceDefault,
            )}
            marginBottom={select(
                "Children's margin bottom",
                spaceOptions,
                spaceDefault,
            )}
        >
            {content}
        </InternalGrid>
    ))
    .add('Grid', () => (
        <InternalGrid
            displayType={displayOptions.grid}
            gridTemplateColumns={text('Grid columns', '1fr 1fr 1fr')}
            gridTemplateRows={text('Grid rows', 'repeat(2, 60px)')}
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
            marginLateral={select(
                "Children's lateral margins",
                spaceOptions,
                spaceDefault,
            )}
            marginTop={select(
                "Children's margin top",
                spaceOptions,
                spaceDefault,
            )}
            marginBottom={select(
                "Children's margin bottom",
                spaceOptions,
                spaceDefault,
            )}
        >
            {content}
        </InternalGrid>
    ));
