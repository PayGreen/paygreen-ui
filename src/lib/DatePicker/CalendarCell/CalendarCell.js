import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';
import config from '../localeConfig';
import { useDropdown } from '../../Dropdown/context/DropdownContext';
import { DateContext } from '../context/DateContext';
import CalendarCellBase from './style';

const CalendarCell = ({ date, isDisabled, handleOnChange, ...rest }) => {
    const { setOpen } = useDropdown();
    const [selectedDate, setSelectedDate] = useContext(DateContext);
    const dateFormat = config['pg-en'].longDateFormat.L;

    const handleOnClick = e => {
        e.preventDefault();
        if (!isDisabled) {
            setSelectedDate(date);
            handleOnChange(date);
            setOpen(false);
        }
    };

    return (
        <CalendarCellBase
            onClick={handleOnClick}
            isSelected={
                selectedDate
                    ? date.format(dateFormat) ===
                      selectedDate.format(dateFormat)
                    : false
            }
            isDisabled={isDisabled}
            {...rest}
        >
            {date.format('D')}
        </CalendarCellBase>
    );
};

CalendarCell.propTypes = {
    date: PropTypes.object.isRequired,
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    isDisabled: PropTypes.bool,
};

CalendarCell.defaultProps = {
    colorStatus: formStatusDefault,
    isDisabled: false,
};

export default CalendarCell;
