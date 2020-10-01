import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { MonthContextProvider } from '../context/MonthContext';
import CalendarNavbar from '../CalendarNavbar/CalendarNavbar';
import CalendarWeekdays from '../CalendarWeekdays/CalendarWeekdays';
import CalendarGrid from '../CalendarGrid/CalendarGrid';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';

const Calendar = ({
    currentMonth,
    minimumDate,
    maximumDate,
    ...rest
}) => {
    const [month, setMonth] = useState(currentMonth);

    useEffect(() => {
        setMonth(currentMonth);
    }, [currentMonth]);

    return (
        <MonthContextProvider value={[month, setMonth]}>
            <CalendarNavbar {...rest} />
            <CalendarWeekdays {...rest} />
            <CalendarGrid
                minimumDate={minimumDate}
                maximumDate={maximumDate}
                {...rest}
            />
        </MonthContextProvider>
    );
};

Calendar.propTypes = {
    currentMonth: PropTypes.number,
    minimumDate: PropTypes.object,
    maximumDate: PropTypes.object,
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
};

Calendar.defaultProps = {
    currentMonth: moment().month(),
    minimumDate: null,
    maximumDate: null,
    colorStatus: formStatusDefault,
};

export default Calendar;
