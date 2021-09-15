import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import StepNavbarItem from './StepNavbarItem';

storiesOf(folder.nav + folder.sub.stepNavbar + 'StepNavbarItem', module)
    .addDecorator(withKnobs)
    .add('StepNavbarItem', () => (
        <StepNavbarItem
            isDoing={boolean('Is doing', false)}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
        >
            {text(labels.text, '1 – Step one')}
        </StepNavbarItem>
    ))
    .add('StepNavbarItem inside <a>', () => (
        <a href="#">
            <StepNavbarItem
                colorTheme={select(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            >
                {text(labels.text, '1 – Step one')}
            </StepNavbarItem>
        </a>
    ));
