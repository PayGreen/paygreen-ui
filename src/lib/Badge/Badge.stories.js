import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, radios, text } from '@storybook/addon-knobs';
import {
    folder,
    iconHtmlTagOptions,
    iconHtmlTagDefault,
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    colorTypeOptions,
    colorTypeDefault,
    fontSizeOptions,
} from '../../shared/constants';
import Badge from './Badge';

const colorTypeLabel = 'Color type';
const colorThemeLabel = 'Color theme';
const gradientTypeLabel = 'Gradient type';
const textSizeLabel = 'Text size';
const textLabel = 'Text';

storiesOf(folder.main + 'Badge', module)
    .addDecorator(withKnobs)
    .add('Badge', () => (
        <Badge
            htmlTag={radios('HTML tag', iconHtmlTagOptions, iconHtmlTagDefault)}
            colorType={select(
                colorTypeLabel,
                colorTypeOptions,
                colorTypeDefault,
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
