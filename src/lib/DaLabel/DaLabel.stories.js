import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
    labelHtmlTagOptions,
    labelHtmlTagDefault,
} from '../../shared/constants';
import DaLabel from './DaLabel';

storiesOf(folder.form + 'DaLabel', module)
    .addDecorator(withKnobs)
    .add(
        'DaLabel',
        () => (
            <DaLabel
                fieldSize={select(
                    'Field Size',
                    buttonSizeOptions,
                    buttonSizeDefault,
                )}
                htmlTag={select(
                    'HTML tag',
                    labelHtmlTagOptions,
                    labelHtmlTagDefault,
                )}
                isRequired={boolean('Is required', false)}
            >
                Label Description
            </DaLabel>
        ),
        {
            notes:
                'fieldSize adjusts font size and padding to the size of input/select component associated.',
        },
    );
