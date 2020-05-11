import React from 'react';
import PropTypes from 'prop-types';
import { LayoutBase } from './style';
import {
    colorPalletOptions,
    greyOptions,
    spaceOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
} from '../../shared/constants';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import { MainSidebar } from '../Sidebar/style';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Logo from '../Logo/Logo';
import { logo } from '../Logo/sample/logo';
import { Box } from '../Main/style';
import { ArrowRightIcon } from '../Icon/Icon';

const Layout = props => {
    
    const logoSidebar = (
        <a href="#">
            <Logo
                hasBaseline={false}
                hasHoverRight={true}
                blockWidth={spaceOptions.sm}
                text="tree"
                textSize="lg"
                {...props}
            >
                {logo}
            </Logo>
        </a>
    );

    return (
        <LayoutBase {...props}>
            <Sidebar {...props}>
                <div className="hideOnDesktop">
                    <MainSidebar {...props}>
                        <Topbar {...props}>
                            {logoSidebar}

                            <ArrowRightIcon
                                {...props}
                                htmlTag={iconHtmlTagOptions.button}
                                iconSize={iconSizeOptions.xl}
                                colorPallet={colorPalletOptions.wab}
                                colorWab={greyOptions.grey40}
                            />
                        </Topbar>

                        <Box />
                    </MainSidebar>
                </div>

                <div className="hideOnTablet">{logoSidebar}</div>
            </Sidebar>

            <Main {...props}>
                <Topbar {...props}>
                    <MenuHamburger {...props} />

                    <div className="hideOnDesktop">
                        <a href="#">
                            <Logo
                                {...props}
                                hasBaseline={false}
                                hasHoverRight={true}
                                blockWidth={spaceOptions.sm}
                            >
                                {logo}
                            </Logo>
                        </a>
                    </div>
                </Topbar>
                <Box {...props}>{props.children}</Box>
            </Main>
        </LayoutBase>
    );
};

Layout.propTypes = {
    isOpen: PropTypes.bool,
};

Layout.defaultProps = {
    isOpen: false,
};

export default Layout;
