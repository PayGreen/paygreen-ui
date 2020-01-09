import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';
import {
    
} from '../../shared/constants';
import ListHorizontal from './ListHorizontal';

storiesOf('ListHorizontal', module).addDecorator(withKnobs)
.add('ListHorizontal', () => (
    <ListHorizontal
        
    >
        Sample
    </ListHorizontal>
));