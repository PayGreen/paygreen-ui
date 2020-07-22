import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { folder } from '../../shared/constants';
import Main from './Main';
import Topbar from '../Topbar/Topbar';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Box from '../Box/Box';

const mainMenuIsOpenLabel = 'Open sidebar';

storiesOf(folder.nav + 'Main', module)
    .addDecorator(withKnobs)
    .add('Main', () => (
        <Main isOpen={boolean(mainMenuIsOpenLabel, true)}>
            <Topbar>
                <MenuHamburger isOpen={boolean(mainMenuIsOpenLabel, true)} />
            </Topbar>

            <Box />
        </Main>
    ));
