import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    formStatusOptions,
    formStatusDefault,
    fontSizeOptions,
    alignOptions,
    alignDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Title from './Title';

storiesOf(folder.text + 'Title', module)
    .addDecorator(withKnobs)
    .add('Title', () => (
        <Title
            hasUnderline={boolean(labels.hasUnderline, true)}
            colorType={radios(
                labels.colorType,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorPallet={radios(
                labels.colorPallet,
                colorPalletOptions,
                colorPalletOptions.wab,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(labels.colorWab, greyOptions, greyOptions.grey60)}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            )}
            textSize={select(
                labels.textSize,
                fontSizeOptions,
                fontSizeOptions.lg,
            )}
            align={radios(labels.align, alignOptions, alignDefault)}
            marginLateral={select(
                labels.marginLateral,
                spaceOptions,
                spaceDefault,
            )}
            marginTop={select(labels.marginTop, spaceOptions, spaceDefault)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceDefault,
            )}
        >
            Your title with <strong>an emphasis</strong>
        </Title>
    ));
