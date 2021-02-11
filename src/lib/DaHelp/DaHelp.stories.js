import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import DaHelp from './DaHelp';
import { QuestionBoldIcon } from '../Icon/Icon';

storiesOf(folder.form + folder.sub.button + 'DaHelp', module)
    .addDecorator(withKnobs)
    .add('DaHelp', () => (
        <DaHelp
            fieldSize={radios(
                'Field size',
                buttonSizeOptions,
                buttonSizeDefault,
            )}
            disabled={boolean('Disabled', false)}
            isActive={boolean('Is active', false)}
            isRounded={boolean('Is rounded', false)}
        >
            <QuestionBoldIcon />
        </DaHelp>
    ));
