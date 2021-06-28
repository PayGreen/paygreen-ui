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
import { PhoneIcon, SearchIcon } from '../Icon/Icon';
import DaInput from './DaInput';

storiesOf(folder.form + 'DaInput', module)
    .addDecorator(withKnobs)
    .add('Text', () => (
        <DaInput
            placeholder="Firstname Lastname"
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
            icon={boolean(labels.icon, true) ? <SearchIcon /> : null}
        />
    ))
    .add('Tel', () => (
        <DaInput
            type="tel"
            placeholder="+33 (0)6 11 22 33 44"
            disabled={boolean(labels.disabled, false)}
            readOnly={boolean(labels.readOnly, false)}
            isRounded={boolean(labels.isRounded, false)}
            fieldSize={radios(
                labels.fieldSize,
                buttonSizeOptions,
                buttonSizeDefault,
            )}
            hasHelpButton={boolean(labels.hasHelpButton, false)}
            icon={boolean(labels.icon, true) ? <PhoneIcon /> : null}
        />
    ));
