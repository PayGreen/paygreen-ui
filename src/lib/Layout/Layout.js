import React from 'react';
import PropTypes from 'prop-types';
import { LayoutBase } from './style';
import {
    colorPalletOptions,
    greyOptions,
    spaceOptions,
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
    return (
        <LayoutBase {...props}>
            <Sidebar {...props}>
                <div className="topbar-nav">
                    <Topbar {...props}>
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
            <Main {...props}>
                <Topbar>
                        <MenuHamburger {...props}/>
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
                <Box>{props.children}</Box>
            </Main>
        </LayoutBase>
    );
};

Main.propTypes = {
    isOpen: PropTypes.bool,
};

Main.defaultProps = {
    isOpen: false,
};

export default Layout;
