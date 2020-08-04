import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';
import CalendarWeekdaysBase from './style';

const CalendarWeekdays = props => {
    const days = moment.weekdays(true);

    return (
        <CalendarWeekdaysBase {...props}>
            {days.map(day => (
                <div key={day}>{day.charAt(0).toUpperCase()}</div>
            ))}
        </CalendarWeekdaysBase>
    );
};

CalendarWeekdays.propTypes = {
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
};

CalendarWeekdays.defaultProps = {
    colorStatus: formStatusDefault,
};

export default CalendarWeekdays;
