import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    positionOptions,
    positionDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import MenuClose from './MenuClose';

storiesOf(folder.nav + folder.sub.control + 'MenuClose', module)
    .addDecorator(withKnobs)
    .add('MenuClose', () => (
        <MenuClose
            isOpen={boolean(labels.isOpen, true)}
            position={radios(labels.position, positionOptions, positionDefault)}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
        />
    ));
