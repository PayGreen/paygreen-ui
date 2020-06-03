import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { folder, spaceOptions } from '../../shared/constants';
import ModalBody from './ModalBody';
import Text from '../Text/Text';

storiesOf(folder.main + folder.sub.modal + 'ModalBody', module)
    .addDecorator(withKnobs)
    .add('ModalBody', () => (
        <ModalBody
            paddingLateral={select(
                'Lateral padding',
                spaceOptions,
                spaceOptions.sm,
            )}
            paddingTop={select('Padding top', spaceOptions, spaceOptions.sm)}
            paddingBottom={select(
                'Padding bottom',
                spaceOptions,
                spaceOptions.sm,
            )}
        >
            <Text>
                Curabitur congue varius ex et posuere. Maecenas tincidunt diam
                ut nisl porttitor scelerisque.
            </Text>
        </ModalBody>
    ));
