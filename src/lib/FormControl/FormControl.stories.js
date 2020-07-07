import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    arrowBlockOptions,
    buttonSizeOptions,
    fontSizeOptions,
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
} from '../../shared/constants';
import DaHelp from '../DaHelp/DaHelp';
import DaInput from '../DaInput/DaInput';
import DaLabel from '../DaLabel/DaLabel';
import DaSelect from '../DaSelect/DaSelect';
import DaTextarea from '../DaTextarea/DaTextarea';
import Message from '../Message/Message';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import Text from '../Text/Text';
import { QuestionBoldIcon } from '../Icon/Icon';
import FormControl from './FormControl';

const colorStatusLabel = 'Status color';
const isRequiredLabel = 'Is required';

const selectOptions = [
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
    .add('Form Control with select', () => (
        <FormControl
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            isRequired={boolean(isRequiredLabel, false)}
        >
            <DaLabel>Select Label</DaLabel>

            <DaSelect
                defaultValue=""
                options={selectOptions}
                fieldSize={buttonSizeOptions.md}
                blockWidth={inputWidthOptions.sm}
            />
        </FormControl>
    ))
    .add('Form Control with input + help button and Message', () => (
        <FormControl
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            isRequired={boolean(isRequiredLabel, false)}
            hasHelpButton={true}
        >
            <DaLabel>Input Description</DaLabel>

            <DaInput
                placeholder="Firstname Lastname"
                fieldSize={buttonSizeOptions.md}
                blockWidth={inputWidthOptions.sm}
                hasHelpButton={true}
            />

            <DaHelp fieldSize={buttonSizeOptions.md}>
                <QuestionBoldIcon />
            </DaHelp>

            {boolean('is DaHelp button clicked', true) ? (
                <Message
                    arrowBlock={arrowBlockOptions.topRight}
                    fieldSize={buttonSizeOptions.md}
                    blockWidth={inputWidthOptions.sm}
                >
                    <Text textSize={fontSizeOptions.sm}>
                        Ceci est un message à caractère informatif! Il est très
                        important de le lire!
                    </Text>
                </Message>
            ) : (
                <Text></Text>
            )}
        </FormControl>
    ))
    .add('Form Control with checkbox and Message', () => (
        <FormControl
            colorStatus={select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            )}
            isRequired={boolean(isRequiredLabel, false)}
        >
            <CheckboxGroup
                name="checkboxes"
                legend={'Checkboxes Label'}
                value={checkboxOptions[1].value}
                options={checkboxOptions}
                fieldSize={buttonSizeOptions.md}
            />
            <Message
                arrowBlock={arrowBlockOptions.topLeft}
                fieldSize={buttonSizeOptions.sm}
                blockWidth={inputWidthOptions.xs}
            >
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
            isRequired={boolean(isRequiredLabel, false)}
        >
            <DaLabel>Text area description</DaLabel>

            <DaTextarea
                placeholder="Your text&hellip;"
                maxLength={800}
                hasCounter={true}
                fieldSize={buttonSizeOptions.md}
            />
        </FormControl>
    ));
