import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    colorPalletOptions,
    greyOptions,
    spaceOptions,
} from '../../shared/constants';
import { PenIcon, CheckIcon } from '../Icon/Icon';
import { StepNavbarItemBase } from './style';

const StepNavbarItem = props => {
    const iconProps = {
        theme: props.theme, // not necessary, only needed for tests
        colorPallet: colorPalletOptions.wab,
        iconSize: iconSizeOptions.xs,
        marginLeft: spaceOptions.xs,
    };

    return (
        <StepNavbarItemBase {...props}>
            <span>
                {props.children}

                {props.isDoing ? (
                    <PenIcon {...iconProps} colorWab={greyOptions.grey60} />
                ) : (
                    <CheckIcon
                        {...iconProps}
                        colorWab={greyOptions.white00}
                        className="done"
                    />
                )}
            </span>
        </StepNavbarItemBase>
    );
};

StepNavbarItem.propTypes = {
    isDoing: PropTypes.bool,
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

StepNavbarItem.defaultProps = {
    isDoing: false,
    colorTheme: colorThemeDefault,
};

export default StepNavbarItem;
