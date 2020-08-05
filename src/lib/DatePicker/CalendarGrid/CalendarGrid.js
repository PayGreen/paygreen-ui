import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MonthContext } from '../context/MonthContext';
import moment from 'moment';
import CalendarGridBase from './style';
import CalendarCell from '../CalendarCell/CalendarCell';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';

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

const CalendarGrid = ({ minimumDate, maximumDate, ...rest }) => {
    const [month, setMonth] = useContext(MonthContext);
    if (month === null) {
        return null;
    }

    const [startOfMonth, endOfMonth] = getMonthBoundaries(month);

    const daysOfMonth = [];
    let daysCursor = moment(startOfMonth);
    do {
        let isDisabled = false;
        if (minimumDate) {
            if (daysCursor < minimumDate) isDisabled = true;
        }
        if (maximumDate) {
            if (daysCursor > maximumDate) isDisabled = true;
        }

        daysOfMonth.push(
            <CalendarCell
                key={daysCursor.toDate()}
                date={daysCursor.clone()}
                isDisabled={isDisabled}
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
    minimumDate: PropTypes.object,
    maximumDate: PropTypes.object,
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
};

CalendarGrid.defaultProps = {
    minimumDate: null,
    maximumDate: null,
    colorStatus: formStatusDefault,
};

export default CalendarGrid;
