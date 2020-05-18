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
    fontSizeOptions,
} from '../../shared/constants';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Popin from './Popin';

const isActiveLabel = 'Is active';
const popinSizeLabel = 'Popin size';
const radiusSizeLabel = 'Radius label';
const shadowSizeLabel = 'Shadow size';

storiesOf(folder.main + 'Popin', module)
    .addDecorator(withKnobs)
    .add('Popin with text', () => (
        <Popin
            isActive={boolean(isActiveLabel, true)}
            blockWidth={select(
                popinSizeLabel,
                blockWidthOptions,
                blockWidthOptions.sm,
            )}
            radiusSize={select(radiusSizeLabel, radiusOptions, radiusDefault)}
            shadowSize={select(
                shadowSizeLabel,
                shadowSizeOptions,
                shadowSizeOptions.sm,
            )}
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </Text>
        </Popin>
    ));
