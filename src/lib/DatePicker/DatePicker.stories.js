import React, { useState } from 'react';
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

export default {
    title: folder.form + 'DatePicker',
    argTypes: {
        locale: {
            name: 'Locale',
            options: Object.values(localeOptions),
            control: 'select',
        },
        colorStatus: {
            name: labels.colorStatus,
            options: Object.values(formStatusOptions),
            control: 'select',
        },
        fieldSize: {
            name: labels.fieldSize,
            options: Object.values(buttonSizeOptions),
            control: 'radio',
        },
        disabled: {
            name: labels.disabled,
            control: 'boolean',
        },
        readOnly: {
            name: labels.readOnly,
            control: 'boolean',
        },
        isRounded: {
            name: labels.isRounded,
            control: 'boolean',
        },
        icon: {
            name: labels.icon,
            control: 'boolean',
        },
        minimumDate: {
            name: 'Minimum date',
            control: 'text',
        },
        maximumDate: {
            name: 'Maximum date',
            control: 'text',
        },
        resetDate: {
            name: 'Reset date',
            control: 'text',
        },
    },
};

export const DatePickerStory = ({ icon, ...args }) => (
    <DatePickerWrapper
        placeholder={'Ex: ' + dayjs().format('DD/MM/YYYY')}
        icon={icon ? <ScheduleIcon /> : null}
        {...args}
    />
);
export const DatePickerStoryWithReset = ({ icon, ...args }) => (
    <DatePickerWrapper
        hasButton={true}
        placeholder={'Ex: ' + dayjs().format('DD/MM/YYYY')}
        icon={<ScheduleIcon />}
        defaultValue={dayjs().subtract(1, 'days').format('DD/MM/YYYY')}
        {...args}
    />
);

DatePickerStory.args = {
    disabled: false,
    readOnly: false,
    isRounded: false,
    locale: localeDefault,
    fieldSize: buttonSizeDefault,
    colorStatus: formStatusDefault,
    minimumDate: dayjs().add(-1, 'M').format('DD/MM/YYYY'),
    maximumDate: dayjs().add(1, 'M').format('DD/MM/YYYY'),
    resetDate: dayjs().format('DD/MM/YYYY'),
    icon: true,
};

DatePickerStoryWithReset.args = {
    disabled: false,
    readOnly: false,
    isRounded: false,
    locale: localeDefault,
    fieldSize: buttonSizeDefault,
    colorStatus: formStatusDefault,
    minimumDate: dayjs().add(-1, 'M').format('DD/MM/YYYY'),
    maximumDate: dayjs().add(1, 'M').format('DD/MM/YYYY'),
    resetDate: dayjs().subtract(1, 'days').format('DD/MM/YYYY'),
    icon: true,
};
