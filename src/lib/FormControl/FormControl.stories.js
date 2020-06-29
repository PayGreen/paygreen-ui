import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    folder,
    arrowBlockOptions,
    formStatusOptions,
    iconSizeOptions,
    fontSizeOptions,
    buttonSizeOptions,
    inputWidthOptions,
    labelHtmlTagOptions,
} from '../../shared/constants';
import DaSelect from '../DaSelect/DaSelect';
import DaLabel from '../DaLabel/DaLabel';
import Message from '../Message/Message';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import Text from '../Text/Text';
import { CautionIcon } from '../Icon/Icon';
import FormControl from './FormControl';

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
    .add('Form Control with input + message', () => (
        <FormControl isError={boolean('error', false)}>
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
                hasHelpButton={false}
            />
            <Message
                arrowBlock={arrowBlockOptions.left}
                fieldSize={buttonSizeOptions.md}
                blockWidth={inputWidthOptions.sm}
            >
                <CautionIcon iconSize={iconSizeOptions.lg} />

                <Text textSize={fontSizeOptions.sm}>
                    Message d'erreur. Je répète ceci est un message d'erreur.
                </Text>
            </Message>
        </FormControl>
    ))
    .add('Form Control with checkbox', () => (
        <FormControl isError={boolean('error', false)}>
            <CheckboxGroup
                name="checkboxes"
                legend={'Checkboxes Label'}
                value={checkboxOptions[1].value}
                options={checkboxOptions}
                fieldSize={buttonSizeOptions.md}

            />
        </FormControl>
    ));
