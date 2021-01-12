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
import Badge from './Badge';

const colorTypeLabel = 'Color type';
const colorThemeLabel = 'Color theme';
const gradientTypeLabel = 'Gradient type';
const textSizeLabel = 'Text size';
const textLabel = 'Text';

storiesOf(folder.text + 'Badge', module)
    .addDecorator(withKnobs)
    .add('Badge', () => (
        <Badge
            htmlTag={radios('HTML tag', iconHtmlTagOptions, iconHtmlTagDefault)}
            colorType={select(
                colorTypeLabel,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorStyle={radios(
                'Color style',
                colorStyleOptions,
                colorStyleDefault,
            )}
            colorTheme={select(
                colorThemeLabel,
                colorThemeOptions,
                colorThemeDefault,
            )}
            gradient={radios(
                gradientTypeLabel,
                gradientOptions,
                gradientOptions.theme,
            )}
            textSize={select(
                textSizeLabel,
                fontSizeOptions,
                fontSizeOptions.xxs,
            )}
        >
            {text(textLabel, 'Example')}
        </Badge>
    ));
