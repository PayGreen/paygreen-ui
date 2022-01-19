import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    inputWidthOptions,
    inputWidthDefault,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { ListIcon } from '../Icon/Icon';
import DaSelect from './DaSelect';

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
        value: 2,
        text: 'Second option',
    },
    {
        value: 'third',
        text: 'Third option',
    },
];

const optionsGroup = [
    {
        value: '',
        text: 'Choose your option...',
        disabled: true,
    },
    {
        optgroup: 'First group',
        values: [
            {
                value: 'first',
                text: 'First option',
            },
            {
                value: 2,
                text: 'Second option',
            },
            {
                value: 'third',
                text: 'Third option',
            },
        ],
    },
    {
        optgroup: 'Second group',
        values: [
            {
                value: 'first 2',
                text: 'First option',
            },
            {
                value: 'second 2',
                text: 'Second option',
                disabled: true,
            },
            {
                value: 'third 2',
                text: 'Third option',
            },
        ],
    },
];

storiesOf(folder.form + 'DaSelect', module)
    .addDecorator(withKnobs)
    .add('DaSelect', () => (
        <DaSelect
            defaultValue=""
            options={boolean(labels.optgroup, true) ? optionsGroup : options}
            disabled={boolean(labels.disabled, false)}
            readOnly={boolean(labels.readOnly, false)}
            isRounded={boolean(labels.isRounded, false)}
            fieldSize={radios(
                labels.fieldSize,
                buttonSizeOptions,
                buttonSizeDefault,
            )}
            blockWidth={radios(
                labels.blockWidth,
                inputWidthOptions,
                inputWidthDefault,
            )}
            hasStaticWidth={boolean(labels.hasStaticWidth, false)}
            hasHelpButton={boolean(labels.hasHelpButton, false)}
            icon={boolean(labels.icon, true) ? <ListIcon /> : null}
        />
    ));
