import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    greyOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
    fontSizeOptions,
} from '../../shared/constants';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody  from '../ModalBody/ModalBody';
import ModalContent from './ModalContent';

storiesOf(folder.main + folder.sub.modal + 'ModalContent', module)
    .addDecorator(withKnobs)
    .add('ModalContent', () => (
        <ModalContent
            blockWidth={select(
                'Block width',
                blockWidthOptions,
                blockWidthDefault,
            )}
        >
            <ModalHeader>
                <Title
                    colorPallet={colorPalletOptions.wab}
                    colorWab={greyOptions.grey40}
                    textSize={fontSizeOptions.md}
                >
                    Que voulez-vous faire ?
                </Title>

                <CrossIcon
                    htmlTag={iconHtmlTagOptions.button}
                    iconSize={iconSizeOptions.md}
                    colorPallet={colorPalletOptions.wab}
                    colorWab={greyOptions.grey40}
                />
            </ModalHeader>

            <ModalBody>
                <div>Texte contenu dans le body</div>
            </ModalBody>
        </ModalContent>
    ));
