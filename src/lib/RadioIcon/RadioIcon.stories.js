import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    
} from '../../shared/constants';
import RadioIcon from './RadioIcon';

storiesOf('RadioIcon', module).addDecorator(withKnobs)
.add('RadioIcon', () => (
    <RadioIcon
        
    >
        Sample
    </RadioIcon>
));