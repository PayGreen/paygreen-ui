import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
} from '../../../shared/constants';
import { useDropdown } from '../../Dropdown/context/DropdownContext';
import { DateContext } from '../context/DateContext';
import dayjs from '../dayjsHelper';
import config from '../dayLocaleConfig';
import CalendarCellBase from './style';

const CalendarCell = ({ date, isDisabled, handleOnChange, ...rest }) => {
    const { setOpen } = useDropdown();
    const [selectedDate, setSelectedDate] = useContext(DateContext);
    const dateFormat = config[dayjs.locale()].formats.L;

    const handleOnClick = e => {
        e.preventDefault();
        if (!isDisabled) {
            setSelectedDate(dayjs(date).format(dateFormat));
            handleOnChange(date);
            setOpen(false);
        }
    };

    return (
        <CalendarCellBase
            type="button"
            onClick={handleOnClick}
            isSelected={
                selectedDate
                    ? dayjs(date).format(dateFormat) ===
                      dayjs(selectedDate).format(dateFormat)
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
