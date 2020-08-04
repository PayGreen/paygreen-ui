import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { MonthContext } from '../context/MonthContext';
import CalendarNavbarBase from './style';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';
import { ThemeDefault } from '../../../theme';
import { ArrowLeftIcon, ArrowRightIcon } from '../../Icon/Icon';

const CalendarNavbar = ({ ...rest }) => {
    const [month, setMonth] = useContext(MonthContext);
    if (!month) {
        return null;
    }

    /**
     * @desc Use onMonthChange function to go to previous month
     * @param e{event}
     */
    const previousMonth = e => {
        setMonth(month - 1);
        e.preventDefault();
    };
    /**
     * @desc Use onMonthChange function to go to next month
     * @param e{event}
     */
    const nextMonth = e => {
        setMonth(month + 1);
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
            <div className="arrow-button">
                <ArrowLeftIcon
                    onClick={previousMonth}
                    colorPallet="wab"
                    colorWab="white00"
                    theme={ThemeDefault}
                />
            </div>
            <span>{capitalize(month)}</span>
            <div className="arrow-button">
                <ArrowRightIcon
                    onClick={nextMonth}
                    colorPallet="wab"
                    colorWab="white00"
                    theme={ThemeDefault}
                />
            </div>
        </CalendarNavbarBase>
    );
};

CalendarNavbar.propTypes = {
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
};

CalendarNavbar.defaultProps = {
    colorStatus: formStatusDefault,
};

export default CalendarNavbar;
