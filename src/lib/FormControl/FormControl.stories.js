import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
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
import DaTextarea from '../DaTextarea/DaTextarea';
import DaInput from '../DaInput/DaInput';
import Message from '../Message/Message';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import RadioGroup from '../RadioGroup/RadioGroup';
import Text from '../Text/Text';
import { CautionIcon } from '../Icon/Icon';
import FormControl from './FormControl';
import { QuestionBoldIcon } from '../Icon/Icon';

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

const radioOptions = [
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
    .add('Form Control with select', () => (
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

            <DaSelect
                defaultValue=""
                options={options}
                fieldSize={buttonSizeOptions.md}
                blockWidth={inputWidthOptions.sm}
            />

            <Message
                arrowBlock={arrowBlockOptions.top}
                fieldSize={buttonSizeOptions.md}
                blockWidth={inputWidthOptions.sm}
            >
                <CautionIcon iconSize={iconSizeOptions.lg} />

                <Text textSize={fontSizeOptions.sm}>
                    Ceci est un message à caractère informatif! Il est très
                    important de le lire!
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
                blockWidth={inputWidthOptions.lg}
                hasHelpButton={true}
            />
            <DaHelp fieldSize={buttonSizeOptions.md}>
                <QuestionBoldIcon />
            </DaHelp>
            <Message
                arrowBlock={arrowBlockOptions.top}
                fieldSize={buttonSizeOptions.md}
                blockWidth={inputWidthOptions.lg}
            >
                <CautionIcon iconSize={iconSizeOptions.lg} />

                <Text textSize={fontSizeOptions.sm}>
                    Ceci est un message à caractère informatif! Il est très
                    important de le lire!
                </Text>
            </Message>
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
            <Message
                arrowBlock={arrowBlockOptions.top}
                fieldSize={buttonSizeOptions.md}
                blockWidth={inputWidthOptions.sm}
            >
                <CautionIcon iconSize={iconSizeOptions.lg} />

                <Text textSize={fontSizeOptions.sm}>
                    Ceci est un message à caractère informatif! Il est très
                    important de le lire!
                </Text>
            </Message>
        </FormControl>
    ))
    .add('Form Control with radio', () => (
        <FormControl
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
        >
            <RadioGroup
                name="radios"
                legend={'Radios Label'}
                value={radioOptions[1].value}
                options={radioOptions}
                fieldSize={buttonSizeOptions.md}
            />
            <Message
                arrowBlock={arrowBlockOptions.top}
                fieldSize={buttonSizeOptions.md}
                blockWidth={inputWidthOptions.sm}
            >
                <CautionIcon iconSize={iconSizeOptions.lg} />

                <Text textSize={fontSizeOptions.sm}>
                    Ceci est un message à caractère informatif! Il est très
                    important de le lire!
                </Text>
            </Message>
        </FormControl>
    ))
    .add('Form Control with text area', () => (
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

            <DaTextarea
                placeholder="Your text&hellip;"
                maxLength={800}
                hasCounter={true}
                fieldSize={buttonSizeOptions.md}
                blockWidth={inputWidthOptions.md}
            />
            <Message
                arrowBlock={arrowBlockOptions.top}
                fieldSize={buttonSizeOptions.md}
                blockWidth={inputWidthOptions.md}
            >
                <CautionIcon iconSize={iconSizeOptions.lg} />

                <Text textSize={fontSizeOptions.sm}>
                    Ceci est un message à caractère informatif! Il est très
                    important de le lire!
                </Text>
            </Message>
        </FormControl>
    ));
