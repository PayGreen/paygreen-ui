import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, radios, text } from '@storybook/addon-knobs';
import {
    folder,
    iconHtmlTagOptions,
    iconHtmlTagDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorStyleOptions,
    colorStyleDefault,
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    fontSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Badge from './Badge';

storiesOf(folder.text + 'Badge', module)
    .addDecorator(withKnobs)
    .add('Badge', () => (
        <Badge
            htmlTag={radios(
                labels.htmlTag,
                iconHtmlTagOptions,
                iconHtmlTagDefault,
            )}
            colorType={select(
                labels.colorType,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorStyle={radios(
                labels.colorStyle,
                colorStyleOptions,
                colorStyleDefault,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            gradient={radios(
                labels.gradient,
                gradientOptions,
                gradientOptions.theme,
            )}
            textSize={select(
                labels.textSize,
                fontSizeOptions,
                fontSizeOptions.xxs,
            )}
        >
            {text(labels.text, 'Example')}
        </Badge>
    ));
