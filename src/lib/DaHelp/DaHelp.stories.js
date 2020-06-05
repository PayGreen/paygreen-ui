import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    radios,
} from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
    iconSizeOptions
} from '../../shared/constants';
import DaHelp from './DaHelp';
import { QuestionIcon } from '../Icon/Icon';

storiesOf(folder.form + folder.sub.button + 'DaHelp', module)
    .addDecorator(withKnobs)
    .add(
        'DaHelp',
        () => (
            <a href="#">
                <DaHelp
                    fieldSize={radios(
                        'Field size',
                        buttonSizeOptions,
                        buttonSizeDefault,
                    )}
                    disabled={boolean('Disabled', false)}
                    readOnly={boolean('Readonly', false)}
                    isActive={boolean('Is active', false)}
                >
                    <QuestionIcon iconSize={iconSizeOptions.md} />
                </DaHelp>
            </a>
        ),
    );
