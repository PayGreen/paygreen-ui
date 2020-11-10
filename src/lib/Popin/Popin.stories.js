import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import {
    folder,
    shadowSizeOptions,
    radiusOptions,
    radiusDefault,
    spaceOptions,
    spaceDefault,
    blockPositionOptions,
    fontSizeOptions,
} from '../../shared/constants';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Popin from './Popin';

storiesOf(folder.popup + 'Popin', module)
    .addDecorator(withKnobs)
    .add('Popin', () => (
        <div style={{ position: 'relative', marginTop: '100px' }}>
            <Popin
                isActive={boolean('Is active', true)}
                align={select(
                    'Align',
                    blockPositionOptions,
                    blockPositionOptions.left,
                )}
                blockWidth={select('Width', spaceOptions, spaceOptions.sm)}
                radiusSize={select('Radius size', radiusOptions, radiusDefault)}
                shadowSize={select(
                    'Shadow size',
                    shadowSizeOptions,
                    shadowSizeOptions.sm,
                )}
                marginTop={select('Margin top', spaceOptions, spaceDefault)}
                marginBottom={select(
                    'Margin bottom',
                    spaceOptions,
                    spaceDefault,
                )}
            >
                <Title
                    marginTop={spaceOptions.xs}
                    marginLateral={spaceOptions.xs}
                    textSize={fontSizeOptions.sm}
                >
                    Demo
                </Title>

                <Text
                    marginTop={spaceOptions.sm}
                    marginLateral={spaceOptions.xs}
                    marginBottom={spaceOptions.xs}
                    textSize={fontSizeOptions.sm}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </Text>
            </Popin>
        </div>
    ));
