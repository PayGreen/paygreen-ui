import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import {
    buttonSizeOptions,
    buttonSizeDefault,
    buttonTemplateOptions,
    spaceOptions,
    spaceDefault,
    alignOptions,
    alignDefault
} from '../../shared/const';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

storiesOf('ButtonGroup', module)
    .addDecorator(withKnobs)
    .add('ButtonGroup', () => (
        <ButtonGroup
            align={radios('Align', alignOptions, alignDefault)}
            margin={radios('Margin top', spaceOptions, spaceDefault)}
        >
            <Button
                template={buttonTemplateOptions.line}
                size={radios('Buttons size', buttonSizeOptions, buttonSizeDefault)}
            >
                First button
            </Button>

            <Button
                size={radios('Buttons size', buttonSizeOptions, buttonSizeDefault)}
            >
                Second button
            </Button>
        </ButtonGroup>
    ), {
        notes: 'You should always use Button component inside a ButtonGroup.',
    });