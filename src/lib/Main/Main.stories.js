import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { folder, spaceOptions } from '../../shared/constants';
import Main from './Main';
import Topbar from '../Topbar/Topbar'
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Logo from '../Logo/Logo';
import { logo } from '../Logo/sample/logo';

const mainIsOpenLabel = 'Open main';
const mainMenuIsOpenLabel = 'Open primary menu';

storiesOf(folder.nav + 'Main', module)
    .addDecorator(withKnobs)
    .add('Main', () => (
        <Main isOpen={boolean(mainIsOpenLabel, true)}>
                <Topbar>
            <div className="main-nav">
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
            </div>
        </Topbar>
        </Main>
    ));
