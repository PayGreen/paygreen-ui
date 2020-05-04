import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { folder, spaceOptions } from '../../shared/constants';
import Logo from '../Logo/Logo';
import Sidebar from './Sidebar';
import { logo } from '../Logo/sample/logo';
import Topbar from '../Topbar/Topbar';
import { ArrowRight } from '../Icon/components';

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
                        <div className="icon-nav">
                            <ArrowRight
                                htmlTag="button"
                                iconSize="sm"
                                colorTheme="primary"
                            />
                        </div>
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
