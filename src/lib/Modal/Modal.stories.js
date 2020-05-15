import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    blockWidthOptions,
    blockWidthDefault,
} from '../../shared/constants';
import Modal from './Modal';
import Title from '../Title/Title';
import CrossIcon from '../Icon/Icon';

storiesOf(folder.main + 'Modal', module)
    .addDecorator(withKnobs)
    .add('Modal', () => (
        <Modal
            blockWidth={select(
                'Block width',
                blockWidthOptions,
                blockWidthDefault,
            )}
            isOpen={boolean('is Open', true)}
        >    <ModalHeader> // une div toute bête qui aura une grid-area: header, par exemple, sans overflow. On peut lui passer n'importe quoi comme enfant, faut juste qu'elle soit en display flex et justify-content: space-between pour disposer les éléments correctements. Elle aura aussi un padding (à tester, environ 16px ?)
        <Title>Titre de la modale</Title>
      
        <CrossIcon />
      </ModalHeader>
    
      <ModalBody> // elle, contrairement au ModalHeader qui est facultatif, elle sera toujours là. Elle sera dans un grid-area: body, aura un padding identique au ModalHeader, un height: 100% et un overflow: auto pour que la modale soit scrollable
        ....plein de childrens...
            <div>test de modal</div>
      </ModalBody>
        </Modal>
    ));
