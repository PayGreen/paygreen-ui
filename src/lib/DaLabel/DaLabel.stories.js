import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    colorTypeOptions,
    colorTypeDefault,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import DaLabel from './DaLabel';

storiesOf(folder.main + 'DaLabel', module)
    .addDecorator(withKnobs)
    .add(
        'DaLabel',
        () => (
            <DaLabel
                colorType={radios(
                    'Color type',
                    colorTypeOptions,
                    colorTypeDefault,
                )}
                fieldSize={select(
                    'Field Size',
                    buttonSizeOptions,
                    buttonSizeDefault,
                )}
            >
                Label Description
            </DaLabel>
        ),
        {
            notes:
                'fieldSize adjusts font size to the size of input/select component associated.',
        },  
    );
