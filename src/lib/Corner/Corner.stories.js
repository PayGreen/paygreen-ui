import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    folder,
} from '../../shared/constants';
import Corner from './Corner';

storiesOf(folder.main + 'Corner', module)
    .addDecorator(withKnobs)
    .add(
        'Corner',
        () => (
            <Corner
                
            >
                Sample
            </Corner>
        )
    );
