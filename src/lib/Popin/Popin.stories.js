import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import {
    folder,
    blockWidthOptions,
    shadowSizeOptions,
    radiusOptions,
    radiusDefault,
    colorPalletOptions,
    greyOptions,
    spaceOptions,
    spaceDefault,
    alignOptions,
    alignDefault,
    fontSizeOptions,
} from '../../shared/constants';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Popin from './Popin';

storiesOf(folder.main + 'Popin', module)
    .addDecorator(withKnobs)
    .add('Popin alone', () => (
        <Popin
            isActive={boolean('Is active', true)}
            blockWidth={select(
                'Width',
                blockWidthOptions,
                blockWidthOptions.sm,
            )}
            radiusSize={select('Radius size', radiusOptions, radiusDefault)}
            shadowSize={select(
                'Shadow size',
                shadowSizeOptions,
                shadowSizeOptions.sm,
            )}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            align={select('Alignment', alignOptions, alignDefault)}
        >
            <Title
                marginTop={spaceOptions.xs}
                marginLateral={spaceOptions.xs}
                colorPallet={colorPalletOptions.wab}
                colorWab={greyOptions.grey60}
                textSize={fontSizeOptions.sm}
                align={alignOptions.center}
            >
                Démo
            </Title>

            <Text
                marginTop={spaceOptions.sm}
                marginLateral={spaceOptions.xs}
                marginBottom={spaceOptions.xs}
                textSize={fontSizeOptions.sm}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
        </Popin>
    ));
