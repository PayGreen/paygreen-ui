import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
    colorPalletOptions,
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
    iconHtmlTagOptions,
} from '../../../shared/constants';
import { ArrowLeftIcon, ArrowRightIcon } from '../../Icon/Icon';
import { MonthContext } from '../context/MonthContext';
import CalendarNavbarBase from './style';

const arrowProps = {
    marginLeft: spaceOptions.sm,
    marginRight: spaceOptions.sm,
    htmlTag: iconHtmlTagOptions.button,
    colorPallet: colorPalletOptions.status,
};

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
        e.preventDefault();
        setMonth(month - 1);
    };

    /**
     * @desc Use onMonthChange function to go to next month
     * @param e{event}
     */
    const nextMonth = e => {
        e.preventDefault();
        setMonth(month + 1);
    };

    return (
        <CalendarNavbarBase colorStatus={colorStatus} {...rest}>
            <ArrowLeftIcon
                onClick={previousMonth}
                colorStatus={colorStatus}
                theme={rest.theme} // not necessary, only needed for tests
                {...arrowProps}
            />
            
            {moment().month(month).format('MMMM YYYY')}

            <ArrowRightIcon
                onClick={nextMonth}
                colorStatus={colorStatus}
                theme={rest.theme} // not necessary, only needed for tests
                {...arrowProps}
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
