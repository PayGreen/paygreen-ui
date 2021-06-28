import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
    labelHtmlTagOptions,
    labelHtmlTagDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import DaLabel from './DaLabel';

storiesOf(folder.form + 'DaLabel', module)
    .addDecorator(withKnobs)
    .add('DaLabel', () => (
        <DaLabel
            fieldSize={select(
                labels.fieldSize,
                buttonSizeOptions,
                buttonSizeDefault,
            )}
            htmlTag={select(
                labels.htmlTag,
                labelHtmlTagOptions,
                labelHtmlTagDefault,
            )}
            required={boolean(labels.required, false)}
        >
            Label Description
        </DaLabel>
    ));
