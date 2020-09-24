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
import labels from '../../shared/labels';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

storiesOf(folder.form + folder.sub.button + 'ButtonGroup', module)
    .addDecorator(withKnobs)
    .add('ButtonGroup', () => (
        <ButtonGroup
            align={radios(
                labels.buttonAlign,
                alignOptions,
                alignOptions.center,
            )}
            hasResetedMargins={boolean(labels.compensatedButtonMargins, false)}
            marginLateral={select(
                labels.marginLateral,
                spaceOptions,
                spaceDefault,
            )}
            marginTop={select(labels.marginTop, spaceOptions, spaceDefault)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceDefault,
            )}
        >
            <button type="button">
                <Button
                    buttonStyle={buttonStyleOptions.line}
                    buttonSize={radios(
                        labels.buttonSize,
                        buttonSizeOptions,
                        buttonSizeDefault,
                    )}
                >
                    First button
                </Button>
            </button>

            <button type="button">
                <Button
                    buttonSize={radios(
                        labels.buttonSize,
                        buttonSizeOptions,
                        buttonSizeDefault,
                    )}
                >
                    Second button
                </Button>
            </button>
        </ButtonGroup>
    ));
