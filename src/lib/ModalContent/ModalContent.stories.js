import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    greyOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
    fontSizeOptions,
    blockWidthOptions,
    blockWidthDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody from '../ModalBody/ModalBody';
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
            <ModalHeader
                paddingLateral={select(
                    "ModalHeader's lateral paddings",
                    spaceOptions,
                    spaceDefault,
                )}
                paddingTop={select(
                    "ModalHeader's padding top",
                    spaceOptions,
                    spaceDefault,
                )}
                paddingBottom={select(
                    "ModalHeader's padding bottom",
                    spaceOptions,
                    spaceDefault,
                )}
            >
                <Title
                    colorPallet={colorPalletOptions.wab}
                    colorWab={greyOptions.grey40}
                    textSize={fontSizeOptions.md}
                >
                    {text('Label', 'This is the Title')}
                </Title>

                <CrossIcon
                    htmlTag={iconHtmlTagOptions.button}
                    iconSize={iconSizeOptions.md}
                    colorPallet={colorPalletOptions.wab}
                    colorWab={greyOptions.grey40}
                />
            </ModalHeader>

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
                    Curabitur congue varius ex et posuere. Maecenas tincidunt
                    diam ut nisl porttitor scelerisque.
                </div>
            </ModalBody>
        </ModalContent>
    ));
