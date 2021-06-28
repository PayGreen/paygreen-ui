import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { folder, spaceOptions } from '../../shared/constants';
import labels from '../../shared/labels';
import ModalBody from './ModalBody';
import Text from '../Text/Text';

storiesOf(folder.popup + folder.sub.modal + 'ModalBody', module)
    .addDecorator(withKnobs)
    .add('ModalBody', () => (
        <ModalBody
            paddingLateral={select(
                labels.paddingLateral,
                spaceOptions,
                spaceOptions.sm,
            )}
            paddingTop={select(
                labels.paddingTop,
                spaceOptions,
                spaceOptions.sm,
            )}
            paddingBottom={select(
                labels.paddingBottom,
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
