import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
    inputWidthOptions,
    inputWidthDefault,
} from '../../../shared/constants';
import DatePickerInput from './DatePickerInput';
import moment from 'moment';

storiesOf(folder.form + folder.sub.datePicker + 'DatePickerInput', module)
    .addDecorator(withKnobs)
    .add('DatePickerInput', () => (
        <DatePickerInput
            placeholder={text('Placeholder', moment().format('DD/MM/YYYY'))}
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Readonly', false)}
            fieldSize={radios(
                'Field size',
                buttonSizeOptions,
                buttonSizeDefault,
            )}
            blockWidth={radios(
                'Input width',
                inputWidthOptions,
                inputWidthDefault,
            )}
            hasHelpButton={boolean('Help button', false)}
        />
    ));
