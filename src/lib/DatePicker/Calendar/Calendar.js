import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { MonthContextProvider } from '../context/MonthContext';
import CalendarBase from './style';
import CalendarNavbar from '../CalendarNavbar/CalendarNavbar';
import CalendarWeekdays from '../CalendarWeekdays/CalendarWeekdays';
import CalendarGrid from '../CalendarGrid/CalendarGrid';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';

const Calendar = ({
    currentMonth,
    locale,
    minimumDate,
    maximumDate,
    ...rest
}) => {
    const [month, setMonth] = useState(currentMonth);
    moment.locale(locale);

    return (
        <MonthContextProvider value={[month, setMonth]}>
            <CalendarBase {...rest}>
                <CalendarNavbar {...rest} />
                <CalendarWeekdays {...rest} />
                <CalendarGrid
                    minimumDate={minimumDate}
                    maximumDate={maximumDate}
                    {...rest}
                />
            </CalendarBase>
        </MonthContextProvider>
    );
};

Calendar.propTypes = {
    currentMonth: PropTypes.number,
    locale: PropTypes.string, // Moment Local Code in 2 letters
    minimumDate: PropTypes.object,
    maximumDate: PropTypes.object,
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
};

Calendar.defaultProps = {
    currentMonth: moment().month(),
    locale: 'fr',
    minimumDate: null,
    maximumDate: null,
    colorStatus: formStatusDefault,
};

export default Calendar;
