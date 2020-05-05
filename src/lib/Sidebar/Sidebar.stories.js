import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
    colorPalletOptions,
    greyOptions,
    folder,
    spaceOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
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
                    <a href="#">
                        <Logo
                            hasBaseline={false}
                            hasHoverRight={true}
                            blockWidth={spaceOptions.md}
                        >
                            {logo}
                        </Logo>
                    </a>
                    <ArrowRightIcon
                        htmlTag={iconHtmlTagOptions.button}
                        iconSize={iconSizeOptions.xl}
                        colorPallet={colorPalletOptions.wab}
                        colorWab={greyOptions.grey40}
                    />
                </Topbar>
            </div>
            <div className="logo-nav">
                <a href="#">
                    <Logo
                        hasBaseline={false}
                        hasHoverRight={true}
                        blockWidth={spaceOptions.md}
                    >
                        {logo}
                    </Logo>
                </a>
            </div>
        </Sidebar>
    ));
