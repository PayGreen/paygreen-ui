import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    
} from '../../shared/constants';
import Table from './Table';

storiesOf('Table', module).addDecorator(withKnobs)
.add('Table', () => (
    <Table
        
    >
        Sample
    </Table>
));