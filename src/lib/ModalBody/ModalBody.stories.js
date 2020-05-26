import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { folder, spaceOptions, spaceDefault } from '../../shared/constants';
import ModalBody from './ModalBody';

storiesOf(folder.main + folder.sub.modal + 'ModalBody', module)
    .addDecorator(withKnobs)
    .add('ModalBody', () => (
        <ModalBody
            paddingLateral={select(
                "ModalBody's lateral paddings",
                spaceOptions,
                spaceDefault,
            )}
            paddingTop={select(
                "ModalBody's padding top",
                spaceOptions,
                spaceDefault,
            )}
            paddingBottom={select(
                "ModalBody's padding bottom",
                spaceOptions,
                spaceDefault,
            )}
        >
            <div>
                Curabitur congue varius ex et posuere. Maecenas tincidunt diam
                ut nisl porttitor scelerisque.
            </div>
        </ModalBody>
    ));
