import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    
} from '../../shared/constants';
import Divider from './Divider';

storiesOf('Divider', module).addDecorator(withKnobs)
.add('Divider', () => (
    <Divider
        
    >
        Sample
    </Divider>
));