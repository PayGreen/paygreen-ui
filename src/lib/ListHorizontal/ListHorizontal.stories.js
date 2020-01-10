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
import Text from '../Text/Text';
import Link from '../Link/Link';
import ListHorizontal from './ListHorizontal';

const colorTypeLabel = 'Color type';
const colorPalletLabel = 'Color pallet';
const colorThemeLabel = 'Color theme';
const colorWabLabel = 'Grey color';
const colorStatusLabel = 'Color status';

const sampleTexts = ['Text one', 'Text two', 'Text three', 'Text four'];
const sampleLinks = ['Link one', 'Link two', 'Link three', 'Link four'];

storiesOf(folder.main + 'ListHorizontal', module)
    .addDecorator(withKnobs)
    .add('ListHorizontal of Texts', () => (
        <ListHorizontal
            colorType={radios(
                colorTypeLabel,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorPallet={radios(
                colorPalletLabel,
                colorPalletOptions,
                colorPalletOptions.wab,
            )}
            colorTheme={select(
                colorThemeLabel,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(colorWabLabel, greyOptions, greyOptions.grey30)}
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            align={select('Elements align', alignOptions, alignDefault)}
            hasBackground={boolean('Has background', true)}
            paddingLateral={select(
                'Lateral paddings',
                spaceOptions,
                spaceOptions.sm,
            )}
            paddingTop={select('Padding top', spaceOptions, spaceOptions.sm)}
            paddingBottom={select(
                'Padding bottom',
                spaceOptions,
                spaceOptions.sm,
            )}
        >
            {sampleTexts.map((element, index) => (
                <Text
                    key={index}
                    colorType={radios(
                        colorTypeLabel,
                        colorTypeOptions,
                        colorTypeDefault,
                    )}
                    colorPallet={radios(
                        colorPalletLabel,
                        colorPalletOptions,
                        colorPalletOptions.wab,
                    )}
                    colorTheme={select(
                        colorThemeLabel,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    colorWab={select(
                        colorWabLabel,
                        greyOptions,
                        greyOptions.grey30,
                    )}
                    colorStatus={select(
                        colorStatusLabel,
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
                colorTypeLabel,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorPallet={radios(
                colorPalletLabel,
                colorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                colorThemeLabel,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(colorWabLabel, greyOptions, greyOptions.grey30)}
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            align={select('Elements align', alignOptions, alignDefault)}
            marginLateral={select(
                'Lateral margins',
                spaceOptions,
                spaceDefault,
            )}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            marginBottom={select('Margin bottom', spaceOptions, spaceDefault)}
        >
            {sampleLinks.map((element, index) => (
                <a href="#" key={index}>
                    <Link
                        colorType={radios(
                            colorTypeLabel,
                            colorTypeOptions,
                            colorTypeDefault,
                        )}
                        colorPallet={radios(
                            colorPalletLabel,
                            colorPalletOptions,
                            colorPalletDefault,
                        )}
                        colorTheme={select(
                            colorThemeLabel,
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                        colorWab={select(
                            colorWabLabel,
                            greyOptions,
                            greyOptions.grey30,
                        )}
                        colorStatus={select(
                            colorStatusLabel,
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
