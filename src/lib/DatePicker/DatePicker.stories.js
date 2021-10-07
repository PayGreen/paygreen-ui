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
import labels from '../../shared/labels';
import { ScheduleIcon } from '../Icon/Icon';
import DaButton from '../DaButton/DaButton';
import DatePicker from './DatePicker';

// This wrapper helps to deal with react hooks without having to use React.createElement() inside stories that would make the story rerender with each prop's change and add button to change date dynamically
const DatePickerWrapper = ({ hasButton, ...rest }) => {
    const [date, setDate] = useState();

    return (
        <>
            <DatePicker
                {...rest}
                value={date}
                onChange={date => setDate(date)}
            />

            {hasButton && (
                <button
                    type="button"
                    onClick={() => setDate(moment().format('DD/MM/YYYY'))}
                >
                    <DaButton>Reset to today</DaButton>
                </button>
            )}
        </>
    );
};

storiesOf(folder.form + 'DatePicker', module)
    .addDecorator(withKnobs)
    .add('DatePicker', () => (
        <DatePickerWrapper
            placeholder={'Ex: ' + moment().format('DD/MM/YYYY')}
            disabled={boolean(labels.disabled, false)}
            readOnly={boolean(labels.readOnly, false)}
            locale={select('Locale', localeOptions, localeDefault)}
            isRounded={boolean(labels.isRounded, false)}
            fieldSize={radios(
                labels.fieldSize,
                buttonSizeOptions,
                buttonSizeDefault,
            )}
            colorStatus={select(
                labels.colorStatus,
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
            resetDate={text('Reset date', moment().format('DD/MM/YYYY'))}
            icon={boolean(labels.icon, true) ? <ScheduleIcon /> : null}
        />
    ))
    .add('DatePicker with reset to today', () => (
        <DatePickerWrapper
            hasButton={true}
            placeholder={'Ex: ' + moment().format('DD/MM/YYYY')}
            locale={localeDefault}
            isRounded={false}
            fieldSize={buttonSizeDefault}
            colorStatus={formStatusDefault}
            minimumDate={text(
                'Minimum date',
                moment().add(-1, 'M').format('DD/MM/YYYY'),
            )}
            maximumDate={text(
                'Maximum date',
                moment().add(1, 'M').format('DD/MM/YYYY'),
            )}
            resetDate={text('Reset date', moment().format('DD/MM/YYYY'))}
            icon={<ScheduleIcon />}
        />
    ));
