import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    formStatusOptions,
    formStatusDefault,
    alignOptions,
    alignDefault,
    spaceOptions,
    spaceDefault,
    textHtmlTagOptions,
    fontSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Text from '../Text/Text';
import Link from '../Link/Link';
import ListHorizontal from './ListHorizontal';

const sampleTexts = ['Text one', 'Text two', 'Text three', 'Text four'];
const sampleLinks = ['Link one', 'Link two', 'Link three', 'Link four'];

storiesOf(folder.list + 'ListHorizontal', module)
    .addDecorator(withKnobs)
    .add('ListHorizontal of Texts', () => (
        <ListHorizontal
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
            colorWab={select(labels.colorWab, greyOptions, greyOptions.grey30)}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            )}
            align={select(labels.align, alignOptions, alignDefault)}
            hasBackground={boolean(labels.hasBackground, true)}
            paddingLateral={select(
                labels.paddingLateral,
                spaceOptions,
                spaceOptions.sm,
            )}
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
        >
            {sampleTexts.map((element, index) => (
                <Text
                    key={index}
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
                    colorWab={select(
                        labels.colorWab,
                        greyOptions,
                        greyOptions.grey30,
                    )}
                    colorStatus={select(
                        labels.colorStatus,
                        formStatusOptions,
                        formStatusDefault,
                    )}
                    htmlTag={textHtmlTagOptions.span}
                    textSize={fontSizeOptions.xs}
                >
                    {element}
                </Text>
            ))}
        </ListHorizontal>
    ))
    .add('ListHorizontal of Links', () => (
        <ListHorizontal
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
            colorWab={select(labels.colorWab, greyOptions, greyOptions.grey30)}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            )}
            align={select(labels.align, alignOptions, alignDefault)}
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
            {sampleLinks.map((element, index) => (
                <a href="#" key={index}>
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
                        colorWab={select(
                            labels.colorWab,
                            greyOptions,
                            greyOptions.grey30,
                        )}
                        colorStatus={select(
                            labels.colorStatus,
                            formStatusOptions,
                            formStatusDefault,
                        )}
                        hasUppercase={true}
                        hasUnderline={false}
                    >
                        {element}
                    </Link>
                </a>
            ))}
        </ListHorizontal>
    ));
