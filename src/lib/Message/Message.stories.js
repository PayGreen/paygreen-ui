import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select } from '@storybook/addon-knobs';
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
} from '../../shared/constants';
import Text from '../Text/Text';
import Message from './Message';
import { CautionIcon } from '../Icon/Icon';

const fieldSizeLabel = 'Field size';
const colorStatusLabel = 'Status color';
const blockWidthLabel = 'Block width';
const arrowBlockLabel = 'Arrow block';

storiesOf(folder.form + 'Message', module)
    .addDecorator(withKnobs)
    .add('Message', () => (
        <Message
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
            arrowBlock={radios(
                arrowBlockLabel,
                arrowBlockOptions,
                arrowBlockDefault,
            )}
        >
            <Text>
                Message d'erreur. Je répète ceci est un message d'erreur. Et les
                erreurs c'est pas bien, pas bien du tout. Vraiment pas cool.
            </Text>
        </Message>
    ))
    .add('Message with Icon', () => (
        <Message
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
            arrowBlock={radios(
                arrowBlockLabel,
                arrowBlockOptions,
                arrowBlockDefault,
            )}
        >
            <CautionIcon
                iconSize={iconSizeOptions.xl}
                colorStatus={select(
                    colorStatusLabel,
                    formStatusOptions,
                    formStatusDefault,
                )}
            />
            <Text>
                Message d'erreur. Je répète ceci est un message d'erreur. Et les
                erreurs c'est pas bien, pas bien du tout. Vraiment pas cool.
            </Text>
        </Message>
    ));
