import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import StepNavbarItem from '../StepNavbarItem/StepNavbarItem';
import StepNavbar from './StepNavbar';

storiesOf(folder.nav + folder.sub.stepNavbar + 'StepNavbar', module)
    .addDecorator(withKnobs)
    .add('StepNavbar', () => (
        <StepNavbar>
            <a href="#">
                <StepNavbarItem
                    colorTheme={select(
                        labels.colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                >
                    1 – Step one
                </StepNavbarItem>
            </a>

            <StepNavbarItem
                isDoing={true}
                colorTheme={select(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            >
                2 – Step two
            </StepNavbarItem>

            <StepNavbarItem>3 – Step three</StepNavbarItem>
        </StepNavbar>
    ));
