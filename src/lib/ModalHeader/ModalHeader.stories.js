import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    greyOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
    fontSizeOptions,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import ModalHeader from './ModalHeader';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';

storiesOf(folder.main + folder.sub.modal + 'ModalHeader', module)
    .addDecorator(withKnobs)
    .add('ModalHeader', () => (
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
    ));
