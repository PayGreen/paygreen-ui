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
import labels from '../../shared/labels';
import Text from '../Text/Text';
import Message from './Message';
import { CautionIcon } from '../Icon/Icon';

const { wab, ...buttonColorPalletOptions } = colorPalletOptions;

storiesOf(folder.popup + 'Message', module)
    .addDecorator(withKnobs)
    .add('Message', () => (
        <Message
            arrowBlock={select(
                'Arrow block',
                blockPositionOptions,
                blockPositionDefault,
            )}
            colorType={radios(
                labels.colorType,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorPallet={radios(
                labels.colorPallet,
                buttonColorPalletOptions,
                colorPalletOptions.status,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            )}
            isRounded={boolean(labels.isRounded, false)}
            fieldSize={radios(
                labels.fieldSize,
                buttonSizeOptions,
                buttonSizeDefault,
            )}
            blockWidth={select(
                labels.blockWidth,
                inputWidthOptions,
                inputWidthDefault,
            )}
            hasStaticWidth={boolean(labels.hasStaticWidth, false)}
            marginTop={select(labels.marginTop, spaceOptions, spaceDefault)}
            marginBottom={select(labels.marginTop, spaceOptions, spaceDefault)}
        >
            {boolean(labels.icon, false) ? (
                <CautionIcon
                    iconSize={iconSizeOptions.md}
                    colorStatus={select(
                        labels.colorStatus,
                        formStatusOptions,
                        formStatusDefault,
                    )}
                />
            ) : (
                <></>
            )}

            <Text textSize={fontSizeOptions.sm}>
                {text(
                    labels.text,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend aliquet libero. Morbi ultrices tristique leo vitae porta.',
                )}
            </Text>
        </Message>
    ));
