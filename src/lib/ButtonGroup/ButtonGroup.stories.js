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
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

storiesOf('ButtonGroup', module)
    .addDecorator(withKnobs)
    .add('ButtonGroup', () => (
        <ButtonGroup
            buttonAlign={radios('Buttons align', alignOptions, alignDefault)}
            blockMargin={radios('Margin top', spaceOptions, spaceDefault)}
        >
            <a href="#">
                <Button
                    template={buttonTemplateOptions.line}
                    buttonSize={radios('Buttons size', buttonSizeOptions, buttonSizeDefault)}
                >
                    First button
                </Button>
            </a>

            <a href="#">
                <Button
                    buttonSize={radios('Buttons size', buttonSizeOptions, buttonSizeDefault)}
                >
                    Second button
                </Button>
            </a>
        </ButtonGroup>
    ), {
        notes: 'You should always use Button component inside a ButtonGroup.',
    });