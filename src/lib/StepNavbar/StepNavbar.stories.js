import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import StepNavbarItem from '../StepNavbarItem/StepNavbarItem';
import StepNavbar from './StepNavbar';

export default {
    title: folder.nav + folder.sub.stepNavbar + 'StepNavbar',
    argTypes: {
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
            defaultValue: colorThemeDefault,
        },
    },
};

export const SimpleNavBar = ({ colorTheme }) => {
    return (
        <StepNavbar>
            <a href="#">
                <StepNavbarItem colorTheme={colorTheme}>
                    1 – Step one
                </StepNavbarItem>
            </a>

            <StepNavbarItem isDoing={true} colorTheme={colorTheme}>
                2 – Step two
            </StepNavbarItem>

            <StepNavbarItem>3 – Step three</StepNavbarItem>
        </StepNavbar>
    );
};
