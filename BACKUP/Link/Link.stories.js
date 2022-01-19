import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    select,
    text,
    radios,
    boolean,
} from '@storybook/addon-knobs';
import {
    folder,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Text from '../Text/Text';
import Link from './Link';

storiesOf(folder.button + 'Link', module)
    .addDecorator(withKnobs)
    .add('Link in Text', () => (
        <Text
            colorType={radios(
                labels.colorType,
                colorTypeOptions,
                colorTypeDefault,
            )}
        >
            <a href="#">
                <Link
                    colorType={radios(
                        labels.colorType,
                        colorTypeOptions,
                        colorTypeDefault,
                    )}
                    colorPallet={radios(
                        labels.colorPallet,
                        colorPalletOptions,
                        colorPalletDefault,
                    )}
                    colorTheme={select(
                        labels.colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    colorWab={select(labels.colorWab, greyOptions, greyDefault)}
                    colorStatus={select(
                        labels.colorStatus,
                        formStatusOptions,
                        formStatusDefault,
                    )}
                    hasUnderline={boolean(labels.hasUnderline, true)}
                    hasUppercase={boolean(labels.hasUppercase, false)}
                >
                    {text(labels.text, 'Link text')}
                </Link>
            </a>{' '}
            curabitur congue varius ex et posuere. Maecenas tincidunt diam ut
            nisl porttitor scelerisque. Donec egestas elit dolor, quis eleifend
            ipsum sagittis ut. Proin molestie lorem et neque tempus tristique.
            Mauris finibus dui sem, nec suscipit mi porta a.
        </Text>
    ))
    .add('List of Links', () => (
        <>
            <a href="#">
                <Link
                    colorTheme={colorThemeOptions.secondary}
                    hasUnderline={false}
                    paddingTop={select(
                        labels.paddingTop,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    paddingBottom={select(
                        labels.paddingBottom,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    paddingLeft={select(
                        labels.paddingLeft,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    paddingRight={select(
                        labels.paddingRight,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                >
                    First link
                </Link>
            </a>

            <a href="#">
                <Link
                    colorTheme={colorThemeOptions.tertiary}
                    hasUnderline={false}
                    paddingTop={select(
                        labels.paddingTop,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    paddingBottom={select(
                        labels.paddingBottom,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    paddingLeft={select(
                        labels.paddingLeft,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    paddingRight={select(
                        labels.paddingRight,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                >
                    Second link
                </Link>
            </a>
        </>
    ));
