import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import {
    buttonSizeOptions,
    buttonSizeDefault,
    buttonTemplateOptions,
    alignOptions,
    alignDefault,
    blockPaddingOptions,
    blockPaddingDefault
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';

storiesOf('ButtonGroup', module)
    .addDecorator(withKnobs)
    .add('ButtonGroup', () => (
        <ButtonGroup
            buttonAlign={radios('Buttons align', alignOptions, alignDefault)}
            marginTop={select('Margin top', blockPaddingOptions, blockPaddingDefault)}
            marginBottom={select('Margin bottom', blockPaddingOptions, blockPaddingDefault)}
            paddingBlock={select('Block\'s padding', blockPaddingOptions, blockPaddingDefault)}
            resetMargin={boolean('Compensate buttons margin', false)}
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
        notes: 'You must always use Button component inside a ButtonGroup.',
    });