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
import label from '../../shared/labels';
import Badge from './Badge';

storiesOf(folder.text + 'Badge', module)
    .addDecorator(withKnobs)
    .add('Badge', () => (
        <Badge
            htmlTag={radios('HTML tag', iconHtmlTagOptions, iconHtmlTagDefault)}
            colorType={select(
                label.colorType,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorStyle={radios(
                'Color style',
                colorStyleOptions,
                colorStyleDefault,
            )}
            colorTheme={select(
                label.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            gradient={radios(
                label.gradient,
                gradientOptions,
                gradientOptions.theme,
            )}
            textSize={select(
                label.textSize,
                fontSizeOptions,
                fontSizeOptions.xxs,
            )}
        >
            {text(label.text, 'Example')}

            <ArrowBottomIcon
                iconSize={select(
                    label.iconSize,
                    iconSizeOptions,
                    iconSizeOptions.sm,
                )}
                marginLeft={spaceOptions.xs}
            />
        </Badge>
    ));
