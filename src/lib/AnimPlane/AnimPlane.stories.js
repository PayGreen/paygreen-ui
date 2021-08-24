import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import AnimPlane from './AnimPlane';

storiesOf(folder.media + 'AnimPlane', module)
    .addDecorator(withKnobs)
    .add('AnimPlane', () => (
        <AnimPlane
            isActive={boolean(labels.isActive, false)}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
        />
    ));
