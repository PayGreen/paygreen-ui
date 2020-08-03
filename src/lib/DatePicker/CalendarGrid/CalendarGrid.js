import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CalendarGridBase from './style/index';
import CalendarCell from '../CalendarCell/CalendarCell';

/**
 * @desc Return the first and last days of Month using month index.
 * @param {number} month
 */
const getMonthBoundaries = month => {
    const startOfMonth = moment()
        .month(month)
        .startOf('M');

    const endOfMonth = moment()
        .month(month)
        .add(1, 'M')
        .startOf('M');

    return [startOfMonth, endOfMonth];
};

const CalendarGrid = ({ month, ...rest }) => {
    const [startOfMonth, endOfMonth] = getMonthBoundaries(month);

    const daysOfMonth = [];
    let daysCursor = moment(startOfMonth);
    do {
        daysOfMonth.push(
            <CalendarCell
                key={daysCursor.toDate()}
                date={daysCursor.clone()}
                {...rest}
            />,
        );
    } while (daysCursor.add(1, 'days').diff(endOfMonth) < 0);

    return (
        <CalendarGridBase offset={startOfMonth.isoWeekday()} {...rest}>
            {daysOfMonth}
        </CalendarGridBase>
    );
};

CalendarGrid.propTypes = {
    month: PropTypes.number,
};

CalendarGrid.defaultProps = {
    month: moment().month(),
};

export default CalendarGrid;
