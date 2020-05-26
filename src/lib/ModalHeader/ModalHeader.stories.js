import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    greyOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
    fontSizeOptions,
} from '../../shared/constants';
import ModalHeader from './ModalHeader';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';

storiesOf(folder.main + folder.sub.modal + 'ModalHeader', module)
    .addDecorator(withKnobs)
    .add('ModalHeader', () => (
        <ModalHeader>
            <Title
                colorPallet={colorPalletOptions.wab}
                colorWab={greyOptions.grey40}
                textSize={fontSizeOptions.md}
            >
                {text('Label', 'Title of the Modal')}
            </Title>

            <CrossIcon
                htmlTag={iconHtmlTagOptions.button}
                iconSize={iconSizeOptions.md}
                colorPallet={colorPalletOptions.wab}
                colorWab={greyOptions.grey40}
            />
        </ModalHeader>
    ));
