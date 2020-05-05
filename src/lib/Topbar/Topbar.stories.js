import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { folder } from '../../shared/constants';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Topbar from './Topbar';

storiesOf(folder.nav + 'Topbar', module)
    .addDecorator(withKnobs)
    .add('Topbar', () => (
        <Topbar>
            <MenuHamburger isOpen={boolean('Is open', true)} />
        </Topbar>
    ));
