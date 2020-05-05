import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { folder, spaceOptions } from '../../shared/constants';
import Main from './Main';
import Topbar from '../Topbar/Topbar';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Logo from '../Logo/Logo';
import { logo } from '../Logo/sample/logo';
import { Box } from './style';

const mainMenuIsOpenLabel = 'Open sidebar';

storiesOf(folder.nav + 'Main', module)
    .addDecorator(withKnobs)
    .add('Main', () => (
        <Main isOpen={boolean(mainMenuIsOpenLabel, true)}>
            <Topbar>
                <MenuHamburger isOpen={boolean(mainMenuIsOpenLabel, true)} />
                <a href="#">
                    <Logo
                        hasBaseline={false}
                        hasHoverRight={true}
                        blockWidth={spaceOptions.sm}
                    >
                        {logo}
                    </Logo>
                </a>
            </Topbar>
            <Box />
        </Main>
    ));
