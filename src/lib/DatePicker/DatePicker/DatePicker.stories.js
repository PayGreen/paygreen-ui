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
    formStatusDefault,
    formStatusOptions,
} from '../../../shared/constants';
import DatePicker from './DatePicker';

storiesOf(folder.form + folder.sub.datePicker + 'DatePicker', module)
    .addDecorator(withKnobs)
    .add('DatePicker', () => (
        <DatePicker
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Readonly', false)}
            fieldSize={radios(
                'Field size',
                buttonSizeOptions,
                buttonSizeDefault,
            )}
            colorStatus={select(
                'Color status',
                formStatusOptions,
                formStatusDefault,
            )}
            minimumDate={text(
                'Minimum date',
                moment()
                    .add(-1, 'M')
                    .format('DD/MM/YYYY'),
            )}
            maximumDate={text(
                'Maximum date',
                moment()
                    .add(1, 'M')
                    .format('DD/MM/YYYY'),
            )}
        />
    ));
