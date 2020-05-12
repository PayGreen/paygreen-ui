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
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Logo from '../Logo/Logo';
import { logo } from '../Logo/sample/logo';
import { Box } from '../Main/style';
import { ArrowRightIcon } from '../Icon/Icon';

const Layout = props => {
    const logoSidebar = (
        <Logo
            {...props}
            hasBaseline={false}
            hasHoverRight={true}
            blockWidth={spaceOptions.sm}
            text="tree"
            textSize="lg"
        >
            {logo}
        </Logo>
    );

    const logoTopbar = (
        <Logo
            {...props}
            hasBaseline={false}
            hasHoverRight={true}
            blockWidth={spaceOptions.sm}
        >
            {logo}
        </Logo>
    );

    return (
        <LayoutBase {...props}>
            <Sidebar {...props}>
                <Topbar className="hideOnDesktop" {...props}>
                    <a href="#">{logoSidebar}</a>

                    <ArrowRightIcon
                        {...props}
                        htmlTag={iconHtmlTagOptions.button}
                        iconSize={iconSizeOptions.xl}
                        colorPallet={colorPalletOptions.wab}
                        colorWab={greyOptions.grey40}
                    />
                </Topbar>

                <a href="#" className="hideOnTablet">
                    {logoSidebar}
                </a>

                <Box />
            </Sidebar>

            <Main {...props}>
                <Topbar {...props}>
                    <MenuHamburger {...props} />

                    <a href="#" className="hideOnDesktop">
                        {logoTopbar}
                    </a>
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
