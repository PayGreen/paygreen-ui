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
import { PhoneIcon, SearchIcon } from '../Icon/Icon';
import DaInput from './DaInput';

storiesOf(folder.form + 'DaInput', module)
    .addDecorator(withKnobs)
    .add('Text', () => (
        <DaInput
            placeholder="Firstname Lastname"
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Readonly', false)}
            isRounded={boolean('Is rounded', false)}
            fieldSize={radios(
                'Field size',
                buttonSizeOptions,
                buttonSizeDefault,
            )}
            blockWidth={radios(
                'Block width',
                inputWidthOptions,
                inputWidthDefault,
            )}
            hasStaticWidth={boolean('Has static width', false)}
            hasHelpButton={boolean('Help button', false)}
            icon={boolean('Has icon', true) ? <SearchIcon /> : null}
        />
    ))
    .add('Tel', () => (
        <DaInput
            type="tel"
            placeholder="+33 (0)6 11 22 33 44"
            disabled={boolean('Disabled', false)}
            readOnly={boolean('Readonly', false)}
            isRounded={boolean('Is rounded', false)}
            fieldSize={radios(
                'Field size',
                buttonSizeOptions,
                buttonSizeDefault,
            )}
            hasHelpButton={boolean('Help button', false)}
            icon={boolean('Has icon', true) ? <PhoneIcon /> : null}
        />
    ));
