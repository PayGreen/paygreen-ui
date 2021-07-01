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
import labels from '../../shared/labels';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Popin from './Popin';

storiesOf(folder.popup + 'Popin', module)
    .addDecorator(withKnobs)
    .add('Popin', () => (
        <div style={{ position: 'relative', marginTop: '100px' }}>
            <Popin
                isActive={boolean(labels.isActive, true)}
                align={select(
                    labels.align,
                    blockPositionOptions,
                    blockPositionOptions.left,
                )}
                blockWidth={select(
                    labels.blockWidth,
                    spaceOptions,
                    spaceOptions.sm,
                )}
                radiusSize={select(
                    labels.radiusSize,
                    radiusOptions,
                    radiusDefault,
                )}
                shadowSize={select(
                    labels.shadowSize,
                    shadowSizeOptions,
                    shadowSizeOptions.sm,
                )}
                marginTop={select(labels.marginTop, spaceOptions, spaceDefault)}
                marginBottom={select(
                    labels.marginBottom,
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
