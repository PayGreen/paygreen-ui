import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const LogoContainer = styled.div`
    @media (${props => props.theme.query.min.md}) {
        display: none;
    }
`;

const Layout = props => {
    return (
        <LayoutBase {...props}>
            <Sidebar {...props}>
                <div className="topbar-nav">
                    <Topbar {...props}>
                        <a href="#">
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
                        </a>
                        <ArrowRightIcon
                            {...props}
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
                            {...props}
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
                <Topbar {...props}>
                    <MenuHamburger {...props} />
                    <LogoContainer {...props}>
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
                    </LogoContainer>
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
