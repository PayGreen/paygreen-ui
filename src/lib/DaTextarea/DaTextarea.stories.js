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
import labels from '../../shared/labels';
import DaTextarea from './DaTextarea';

storiesOf(folder.form + 'DaTextarea', module)
    .addDecorator(withKnobs)
    .add('DaTextarea', () => (
        <DaTextarea
            placeholder="Your text&hellip;"
            maxLength={800}
            hasCounter={boolean(labels.withCounter, true)}
            disabled={boolean(labels.disabled, false)}
            readOnly={boolean(labels.readOnly, false)}
            isRounded={boolean('Is rounded', false)}
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
            hasStaticWidth={boolean('Has static width', false)}
        />
    ));
