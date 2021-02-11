import React, { useState } from 'react';
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
    localeDefault,
    localeOptions,
} from '../../shared/constants';
import DatePicker from './DatePicker';

storiesOf(folder.form + 'DatePicker', module)
    .addDecorator(withKnobs)
    .add('DatePicker', () =>
        React.createElement(() => {
            const [date, setDate] = useState();

            return (
                <DatePicker
                    value={date}
                    onChange={date => setDate(date)}
                    placeholder={'Ex: ' + moment().format('DD/MM/YYYY')}
                    disabled={boolean('Disabled', false)}
                    readOnly={boolean('Readonly', false)}
                    locale={select('Locale', localeOptions, localeDefault)}
                    isRounded={boolean('Is rounded', false)}
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
                        moment().add(-1, 'M').format('DD/MM/YYYY'),
                    )}
                    maximumDate={text(
                        'Maximum date',
                        moment().add(1, 'M').format('DD/MM/YYYY'),
                    )}
                    resetDate={text(
                        'Reset date',
                        moment().format('DD/MM/YYYY'),
                    )}
                />
            );
        }),
    );
