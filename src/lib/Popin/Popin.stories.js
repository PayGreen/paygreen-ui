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
    alignOptions,
} from '../../shared/constants';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Popin from './Popin';

storiesOf(folder.main + 'Popin', module)
    .addDecorator(withKnobs)
    .add('Popin with text', () => (
        <Popin
            isActive={boolean('Is active', true)}
            blockWidth={select(
                'Popin size',
                blockWidthOptions,
                blockWidthOptions.sm,
            )}
            radiusSize={select('Radius size', radiusOptions, radiusDefault)}
            shadowSize={select(
                'Shadow size',
                shadowSizeOptions,
                shadowSizeOptions.sm,
            )}
        >
            <Title
                marginTop={spaceOptions.xs}
                colorPallet={colorPalletOptions.wab}
                colorWab={greyOptions.grey60}
            >
                Démo
            </Title>
            <Text
                marginTop={spaceOptions.sm}
                marginLateral={spaceOptions.xs}
                marginBottom={spaceOptions.xs}
                colorPallet={colorPalletOptions.wab}
                colorWab={greyOptions.grey40}
                align={select(
                    'Text alignment',
                    alignOptions,
                    alignOptions.center,
                )}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </Text>
        </Popin>
    ));
