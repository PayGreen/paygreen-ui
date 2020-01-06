import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    
} from '../../shared/constants';
import Text from '../Text/Text';
import InternalGrid from './InternalGrid';

storiesOf('InternalGrid', module).addDecorator(withKnobs)
.add('InternalGrid', () => (
    <InternalGrid
        
    >
        <Text>
            Text 1
        </Text>

        <Text>
            Text 2
        </Text>

        <Text>
            Text 3
        </Text>

        <Text>
            Text 4
        </Text>
    </InternalGrid>
));