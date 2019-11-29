import React from 'react';
import MenuList from './MenuList';
import {

} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';

storiesOf('MenuList', module)
    .addDecorator(withKnobs)
    .add('MenuList', () => (
        <MenuList
            
        >
            Sample
        </MenuList>
    ));