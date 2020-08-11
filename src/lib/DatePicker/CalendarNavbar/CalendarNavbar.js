import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { MonthContext } from '../context/MonthContext';
import CalendarNavbarBase from './style';
import {
    colorPalletOptions,
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
    iconHtmlTagOptions,
} from '../../../shared/constants';
import { ThemeDefault } from '../../../theme';
import { ArrowLeftIcon, ArrowRightIcon } from '../../Icon/Icon';

const CalendarNavbar = ({ colorStatus, ...rest }) => {
    const [month, setMonth] = useContext(MonthContext);
    if (month === null) {
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
        <CalendarNavbarBase colorStatus={colorStatus} {...rest}>
            <ArrowLeftIcon
                onClick={previousMonth}
                colorPallet={colorPalletOptions.status}
                colorStatus={colorStatus}
                theme={ThemeDefault}
                marginLeft={spaceOptions.sm}
                marginRight={spaceOptions.sm}
                htmlTag={iconHtmlTagOptions.button}
            />
            {capitalize(month)}
            <ArrowRightIcon
                onClick={nextMonth}
                colorPallet={colorPalletOptions.status}
                colorStatus={colorStatus}
                theme={ThemeDefault}
                marginLeft={spaceOptions.sm}
                marginRight={spaceOptions.sm}
                htmlTag={iconHtmlTagOptions.button}
            />
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
