import React, { useState } from 'react';
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
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import DatePicker from './DatePicker';
import dayjs from './dayjsHelper';

// This wrapper helps to deal with react hooks without having to use React.createElement() inside stories that would make the story rerender with each prop's change and add button to change date dynamically
const DatePickerWrapper = ({ hasButton, defaultValue, ...rest }) => {
    const [date, setDate] = useState(defaultValue || '');

    return (
        <>
            <DatePicker
                {...rest}
                value={date}
                onChange={date => setDate(date)}
            />

            {hasButton && (
                <ButtonGroup align="left" marginTop="sm">
                    <button type="button" onClick={() => setDate('')}>
                        <DaButton colorTheme="tertiary" buttonSize="sm">
                            Empty date
                        </DaButton>
                    </button>

                    <button
                        type="button"
                        onClick={() => setDate(dayjs().format('DD/MM/YYYY'))}
                    >
                        <DaButton buttonSize="sm">Reset to today</DaButton>
                    </button>
                </ButtonGroup>
            )}
        </>
    );
};

storiesOf(folder.form + 'DatePicker', module)
    .addDecorator(withKnobs)
    .add('DatePicker', () => (
        <DatePickerWrapper
            placeholder={'Ex: ' + dayjs().format('DD/MM/YYYY')}
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
                dayjs().add(-1, 'M').format('DD/MM/YYYY'),
            )}
            maximumDate={text(
                'Maximum date',
                dayjs().add(1, 'M').format('DD/MM/YYYY'),
            )}
            resetDate={text('Reset date', dayjs().format('DD/MM/YYYY'))}
            icon={boolean(labels.icon, true) ? <ScheduleIcon /> : null}
        />
    ))
    .add('DatePicker with reset to today', () => (
        <DatePickerWrapper
            hasButton={true}
            placeholder={'Ex: ' + dayjs().format('DD/MM/YYYY')}
            minimumDate={text(
                'Minimum date',
                dayjs().add(-1, 'M').format('DD/MM/YYYY'),
            )}
            maximumDate={text(
                'Maximum date',
                dayjs().add(1, 'M').format('DD/MM/YYYY'),
            )}
            resetDate={dayjs().subtract(1, 'days').format('DD/MM/YYYY')}
            icon={<ScheduleIcon />}
            defaultValue={dayjs().subtract(1, 'days').format('DD/MM/YYYY')}
        />
    ));
