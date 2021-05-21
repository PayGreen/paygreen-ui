import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
    inputWidthOptions,
    inputWidthDefault,
} from '../../shared/constants';
import DaTextarea from './DaTextarea';

storiesOf(folder.form + 'DaTextarea', module)
    .addDecorator(withKnobs)
    .add('DaTextarea', () => (
        <DaTextarea
            placeholder="Your text&hellip;"
            maxLength={800}
            hasCounter={boolean('With counter', true)}
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
        />
    ));
