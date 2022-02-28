import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import StepNavbarItem from './StepNavbarItem';

export default {
    title: folder.nav + folder.sub.stepNavbar + 'StepNavbarItem',
    argTypes: {
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
            defaultValue: colorThemeDefault,
        },

        isDoing: {
            name: labels.isDoing,
            control: 'boolean',
            defaultValue: false,
        },
        text: {
            name: labels.text,
            control: 'text',
            defaultValue: '1 – Step one',
        },
    },
};

export const SimpleNavBarItem = ({ isDoing, colorTheme, text }) => {
    return (
        <StepNavbarItem isDoing={isDoing} colorTheme={colorTheme}>
            {text}
        </StepNavbarItem>
    );
};
export const LinkNavBarItem = ({ isDoing, colorTheme, text }) => {
    return (
        <a href="#">
            <StepNavbarItem isDoing={isDoing} colorTheme={colorTheme}>
                {text}
            </StepNavbarItem>
        </a>
    );
};
