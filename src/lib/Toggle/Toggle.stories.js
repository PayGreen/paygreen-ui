import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    folder,
} from '../../shared/constants';
import Toggle from './Toggle';

storiesOf(folder.form + 'Toggle', module)
    .addDecorator(withKnobs)
    .add(
        'Toggle',
        () => (
            <Toggle
                
            >
                Sample
            </Toggle>
        )
    );
