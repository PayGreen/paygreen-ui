import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { MonthContextProvider } from '../context/MonthContext';
import CalendarBase from './style';
import CalendarNavbar from '../CalendarNavbar/CalendarNavbar';
import CalendarWeekdays from '../CalendarWeekdays/CalendarWeekdays';
import CalendarGrid from '../CalendarGrid/CalendarGrid';

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
    locale: PropTypes.string,
};

Calendar.defaultProps = {
    currentMonth: moment().month(),
    locale: 'fr',
};

export default Calendar;
