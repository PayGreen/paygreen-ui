import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select, text } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    arrowBlockOptions,
    arrowBlockDefault,
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

storiesOf(folder.form + 'Message', module)
    .addDecorator(withKnobs)
    .add('Message', () => (
        <Message
            arrowBlock={radios(
                arrowBlockLabel,
                arrowBlockOptions,
                arrowBlockDefault,
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
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            marginBottom={select('Margin bottom', spaceOptions, spaceDefault)}
        >
            <Text textSize={fontSizeOptions.sm}>
                {text(
                    'Message content',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend aliquet libero. Morbi ultrices tristique leo vitae porta.',
                )}
            </Text>
        </Message>
    ))
    .add('Message with Icon', () => (
        <Message
            arrowBlock={radios(
                arrowBlockLabel,
                arrowBlockOptions,
                arrowBlockDefault,
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
        >
            <CautionIcon
                iconSize={iconSizeOptions.md}
                colorStatus={select(
                    colorStatusLabel,
                    formStatusOptions,
                    formStatusDefault,
                )}
            />

            <Text textSize={fontSizeOptions.sm}>
                {text(
                    'Message content',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend aliquet libero. Morbi ultrices tristique leo vitae porta.',
                )}
            </Text>
        </Message>
    ));
