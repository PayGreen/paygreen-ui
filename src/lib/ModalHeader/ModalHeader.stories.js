import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
    fontSizeOptions,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';
import ModalHeader from './ModalHeader';

storiesOf(folder.popup + folder.sub.modal + 'ModalHeader', module)
    .addDecorator(withKnobs)
    .add('ModalHeader', () => (
        <ModalHeader
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
            <Title textSize={fontSizeOptions.md}>
                {text('Title', 'This is the Title')}
            </Title>

            <CrossIcon
                htmlTag={iconHtmlTagOptions.button}
                iconSize={iconSizeOptions.md}
                colorPallet={colorPalletOptions.wab}
            />
        </ModalHeader>
    ));
