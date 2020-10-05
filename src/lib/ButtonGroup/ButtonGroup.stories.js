import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
    buttonStyleOptions,
    alignOptions,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

storiesOf(folder.form + folder.sub.button + 'ButtonGroup', module)
    .addDecorator(withKnobs)
    .add('ButtonGroup', () => (
        <ButtonGroup
            align={radios('Buttons align', alignOptions, alignOptions.center)}
            hasResetedMargins={boolean('Compensate buttons margin', false)}
            marginLateral={select('Lateral margin', spaceOptions, spaceDefault)}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            marginBottom={select('Margin bottom', spaceOptions, spaceDefault)}
        >
            <a href="#">
                <Button
                    buttonStyle={buttonStyleOptions.line}
                    buttonSize={radios(
                        'Buttons size',
                        buttonSizeOptions,
                        buttonSizeDefault,
                    )}
                >
                    First button
                </Button>
            </a>

            <a href="#">
                <Button
                    buttonSize={radios(
                        'Buttons size',
                        buttonSizeOptions,
                        buttonSizeDefault,
                    )}
                >
                    Second button
                </Button>
            </a>
        </ButtonGroup>
    ));
