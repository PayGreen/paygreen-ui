import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    text,
    select,
    radios,
    boolean,
} from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeDefault,
    buttonSizeOptions,
    inputWidthDefault,
    inputWidthOptions,
    formStatusDefault,
    formStatusOptions,
} from '../../../shared/constants';
import DatePicker from './DatePicker';

storiesOf(folder.form + folder.sub.datePicker + 'DatePicker', module)
    .addDecorator(withKnobs)
    .add('DatePicker', () => (
        <DatePicker
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
            colorStatus={select(
                'Color status',
                formStatusOptions,
                formStatusDefault,
            )}
        />
    ));
