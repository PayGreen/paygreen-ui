import React, { useState } from 'react';
import {
    folder,
    blockPositionOptions,
    buttonSizeOptions,
    fontSizeOptions,
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import DaHelp from '../DaHelp/DaHelp';
import DaInput from '../DaInput/DaInput';
import DaLabel from '../DaLabel/DaLabel';
import DaSelect from '../DaSelect/DaSelect';
import DaTextarea from '../DaTextarea/DaTextarea';
import Message from '../Message/Message';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import Text from '../Text/Text';
import { CardsIcon, QuestionBoldIcon, UsersIcon } from '../Icon/Icon';
import FormControl from './FormControl';

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

const MessageContent = (
    <Text textSize={fontSizeOptions.xs}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean felis
        erat, porttitor vel.
    </Text>
);
export default {
    title: folder.form + 'FormControl',
    argTypes: {
        colorStatus: {
            name: labels.colorStatus,
            options: Object.values(formStatusOptions),
            control: 'select',
        },
        required: {
            name: labels.required,
            control: 'boolean',
        },
        disabled: {
            name: labels.disabled,
            control: 'boolean',
        },
        icon: {
            name: labels.icon,
            control: 'boolean',
        },
        hasStaticWidth: {
            name: labels.hasStaticWidth,
            control: 'boolean',
        },
        marginTop: {
            name: labels.marginTop,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        marginBottom: {
            name: labels.marginBottom,
            options: Object.values(spaceOptions),
            control: 'select',
        },
    },
};

export const FormControlWithDaSelect = ({
    colorStatus,
    required,
    marginTop,
    marginBottom,
    icon,
}) => (
    <FormControl
        colorStatus={colorStatus}
        required={required}
        marginTop={marginTop}
        marginBottom={marginBottom}
    >
        <DaLabel>Select label</DaLabel>

        <DaSelect
            defaultValue=""
            options={selectOptions}
            blockWidth={inputWidthOptions.sm}
            icon={icon ? <UsersIcon /> : null}
        />
    </FormControl>
);

FormControlWithDaSelect.args = {
    colorStatus: formStatusDefault,
    required: false,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    icon: true,
};

export const FormControlWithDaSelectHelpMessage = ({
    colorStatus,
    required,
    icon,
    hasStaticWidth,
    disabled,
}) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <FormControl
            colorStatus={colorStatus}
            required={required}
            hasStaticWidth={hasStaticWidth}
        >
            <DaLabel>Input label</DaLabel>

            <DaInput
                placeholder="Firstname Lastname"
                blockWidth={inputWidthOptions.sm}
                icon={icon ? <CardsIcon /> : null}
                disabled={disabled}
            />

            <DaHelp onClick={() => setOpen(!isOpen)}>
                <QuestionBoldIcon />
            </DaHelp>

            {isOpen ? (
                <Message
                    arrowBlock={blockPositionOptions.topRight}
                    blockWidth={inputWidthOptions.sm}
                >
                    {MessageContent}
                </Message>
            ) : (
                <></> //to replace 'null' value and avoid error from storybook
            )}
        </FormControl>
    );
};

FormControlWithDaSelectHelpMessage.args = {
    colorStatus: formStatusDefault,
    required: false,
    hasStaticWidth: false,
    disabled: false,
    icon: true,
};

export const FormControlWithCheckboxGroupMessage = ({
    colorStatus,
    required,
}) => (
    <FormControl colorStatus={colorStatus} required={required}>
        <CheckboxGroup
            name="checkboxes"
            legend={'Checkboxes Label'}
            value={checkboxOptions[1].value}
            options={checkboxOptions}
        />

        <Message
            arrowBlock={blockPositionOptions.topLeft}
            fieldSize={buttonSizeOptions.sm}
            blockWidth={inputWidthOptions.xs}
        >
            {MessageContent}
        </Message>
    </FormControl>
);

FormControlWithCheckboxGroupMessage.args = {
    colorStatus: formStatusDefault,
    required: false,
};

export const FormControlWithDaTextarea = ({
    colorStatus,
    required,
    hasStaticWidth,
}) => (
    <FormControl
        colorStatus={colorStatus}
        required={required}
        hasStaticWidth={hasStaticWidth}
    >
        <DaLabel>Textarea description</DaLabel>

        <DaTextarea
            placeholder="Your text&hellip;"
            maxLength={800}
            hasCounter={true}
        />
    </FormControl>
);

FormControlWithCheckboxGroupMessage.args = {
    colorStatus: formStatusDefault,
    required: false,
    hasStaticWidth: false,
};
