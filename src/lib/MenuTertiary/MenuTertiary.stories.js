import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, radios, select } from '@storybook/addon-knobs';
import {
    folder,
} from '../../shared/constants';
import MenuTertiary from './MenuTertiary';

storiesOf(folder.nav + 'MenuTertiary', module)
    .addDecorator(withKnobs)
    .add(
        'MenuTertiary',
        () => (
            <MenuTertiary
                
            >
                Sample sample sample sample sample sample
            </MenuTertiary>
        )
    );
