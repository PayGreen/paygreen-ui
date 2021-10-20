import React from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';
import dayjs from '../dayjsHelper';
import config from '../dayLocaleConfig';
import CalendarWeekdaysBase from './style';

const CalendarWeekdays = props => {
    const days = config[dayjs.locale()].weekdays;

    return (
        <CalendarWeekdaysBase {...props}>
            {days.map(day => (
                <div key={day}>{day.charAt(0)}</div>
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
