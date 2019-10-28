import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import {
    colorDefault,
    buttonSizeOptions,
    buttonSizeDefault,
    spaceOptions,
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
            margin={radios('Margin top', spaceOptions, 'xs')}
        >
            <Button
                template='line'
                color={colorDefault}
                size={radios('Size', buttonSizeOptions, buttonSizeDefault)}
            >
                First button
            </Button>

            <Button
                color={colorDefault}
                size={radios('Size', buttonSizeOptions, buttonSizeDefault)}
            >
                Second button
            </Button>
        </ButtonGroup>
    ), {
        notes: 'You should always use Button component inside a ButtonGroup.',
    });