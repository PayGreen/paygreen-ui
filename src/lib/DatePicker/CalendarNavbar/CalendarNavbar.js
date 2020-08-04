import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CalendarNavbarBase from './style';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';
import { ThemeDefault } from '../../../theme';
import { ArrowLeftIcon, ArrowRightIcon } from '../../Icon/Icon';

const CalendarNavbar = ({ month, onMonthChange, ...rest }) => {
    /**
     * @desc Use onMonthChange function to go to previous month
     * @param e{event}
     */
    const previousMonth = e => {
        onMonthChange(month - 1);
        e.preventDefault();
    };
    /**
     * @desc Use onMonthChange function to go to next month
     * @param e{event}
     */
    const nextMonth = e => {
        onMonthChange(month + 1);
        e.preventDefault();
    };

    /**
     * @desc Return a formatted string containing current month and year
     * @param monthIndex{number} The month index used by momentJS (Zero indexed)
     */
    const capitalize = monthIndex => {
        let monthLabel = moment()
            .month(monthIndex)
            .format('MMMM YYYY');

        return monthLabel.charAt(0).toUpperCase() + monthLabel.slice(1);
    };

    return (
        <CalendarNavbarBase {...rest}>
            <ArrowLeftIcon
                onClick={previousMonth}
                colorPallet="wab"
                colorWab="white00"
                theme={ThemeDefault}
            />
            <span>{capitalize(month)}</span>
            <ArrowRightIcon
                onClick={nextMonth}
                colorPallet="wab"
                colorWab="white00"
                theme={ThemeDefault}
            />
        </CalendarNavbarBase>
    );
};

CalendarNavbar.propTypes = {
    month: PropTypes.number,
    onMonthChange: PropTypes.func,
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
};

CalendarNavbar.defaultProps = {
    month: moment().month(),
    onMonthChange: () => {},
    colorStatus: formStatusDefault,
};

export default CalendarNavbar;
