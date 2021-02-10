import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    radios,
    select,
    text,
    boolean,
} from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    blockPositionOptions,
    blockPositionDefault,
    iconSizeOptions,
    fontSizeOptions,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import Text from '../Text/Text';
import Message from './Message';
import { CautionIcon } from '../Icon/Icon';

const arrowBlockLabel = 'Arrow block';
const fieldSizeLabel = 'Field size';
const colorStatusLabel = 'Status color';
const blockWidthLabel = 'Block width';

const { wab, ...buttonColorPalletOptions } = colorPalletOptions;

storiesOf(folder.popup + 'Message', module)
    .addDecorator(withKnobs)
    .add('Message', () => (
        <Message
            arrowBlock={select(
                arrowBlockLabel,
                blockPositionOptions,
                blockPositionDefault,
            )}
            colorType={radios('Color type', colorTypeOptions, colorTypeDefault)}
            colorPallet={radios(
                'Color pallet',
                buttonColorPalletOptions,
                colorPalletOptions.status,
            )}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            fieldSize={radios(
                fieldSizeLabel,
                buttonSizeOptions,
                buttonSizeDefault,
            )}
            blockWidth={radios(
                blockWidthLabel,
                inputWidthOptions,
                inputWidthDefault,
            )}
            hasStaticWidth={boolean('Has static width', false)}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            marginBottom={select('Margin bottom', spaceOptions, spaceDefault)}
        >
            {boolean('Add icon', false) ? (
                <CautionIcon
                    iconSize={iconSizeOptions.md}
                    colorStatus={select(
                        colorStatusLabel,
                        formStatusOptions,
                        formStatusDefault,
                    )}
                />
            ) : (
                <></>
            )}
            <Text textSize={fontSizeOptions.sm}>
                {text(
                    'Message content',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend aliquet libero. Morbi ultrices tristique leo vitae porta.',
                )}
            </Text>
        </Message>
    ));
