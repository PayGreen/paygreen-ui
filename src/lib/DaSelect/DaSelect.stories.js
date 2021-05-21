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
import DaSelect from './DaSelect';

const options = [
    {
        value: '',
        text: 'Choose your option...',
        disabled: true,
    },
    {
        value: 'first',
        text: 'First option',
    },
    {
        value: 'second',
        text: 'Second option',
    },
    {
        value: 'third',
        text: 'Third option',
    },
];

storiesOf(folder.form + 'DaSelect', module)
    .addDecorator(withKnobs)
    .add('DaSelect', () => (
        <DaSelect
            defaultValue=""
            options={options}
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Readonly', false)}
            isRounded={boolean('Is rounded', false)}
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
            hasStaticWidth={boolean('Has static width', false)}
            hasHelpButton={boolean('Help button', false)}
        />
    ));
