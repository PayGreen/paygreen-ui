import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { folder, spaceOptions } from '../../shared/constants';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Logo from '../Logo/Logo';
import Sidebar from './Sidebar';
import { logo } from '../Logo/sample/logo';

const mainMenuIsOpenLabel = 'Open primary menu';

storiesOf(folder.nav + 'Sidebar', module)
    .addDecorator(withKnobs)
    .add('Sidebar', () => (
        <Sidebar>
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
        </Sidebar>
    ));
