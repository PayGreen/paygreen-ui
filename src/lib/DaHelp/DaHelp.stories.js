import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import DaHelp from './DaHelp';
import { QuestionBoldIcon } from '../Icon/Icon';

storiesOf(folder.form + folder.sub.button + 'DaHelp', module)
    .addDecorator(withKnobs)
    .add('DaHelp', () => (
        <DaHelp
            fieldSize={radios(
                labels.fieldSize,
                buttonSizeOptions,
                buttonSizeDefault,
            )}
            isActive={boolean(labels.isActive, false)}
            isRounded={boolean('Is rounded', false)}
        >
            <QuestionBoldIcon />
        </DaHelp>
    ));
