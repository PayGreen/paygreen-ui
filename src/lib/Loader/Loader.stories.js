import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    iconSizeDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Loader from './Loader';

storiesOf(folder.loading + 'Loader', module)
    .addDecorator(withKnobs)
    .add('Loader', () => (
        <Loader
            isActive={boolean(labels.isActive, true)}
            loaderSize={select('Loader size', iconSizeOptions, iconSizeDefault)}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            paddingTop={select(labels.paddingTop, spaceOptions, spaceDefault)}
            paddingBottom={select(
                labels.paddingBottom,
                spaceOptions,
                spaceDefault,
            )}
            paddingLateral={select(
                labels.paddingLateral,
                spaceOptions,
                spaceDefault,
            )}
        />
    ));
