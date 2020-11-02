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
} from '../../shared/constants';
import DatePicker from './DatePicker';

storiesOf(folder.form + 'DatePicker', module)
    .addDecorator(withKnobs)
    .add('DatePicker', () =>
        React.createElement(() => {
            const [date, setDate] = useState(
                moment().startOf('month').format('DD/MM/YYYY'),
            );

            return (
                <DatePicker
                    disabled={boolean('Disabled', false)}
                    readOnly={boolean('Readonly', false)}
                    locale={localeDefault}
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
                    value={date}
                    resetDate={text(
                        'Reset date',
                        moment().format('DD/MM/YYYY'),
                    )}
                    onChange={date => setDate(date)}
                />
            );
        }),
    );
