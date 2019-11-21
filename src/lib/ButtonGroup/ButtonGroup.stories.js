import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import {
    buttonSizeOptions,
    buttonSizeDefault,
    buttonTemplateOptions,
    alignOptions,
    alignDefault,
    blockSpaceOptions,
    blockSpaceDefault
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';

storiesOf('ButtonGroup', module)
    .addDecorator(withKnobs)
    .add('ButtonGroup', () => (
        <ButtonGroup
            buttonAlign={radios('Buttons align', alignOptions, alignDefault)}
            marginTop={select('Margin top', blockSpaceOptions, blockSpaceDefault)}
            marginBottom={select('Margin bottom', blockSpaceOptions, blockSpaceDefault)}
            paddingBlock={select('Block\'s padding', blockSpaceOptions, blockSpaceDefault)}
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
        notes: 'You must always use Button component inside a ButtonGroup. You can add margin-top, margin-bottom, and padding (left and right only) with props. Button component comes with its own margins: in order to avoid shift with other components, you can compensate buttons margin with the resetMargin prop on ButtonGroup.',
    });