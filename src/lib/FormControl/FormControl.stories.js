import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    arrowBlockOptions,
    formStatusOptions,
    formStatusDefault,
    iconSizeOptions,
    fontSizeOptions,
    buttonSizeOptions,
    inputWidthOptions,
    labelHtmlTagOptions,
} from '../../shared/constants';
import DaSelect from '../DaSelect/DaSelect';
import DaLabel from '../DaLabel/DaLabel';
import DaHelp from '../DaHelp/DaHelp';
import DaInput from '../DaInput/DaInput';
import Message from '../Message/Message';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import Text from '../Text/Text';
import { CautionIcon } from '../Icon/Icon';
import FormControl from './FormControl';
import { QuestionBoldIcon } from '../Icon/Icon';

const { none, ...messageBlockOptions } = arrowBlockOptions;
const colorStatusLabel = 'Status color';

const options = [
    {
        value: '',
        text: 'Choose your option...',
        disabled: true,
    },
    {
        value: 'first',
        text: 'First option',
    },
    {
        value: 'second',
        text: 'Second option',
    },
    {
        value: 'third',
        text: 'Third option',
    },
];

const checkboxOptions = [
    {
        label: 'First Choice',
        value: 'first',
    },
    {
        label: 'Second Choice',
        value: 'second',
    },
    {
        label: 'Third Choice',
        value: 'third',
    },
];

storiesOf(folder.form + 'FormControl', module)
    .addDecorator(withKnobs)
    .add('Form Control with select + message', () => (
        <FormControl
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            messageStyle={select(
                'Message style',
                messageBlockOptions,
                messageBlockOptions.top,
            )}
        >
            <DaLabel
                fieldSize={buttonSizeOptions.md}
                htmlTag={labelHtmlTagOptions.label}
            >
                Label Description
            </DaLabel>
            <DaSelect
                defaultValue=""
                options={options}
                fieldSize={buttonSizeOptions.md}
                blockWidth={inputWidthOptions.sm}
            />
            <Message
                arrowBlock={arrowBlockOptions.left}
                fieldSize={buttonSizeOptions.md}
                blockWidth={inputWidthOptions.sm}
            >
                <CautionIcon iconSize={iconSizeOptions.lg} />

                <Text textSize={fontSizeOptions.sm}>
                    Ceci est un message à caractère informatif!
                </Text>
            </Message>
        </FormControl>
    ))
    .add('Form Control with input + help button', () => (
        <FormControl
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
        >
            <DaLabel
                fieldSize={buttonSizeOptions.md}
                htmlTag={labelHtmlTagOptions.label}
            >
                Label Description
            </DaLabel>
            <DaInput
                placeholder="Firstname Lastname"
                fieldSize={buttonSizeOptions.md}
                blockWidth={inputWidthOptions.md}
                hasHelpButton={true}
            />
            <DaHelp fieldSize={buttonSizeOptions.md}>
                <QuestionBoldIcon />
            </DaHelp>
        </FormControl>
    ))
    .add('Form Control with checkbox', () => (
        <FormControl
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
        >
            <CheckboxGroup
                name="checkboxes"
                legend={'Checkboxes Label'}
                value={checkboxOptions[1].value}
                options={checkboxOptions}
                fieldSize={buttonSizeOptions.md}
            />
        </FormControl>
    ));
