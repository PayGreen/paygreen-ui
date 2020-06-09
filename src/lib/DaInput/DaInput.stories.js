import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    inputWidthOptions,
    inputWidthDefault,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import DaInput from './DaInput';

storiesOf(folder.form + 'DaInput', module)
    .addDecorator(withKnobs)
    .add(
        'Text',
        () => (
            <DaInput
                placeholder="Firstname Lastname"
                disabled={boolean('Disabled', false)}
                readOnly={boolean('Readonly', false)}
                fieldSize={radios(
                    'Field size',
                    buttonSizeOptions,
                    buttonSizeDefault,
                )}
                blockWidth={radios(
                    'Block width',
                    inputWidthOptions,
                    inputWidthDefault,
                )}
                hasHelpButton={boolean('Help button', false)}
            />
        ),
        {
            notes:
                'Same as input email, url and number (this is the default style).',
        },
    )
    .add(
        'Tel',
        () => (
            <DaInput
                type="tel"
                placeholder="+33 (0)6 11 22 33 44"
                disabled={boolean('Disabled', false)}
                readOnly={boolean('Readonly', false)}
                fieldSize={radios(
                    'Field size',
                    buttonSizeOptions,
                    buttonSizeDefault,
                )}
                hasHelpButton={boolean('Help button', false)}
            />
        ),
        {
            notes:
                'Style for input tel. It is smaller than default input because its value is always short. Input tel comes with react-input-mask library.',
        },
    );
