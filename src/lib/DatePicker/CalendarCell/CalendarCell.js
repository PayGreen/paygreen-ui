import React from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';
import CalendarCellBase from './style';
// :: import { DateContext } from '../context/DateContext';

const CalendarCell = ({ date, colorStatus, ...rest }) => {
    // Uncomment '::' when the component 'Calendar' is working
    const [selectedDate, setSelectedDate] = [null, null]; // :: useContext(DateContext);

    const handleOnClick = e => {
        // :: setSelectedDate(date);
        e.preventDefault();
    };

    return (
        <CalendarCellBase
            onClick={handleOnClick}
            isSelected={
                (date && selectedDate) &&
                date.format('DD/MM/YYYY') === selectedDate.format('DD/MM/YYYY')
            }
            colorStatus={colorStatus}
            {...rest}
        >
            {date ? date.format('D') : null}
        </CalendarCellBase>
    );
};

CalendarCell.propTypes = {
    date: PropTypes.object,
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    isDisabled: PropTypes.bool,
};

CalendarCell.defaultProps = {
    date: null,
    colorStatus: formStatusDefault,
    isDisabled: false,
};

export default CalendarCell;
