import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
    colorPalletOptions,
    greyOptions,
    folder,
    spaceOptions,
} from '../../shared/constants';
import Logo from '../Logo/Logo';
import { logo } from '../Logo/sample/logo';
import Sidebar from './Sidebar';
import Topbar from '../Topbar/Topbar';
import { ArrowRightIcon } from '../Icon/Icon';

storiesOf(folder.nav + 'Sidebar', module)
    .addDecorator(withKnobs)
    .add('Sidebar', () => (
        <Sidebar>
            <div className="topbar-nav">
                <Topbar>
                    <div className="main-nav">
                        <a href="#">
                            <Logo
                                hasBaseline={false}
                                hasHoverRight={true}
                                blockWidth={spaceOptions.sm}
                                text="tree"
                                textSize="lg"
                            >
                                {logo}
                            </Logo>
                        </a>
                        <ArrowRightIcon
                            htmlTag="button"
                            iconSize="xl"
                            colorPallet={colorPalletOptions.wab}
                            colorWab={greyOptions.grey40}
                        />
                    </div>
                </Topbar>
            </div>
            <div className="logo-nav">
                <a href="#">
                    <Logo
                        hasBaseline={false}
                        hasHoverRight={true}
                        blockWidth={spaceOptions.sm}
                        text="tree"
                        textSize="lg"
                    >
                        {logo}
                    </Logo>
                </a>
            </div>
        </Sidebar>
    ));
