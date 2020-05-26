import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { folder } from '../../shared/constants';
import ModalBody from './ModalBody';

storiesOf(folder.main + folder.sub.modal + 'ModalBody', module)
    .addDecorator(withKnobs)
    .add('ModalBody', () => (
        <ModalBody>
            <div>Texte contenu dans le body</div>
        </ModalBody>
    ));
