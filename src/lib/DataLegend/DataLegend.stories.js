import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    radios,
    select,
    number,
    text,
} from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    flexDirectionOptions,
    flexDirectionDefault,
    formStatusOptions,
    formStatusDefault,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    textHtmlTagOptions,
} from '../../shared/constants';
import DataLegend from './DataLegend';
import Text from '../Text/Text';

const { wab, ...barColorPalletOptions } = colorPalletOptions;

storiesOf(folder.main + 'DataLegend', module)
    .addDecorator(withKnobs)
    .add(
        'Data Legend',
        () => (
            <DataLegend
                textSize={select('Text Size', fontSizeOptions, fontSizeDefault)}
                align={radios('Align', alignOptions, alignDefault)}
                flexDirection={select(
                    'Flex direction',
                    flexDirectionOptions,
                    flexDirectionDefault,
                )}
                legendValue={number('Legend value', 25)}
                legendUnit={text('Legend unit', '%')}
                colorPallet={radios(
                    'Color pallet value',
                    barColorPalletOptions,
                    colorPalletDefault,
                )}
                dataColor={
                    radios(
                        'Color pallet value',
                        barColorPalletOptions,
                        colorPalletDefault,
                    ) === 'status'
                        ? select(
                              'Color status value',
                              formStatusOptions,
                              formStatusDefault,
                          )
                        : select(
                              'Color theme value',
                              colorThemeOptions,
                              colorThemeDefault,
                          )
                }
            >
                <Text>
                    {text('Legend text', ' du')}
                    <Text htmlTag={textHtmlTagOptions.strong}
                    colorPallet={radios(
                        'Color pallet Legend',
                        colorPalletOptions,
                        colorPalletOptions.wab,
                    )}
                    colorTheme={select(
                        'Color theme legend',
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                    colorStatus={select(
                        'Color status legend',
                        formStatusOptions,
                        formStatusDefault,
                    )}>
                    {text('Legend text bold ', ' CO2 émis')}
                    </Text>
                    
                </Text>
            </DataLegend>
        ),
        {
            notes:
                'DataLegend component must be used to adding any text without specific component, or inside components like Card.',
        },
    );
