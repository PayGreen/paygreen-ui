import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    blockWidthOptions,
    blockWidthDefault,
        colorPalletOptions,
        greyOptions,
        iconSizeOptions,
        iconHtmlTagOptions
} from '../../shared/constants';
import Modal from './Modal';
import { ModalHeader } from './style/base';
import { ModalBody } from './style/base';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';

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
        >
            <ModalHeader>
                <Title>Titre de la Modale</Title>
                <CrossIcon 
                 htmlTag={iconHtmlTagOptions.button}
                 iconSize={iconSizeOptions.lg}
                 colorPallet={colorPalletOptions.wab}
                 colorWab={greyOptions.grey40}/>
            </ModalHeader>
            <ModalBody>
                <div>Texte contenu dans le body</div>
            </ModalBody>
        </Modal>
    ));
