import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';
import { MonthContext } from '../context/MonthContext';
import CalendarCell from '../CalendarCell/CalendarCell';
import CalendarGridBase from './style';

/**
 * @desc Return the first and last days of Month using month index.
 * @param {number} month
 */
const getMonthBoundaries = month => {
    const startOfMonth = moment().month(month).startOf('M');

    const endOfMonth = moment().month(month).add(1, 'M').startOf('M');

    return [startOfMonth, endOfMonth];
};

const CalendarGrid = ({
    minimumDate,
    maximumDate,
    handleOnChange,
    ...rest
}) => {
    const [month] = useContext(MonthContext);
    if (month === null) {
        return null;
    }

    const [startOfMonth, endOfMonth] = getMonthBoundaries(month);

    const daysOfMonth = [];
    let daysCursor = moment(startOfMonth);

    do {
        let isDisabled = false;
        if (
            (minimumDate && daysCursor < minimumDate) ||
            (maximumDate && daysCursor > maximumDate)
        ) {
            isDisabled = true;
        }

        daysOfMonth.push(
            <CalendarCell
                key={daysCursor.toDate()}
                date={daysCursor.clone()}
                handleOnChange={handleOnChange}
                isDisabled={isDisabled}
                {...rest}
            />,
        );
    } while (daysCursor.add(1, 'days').diff(endOfMonth) < 0);

    return (
        <CalendarGridBase dayOffset={startOfMonth.isoWeekday()} {...rest}>
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
