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
import ModalHeader from './ModalHeader';
import Title from '../Title/Title';
import { CrossIcon } from '../Icon/Icon';

storiesOf(folder.main + folder.sub.modal + 'ModalHeader', module)
    .addDecorator(withKnobs)
    .add('ModalHeader', () => (
        <ModalHeader
            paddingLateral={select(
                'Lateral padding',
                spaceOptions,
                spaceOptions.sm,
            )}
            paddingTop={select('Padding top', spaceOptions, spaceOptions.sm)}
            paddingBottom={select(
                'Padding bottom',
                spaceOptions,
                spaceOptions.sm,
            )}
        >
            <Title textSize={fontSizeOptions.md}>
                {text('Label', 'This is the Title')}
            </Title>

            <CrossIcon
                htmlTag={iconHtmlTagOptions.button}
                iconSize={iconSizeOptions.md}
                colorPallet={colorPalletOptions.wab}
            />
        </ModalHeader>
    ));
